# 자동 환불 확인 (RTDN)
* 48시간 이내 google 자동환불 (RTDN - Google Play 승인 시)
* Google 이 환불 승인하면 `voidedPurchaseNotification` RTDN → `rtdn-handler` Edge Function 자동 실행.

# 수동 환불 (관리자가 직접 처리)
* 앱 관리자 UI에 환불버튼 없음. **Management API로 `revoke_iap_purchase` RPC 직접 호출**.
* **필요 정보**: `order_id` 또는 `purchase_token` — 관리자 앱 "결제 내역" 탭에서 확인.

---
**PowerShell 실행 예시**:
```powershell
$token = "<SUPABASE_ACCESS_TOKEN>"
$ref   = "kulmvqoufrighihxrhit"
$uri   = "https://api.supabase.com/v1/projects/$ref/database/query"
$sql   = "select * from public.revoke_iap_purchase('<order_id_or_purchase_token>');"
$body  = @{ query = $sql } | ConvertTo-Json -Compress
$bytes = [System.Text.Encoding]::UTF8.GetBytes($body)
Invoke-RestMethod -Method Post -Uri $uri `
  -Headers @{Authorization="Bearer $token"} `
  -ContentType 'application/json; charset=utf-8' -Body $bytes
```

**반환값** `(new_balance, clawback, was_already_revoked)`:

- `clawback > 0`: 실제 차감됨 → 정상
- `clawback = 0`: 잔액 부족(이미 다 쓴 경우) → 음의 잔액 미발생, 정상 동작
- `was_already_revoked = true`: 이미 처리됨 → 멱등 응답

**사후 확인**:

```sql
-- 환불 행 존재
select credit_delta, reason from credit_transactions
  where reason = 'refund:<order_id>';
-- 잔액
select balance from credits where user_id = '<user_id>' and virtual_account_id is null;
-- purchase_state = 1
select purchase_state from iap_purchases where order_id = '<order_id>';
```

**합격 기준**: `credit_transactions` 음수 행 존재, `iap_purchases.purchase_state=1`, `credits.balance` 감소(clawback 만큼).

#### 3-C. 크레딧 수동 보정 (환불 후 재지급 등)

환불 후 고객 불만 처리 등으로 크레딧 재지급 필요 시 → 관리자 앱 "계정 관리" → `admin_grant_credit` 호출. (`lib/page/account_management_page.dart:172`)

---

### 검증 체크리스트

| 항목                                 | 확인 방법       | 담당     |
| ---------------------------------- | ----------- | ------ |
| 결제 후 `iap_purchases` 행 생성          | DB 조회       | Claude |
| 결제 후 `credits.balance` 증가          | DB 조회       | Claude |
| 결제 후 앱 화면 잔액 갱신                    | screencap   | 사람     |
| 환불 요청 제출                           | Google Play | 사람     |
| RTDN 수신 → `purchase_state=1` 자동 전환 | DB 조회       | Claude |
| 환불 후 `credit_transactions` 음수 행    | DB 조회       | Claude |
| 환불 후 `credits.balance` 감소          | DB 조회       | Claude |
| 환불 후 앱 화면 잔액 감소                    | screencap   | 사람     |

---

google play console에 주문관리에서 환불처리 할수 있고
'이용자격취소' 자격삭제에 체크 해야함.

**설정 → API 통합 → Pub/Sub 주제** 또는 **수익 창출 → 실시간 개발자 알림(RTDN)** 섹션에 `rtdn-handler` URL이 등록돼 있는지 봐줘.

URL 형식: `https://kulmvqoufrighihxrhit.supabase.co/functions/v1/rtdn-handler`