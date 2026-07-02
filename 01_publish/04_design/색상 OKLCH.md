<iframe width="560" height="315" src="https://www.youtube.com/embed/GHe5EGvXFgM?si=WPM2eZThAfeBdRtP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### 🎨 색상 표현 방식의 문제와 해결책 (OKLCH)

#### 1. 기존 색상 모델의 한계
- **RGB (Red, Green, Blue) [00:33]**: 컴퓨터가 이해하기는 좋으나, 사람이 숫자를 보고 어떤 색인지 직관적으로 파악하기 매우 어렵습니다.
- **HSL / HSB (Hue, Saturation, Lightness/Brightness) [01:04]**: 색조, 채도, 밝기를 나누어 직관성을 높였으나 **수학적 계산 방식의 한계**가 있습니다.
    - **문제점**: 이론상 밝기(Lightness) 수치가 같아도 실제 사람이 눈으로 볼 때는 색상(Hue)에 따라 밝기가 다르게 느껴집니다. [02:21]
    - **부작용**: 그라데이션을 만들 때 중간 부분이 어둡게 죽어버리거나, 일관성 있는 색상 조합을 뽑기 위해 엄청난 '색감 피지컬'이 필요합니다. [03:06]
#### 2. 인간의 인지 중심 모델: CIELAB & LCH
- **CIELAB (Lab) [03:23]**: 사람이 느끼기에 색 차이가 일정하도록 설계된 색 공간입니다.
- **LCH (Lightness, Chroma, Hue) [04:06]**: Lab 모델을 기반으로 하되, 사람이 이해하기 쉬운 **밝기(L), 채도(C), 색조(H)** 단위로 개선한 방식입니다.
    - **장점**: 밝기 값을 고정하고 색상만 바꾸면, 인간의 눈에도 실제로 동일한 밝기로 느껴지는 색상들이 추출됩니다. [04:39]
#### 3. 차세대 표준: OKLCH (OKLab)
- **등장 배경 [05:10]**: 기존 Lab 모델의 미세한 오차를 개발자가 개선하여 만든 모델로, 현재 CSS 등 다양한 그래픽 도구에 공식 채택되었습니다.
- **주요 특징 및 활용 [05:25]**:
    - **일관된 색상 변화**: 밝기를 10%씩 균일하게 조절하거나, 동일한 명도의 보조색을 뽑을 때 매우 정확합니다. [05:48]
    - **자연스러운 그라데이션**: 중간 지점이 탁해지지 않고 훨씬 부드럽고 이쁜 그라데이션을 생성합니다. [06:13]
    - **웹 개발 적용**: 최신 브라우저에서는 `oklch()` 문법을 지원하여 프로그래밍적으로 정교한 색상 제어가 가능합니다. [06:04]
#### 4. 결론 및 실무 팁
- 디자인 시스템을 구축하거나 색상 조합을 자동으로 생성해야 할 때 **OKLCH**를 사용하면 초보자도 전문가 수준의 일관된 색감을 유지할 수 있습니다. [05:56]
- 포토샵 등 최신 툴에서도 그라데이션 설정 시 'OKLab' 영역을 선택하여 더 나은 결과물을 얻을 수 있습니다. [06:20]