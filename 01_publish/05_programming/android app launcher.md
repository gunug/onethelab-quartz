# 안드로이드 런처가 접근 가능한 앱 정보

## 📦 PackageManager API로 접근 가능한 기본 정보

### 즉시 접근 가능 (권한 불필요)

| 정보 | API 메서드 | 설명 |
|------|-----------|------|
| 앱 레이블 | `getApplicationLabel()` | 앱 이름 |
| 앱 아이콘 | `getApplicationIcon()` | 아이콘 이미지 (Drawable) |
| 패키지명 | `getInstalledApplications()` | 패키지 고유 ID |
| 버전명 | `getPackageInfo()` | 앱 버전 (예: 1.0.0) |
| 버전 코드 | `getPackageInfo()` | 앱 버전 번호 |
| 카테고리 | AndroidManifest 분석 | 런처 액티비티 카테고리 |
| 설치 시간 | `firstInstallTime` | 앱 설치 날짜/시간 |
| 업데이트 시간 | `lastUpdateTime` | 마지막 업데이트 날짜/시간 |
| 앱 크기 | `sourceDir` | 설치된 앱 크기 |
| 대상 API 레벨 | `targetSdkVersion` | 앱이 타겟하는 Android 버전 |
| 최소 API 레벨 | `minSdkVersion` | 앱이 필요한 최소 Android 버전 |
| Adaptive Icon | 아이콘 분석 | Android 8.0+ 아이콘 지원 여부 |

---

## 🔐 권한이 필요한 정보

### `android.permission.PACKAGE_USAGE_STATS` 필수
**설정 경로**: Settings > Apps > Special App Access > Usage Access
**승인 방식**: 사용자가 수동으로 설정 (앱에서 자동 승인 불가)

| 정보 | API | 설명 |
|------|-----|------|
| 앱 총 사용 시간 | `UsageStatsManager.queryUsageStats()` | 포그라운드 사용 시간 (분 단위) |
| 마지막 사용 시간 | `lastTimeUsed` | 앱을 마지막으로 실행한 시간 |
| 사용 빈도 | 통계 분석 | 일일/주일/월별 집계 |
| 상세 이벤트 | `queryEvents()` | 포그라운드 진입/백그라운드 이동 시간 |

**제약사항**:
- 최근 몇 분 데이터는 제외됨 (남용 방지)
- 시스템이 보관하는 기간만 접근 가능

---

## 📋 AndroidManifest.xml에서 읽을 수 있는 정보

### 권한 관련
- 앱이 요청하는 권한 목록 (`requestedPermissions`)
- 위험도 높은 권한 감지 가능

### 권한 패턴 분석
```
📷 카메라 권한 → 카메라/영상 관련 앱
🎤 마이크 권한 → 통화/음성 관련 앱
📍 위치 권한 → 지도/배달/네비게이션 앱
📱 연락처 권한 → 통신/SNS 앱
```

### 액티비티 정보
- LAUNCHER 카테고리 액티비티 감지
- 앱의 주요 진입점 파악

---

## ✅ 자동분류에 활용 가능한 정보

### 1️⃣ 앱 이름 기반 (100% 신뢰도 낮음)
```
키워드 매칭:
- "카톡", "톡", "메시지", "라인" → 통신/SNS
- "인스타", "페북", "트위터", "유튜브" → SNS/엔터
- "넷플릭스", "유튜브", "스포티파이" → 엔터테인먼트
- "캘린더", "할일", "메모", "노션" → 생산성
- "쿠팡", "배달의민족", "우버이츠" → 쇼핑/음식
```

### 2️⃣ 요청 권한 패턴
```
카메라 + 사진 저장 권한 → 카메라/사진앱
위치 + 연락처 권한 → 지도/배달앱
마이크 + 통화 권한 → 통화/음성앱
센서 권한 많음 → 게임/헬스 앱
```

### 3️⃣ 사용 통계 (PACKAGE_USAGE_STATS 권한 필수)
```
높은 사용 시간 → "자주 쓰는 앱" 섹션
최근 사용 시간 → "최근 앱" 섹션
사용 패턴 분석 → 카테고리 자동 학습
```

### 4️⃣ 버전/카테고리 정보
```
targetSdkVersion 높음 → 최신 기술 활용 앱
AndroidManifest 카테고리 → 개발자 분류 참고
```

---

## ❌ 접근 불가능한 정보

| 정보 | 이유 |
|------|------|
| Google Play Store 설명 | 공식 API 없음 |
| 앱 평점/리뷰 | Play Store API 제한 |
| 앱 장르/카테고리 (Play Store) | Play Store API 제한 |
| 개발사 정보 | Play Store API 제한 |
| 유사 앱 추천 | Play Store 독점 |
| 데이터 안전 정보 (Android 14 미만) | 시스템 메타데이터 미제공 |

**대안**: 써드파티 API (AppTweak, Data.ai 등) 필요

---

## 🔍 정보 접근 제약사항

### Android 11+ (Package Visibility)
- `<queries>` 요소로 LAUNCHER 카테고리 앱만 조회 가능
- 또는 `QUERY_ALL_PACKAGES` 권한 필요 (Google Play 정책 검토)

### Android 12+
- `android:exported` 명시 필수
- 메타데이터 일부 난독화

### Android 14+
- 데이터 안전 메타데이터 도입
- 이벤트 로그 데이터 더욱 제한됨

---

## 🎯 런처 개발 시 실제 활용 방안

### 필수 (항상 사용 가능)
- ✅ 앱 목록, 아이콘, 레이블 표시
- ✅ 앱 이름 키워드로 검색
- ✅ 권한 패턴으로 카테고리 추측

### 선택 (사용자 권한 필요)
- ⚠️ 마지막 사용 시간 표시 (PACKAGE_USAGE_STATS)
- ⚠️ 자주 쓰는 앱 자동 배치 (PACKAGE_USAGE_STATS)
- ⚠️ 사용 시간 통계 표시 (PACKAGE_USAGE_STATS)

### 불가능
- ❌ Play Store 정보 표시 (써드파티 API 필요)

---

## 📊 자동분류 전략

### 현실적인 정확도
```
예상 정확도: 70-80%
오분류 가능성: 20-30% (애매한 앱들)
```

### 권장 방식
1. **자동분류 (기본)**
   - 앱 이름 키워드 + 권한 패턴 + AndroidManifest 카테고리 조합

2. **사용자 보정 (수동)**
   - 사용자가 앱을 길게 눌러 다른 카테고리로 이동 가능
   - 그 선택을 학습하여 같은 유형 앱에 적용

3. **학습 (점진적)**
   - 시간이 지나며 사용자 패턴으로 더 정확한 분류 진화

---

## 📝 정보 접근 코드 예시 (Java/Kotlin)

### 기본 앱 정보 조회
```kotlin
val pm = context.packageManager
val apps = pm.getInstalledApplications(0)

for (app in apps) {
    val label = app.loadLabel(pm)  // 앱 이름
    val icon = app.loadIcon(pm)    // 아이콘
    val packageName = app.packageName  // 패키지명
}
```

### 권한 조회
```kotlin
val packageInfo = pm.getPackageInfo(packageName, PackageManager.GET_PERMISSIONS)
val permissions = packageInfo.requestedPermissions ?: arrayOf()
```

### 사용 통계 조회
```kotlin
val usageStatsManager = context.getSystemService(Context.USAGE_STATS_SERVICE) as UsageStatsManager
val stats = usageStatsManager.queryUsageStats(
    UsageStatsManager.INTERVAL_DAILY,
    startTime,
    endTime
)

for (stat in stats) {
    val appName = stat.packageName
    val usageTime = stat.totalTimeInForeground  // 사용 시간 (ms)
    val lastTime = stat.lastTimeUsed  // 마지막 사용 시간
}
```

---

## 🔗 참고 자료

- [PackageManager API Reference](https://developer.android.com/reference/android/content/pm/PackageManager)
- [UsageStatsManager Documentation](https://developer.android.com/reference/android/app/usage/UsageStatsManager)
- [Package Visibility Filtering](https://developer.android.com/training/package-visibility)
- [Declare package visibility needs](https://developer.android.com/training/package-visibility/declaring)
