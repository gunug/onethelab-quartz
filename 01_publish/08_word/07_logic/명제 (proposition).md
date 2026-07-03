# 명제 (Proposition)

## 정의

**명제(proposition)**란 참(true) 또는 거짓(false) 중 하나의 값을 가지는 선언적 문장이다.

### 예시
- "서울은 한국의 수도이다" → **참** (명제)
- "2 + 2 = 4" → **참** (명제)
- "오늘 날씨가 좋다" → 명제 아님 (주관적, 진리값 불확정)
- "x > 5" → 명제 아님 (x의 값에 따라 결정되는 명제함수)

---

## 기본 기호 및 표기

| 개념 | 기호 | 의미 | 예시 |
|------|------|------|------|
| **명제변수** | P, Q, R, ... | 명제를 나타내는 변수 | P: "비가 내린다" |
| **참** | T 또는 ⊤ | 참의 진리값 | |
| **거짓** | F 또는 ⊥ | 거짓의 진리값 | |
| **NOT** (부정) | ¬P, ~P | "P가 아니다" | ¬P: "비가 내리지 않는다" |

---

## 명제 연산자 (Logical Operators)

### 1. 부정 (Negation)
```
¬P (NOT P)
```
| P | ¬P |
|---|-----|
| T | F |
| F | T |

**설명**: P의 진리값을 반대로 뒤집음

---

### 2. 논리곱 (Conjunction / AND)
```
P ∧ Q (P AND Q)
```
| P | Q | P ∧ Q |
|---|---|-------|
| T | T | T |
| T | F | F |
| F | T | F |
| F | F | F |

**설명**: P와 Q가 모두 참일 때만 참

---

### 3. 논리합 (Disjunction / OR)
```
P ∨ Q (P OR Q)
```
| P | Q | P ∨ Q |
|---|---|-------|
| T | T | T |
| T | F | T |
| F | T | T |
| F | F | F |

**설명**: P 또는 Q가 하나라도 참이면 참

---

### 4. 배타적 논리합 (Exclusive OR / XOR)
```
P ⊕ Q (P XOR Q)
```
| P | Q | P ⊕ Q |
|---|---|-------|
| T | T | F |
| T | F | T |
| F | T | T |
| F | F | F |

**설명**: P와 Q가 다를 때만 참 (하나만 참)

---

### 5. 함축 (Implication / Conditional)
```
P → Q (IF P THEN Q)
```
| P | Q | P → Q |
|---|---|-------|
| T | T | T |
| T | F | F |
| F | T | T |
| F | F | T |

**설명**: P가 참이고 Q가 거짓일 때만 거짓

**용어**:
- P: 전제 (antecedent)
- Q: 결론 (consequent)

---

### 6. 쌍방조건 (Biconditional / IFF)
```
P ↔ Q (P IF AND ONLY IF Q)
```
| P | Q | P ↔ Q |
|---|---|-------|
| T | T | T |
| T | F | F |
| F | T | F |
| F | F | T |

**설명**: P와 Q의 진리값이 같을 때 참

---

## 논리법칙 (Logical Laws)

### 교환법칙 (Commutative Laws)
- P ∧ Q ≡ Q ∧ P
- P ∨ Q ≡ Q ∨ P

### 결합법칙 (Associative Laws)
- (P ∧ Q) ∧ R ≡ P ∧ (Q ∧ R)
- (P ∨ Q) ∨ R ≡ P ∨ (Q ∨ R)

### 분배법칙 (Distributive Laws)
- P ∧ (Q ∨ R) ≡ (P ∧ Q) ∨ (P ∧ R)
- P ∨ (Q ∧ R) ≡ (P ∨ Q) ∧ (P ∨ R)

### 드모르간의 법칙 (De Morgan's Laws)
- ¬(P ∧ Q) ≡ ¬P ∨ ¬Q
- ¬(P ∨ Q) ≡ ¬P ∧ ¬Q

### 항등법칙 (Identity Laws)
- P ∧ T ≡ P
- P ∨ F ≡ P

### 지배법칙 (Domination Laws)
- P ∧ F ≡ F
- P ∨ T ≡ T

### 이중부정법칙 (Double Negation)
- ¬(¬P) ≡ P

### 멱등성법칙 (Idempotent Laws)
- P ∧ P ≡ P
- P ∨ P ≡ P

---

## 명제의 유형

### 항진명제 (Tautology)
진리표에서 **모든 경우에 참**인 명제
```
예: P ∨ ¬P (배중률: P이거나 P가 아니다)
```

### 모순명제 (Contradiction)
진리표에서 **모든 경우에 거짓**인 명제
```
예: P ∧ ¬P
```

### 우연명제 (Contingency)
진리표에서 **참과 거짓이 섞여 있는** 명제
```
예: P ∧ Q
```

---

## 함축 (→)의 중요한 성질

### 대우 (Contrapositive)
```
P → Q ≡ ¬Q → ¬P
```
**예**: "비가 내리면 길이 젖는다" ≡ "길이 젖지 않으면 비가 내리지 않는다"

### 역 (Converse)
```
Q → P (원래 명제 P → Q의 역)
```
**주의**: P → Q와 Q → P는 **논리적으로 동치가 아니다**

### 함축의 동치
```
P → Q ≡ ¬P ∨ Q
```

---

## 논리적 동치 (Logical Equivalence)

두 명제가 **모든 경우에 같은 진리값**을 가질 때, 이를 논리적으로 동치라 하고 **≡**으로 표기한다.

**예**:
- P → Q ≡ ¬P ∨ Q
- ¬(P ∧ Q) ≡ ¬P ∨ ¬Q (드모르간)

---

## 정량화 (Quantifiers)

### 전칭 한정자 (Universal Quantifier)
```
∀x P(x)  (모든 x에 대해 P(x)이다)
```

### 존재 한정자 (Existential Quantifier)
```
∃x P(x)  (어떤 x가 존재하여 P(x)이다)
```

**한정자의 부정**:
- ¬(∀x P(x)) ≡ ∃x ¬P(x)
- ¬(∃x P(x)) ≡ ∀x ¬P(x)

---

## 타 개념과의 연결

- [[술어논리 (Predicate Logic)]] — 명제논리를 확장하여 한정자를 포함
- [[진리표 (Truth Table)]] — 명제의 진리값을 체계적으로 계산
- [[논리게이트]] — 논리 연산자의 전자 회로 구현