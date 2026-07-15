---
layout: post
title: Meta XR Project Setting
category: vr
tags: 
---

<b style="color:red"> 미완성 문서 입니다. 잘못된 내용이 포함되어 있습니다. </b>
# Meta XR Project Setting
## 참고자료
* 튜토리얼 영상 : <https://www.youtube.com/watch?v=4kGD8q5kEx8>
* Sample document: <https://developer.oculus.com/documentation/unity/unity-import-samples>
* Meta XR Packages : <https://assetstore.unity.com/publishers/25353>
* Meta XR Simulator : <https://assetstore.unity.com/packages/tools/integration/meta-xr-simulator-266732>
* 설치 절차 공식 문서 : <https://developer.oculus.com/documentation/unity/unity-project-setup/>
* * Failed to initialize Insight Passthrough. Please ensure that all prerequisites for running Passthrough over Link are met

## 새 프로젝트 만들기
* VR core 선택
* 템플릿이 다운로드 되어있지 않은 경우에는 Download Template 선택하여 탬플릿 다운로드

![[meta_xr_project_setting_1.jpg]]

### Meta XR All-in-One
* Meta XR All-in-One SDK : <https://assetstore.unity.com/packages/tools/integration/meta-xr-all-in-one-sdk-269657>
  
![[meta_xr_project_setting_2.jpg]]

* 67버전으로 다운 받을 수 있도록 합니다.
* 잘못 받은 경우는  remove 후 다시 install
* Restart Editor

### Meta XR Interaction SDK
* Meta XR Interaction SDK : <https://assetstore.unity.com/packages/tools/integration/meta-xr-interaction-sdk-265014>
* (Deprecated) Meta XR Interaction SDK OVR Samples : <https://assetstore.unity.com/packages/tools/integration/deprecated-meta-xr-interaction-sdk-ovr-samples-268521?srsltid=AfmBOorteD2lcPiuChTo1Q-TOQBeqLGSPTR-ozHQUaf7m1Nr_lkWw0fP>

![[meta_xr_project_setting_3.jpg]]
* 모든 sample을 import

![[meta_xr_project_setting_4.jpg]]
* text mesh pro import
* Example & Extras는 필요 없음 x눌러서 창 닫기

---

## Platform 전환

![[meta_xr_project_setting_5.jpg]]
* Main Menu > File > Build Settings

![[meta_xr_project_setting_6.jpg]]
* Android, switch platform

---

## Error Fix 1
![[meta_xr_project_setting_7.jpg]]
* Main Menu > Window > Package Manager

![[meta_xr_project_setting_8.jpg]]
* XR Plugin Management

## Error Fix 2
![[meta_xr_project_setting_9.jpg]]
* Main Menu > Edit > Project Settings

![[meta_xr_project_setting_10.jpg]]
* Project Setting > Meta XR > Fix All , Apply All

![[meta_xr_project_setting_11.jpg]]
* Project Setting > Meta XR > Fix All , Apply All

---

<b style="color:red"> 이 이하의 내용대로 진행되지 않습니다. 수업 진행상황에 따라 변경됩니다. 이 이하의 내용을 미리 진행하지 않도록 합니다. </b>

# Meta XR Samples
* 참고자료 : <https://developer.oculus.com/documentation/unity/unity-package-manager/#meta-xr-samples>
* Meta XR Simulator Samples(unity) : <https://assetstore.unity.com/packages/tools/integration/meta-xr-simulator-samples-269800>

![[meta_xr_project_setting_12.jpg]]
```
Allow Meta to collect usage data on its SDKs, such as package name, class names and plugin configuration in your projects using Meta SDKs on this machine. This data helps improve the Meta SDKs and is collected in accordance with Meta's Privacy Policy.
Meta가 이 시스템에서 Meta SDK를 사용하여 프로젝트의 패키지 이름, 클래스 이름, 플러그인 구성과 같은 SDK의 사용 데이터를 수집하도록 허용합니다. 이 데이터는 Meta SDK를 개선하는 데 도움이 되며 Meta의 개인정보 보호정책에 따라 수집됩니다.

You can always change your selection at:  Edit > Preferences > Meta XR > Telemetry
언제든지 편집 > 기본 설정 > Meta XR > 원격 측정에서 선택 사항을 변경할 수 있습니다.
```
* 위와같은 팝업창이 여러차례 나옴, 모두 Send usage statistics 선택
* 팝업이 반복해서 뜨는 문제 : <https://communityforums.atmeta.com/t5/Unity-VR-Development/Always-pop-up-Help-to-improve-Meta-SDKs-window/td-p/1236066>
* The problem was solved by downgrading to version 67.0.0. This may be a new issue introduced by v68. 68버전에서 발생한다 67 버전으로 받으면 괜찮다.

![[meta_xr_project_setting_13.jpg]]

* Failed to initialize Insight Passthrough. Please ensure that all prerequisites for running Passthrough over Link are met: https://developer.oculus.com/documentation/unity/unity-passthrough-gs/#prerequisites-1.
*  "Script Backend" to IL2CPP and enable "ARM64" were what I was missing...

![[meta_xr_project_setting_14.jpg]]
* Project Settings > XR Plug-in Management > Project Validation
* Fix All

2024-09-04
