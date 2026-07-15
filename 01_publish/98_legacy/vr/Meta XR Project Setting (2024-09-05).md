---
layout: post
title: Meta XR Project Setting
category: vr
tags: 
---


# Meta XR Project Setting
* 문서 마지막 업데이트 2025-09-01

![[meta_xr_start_1.jpg]]
* built-in render pipeline
* 프로젝트 명은 ```project_meta_xr```

---

## Platform 전환

![[meta_xr_start_2.jpg]]
* Main Menu > File > Build Settings

![[meta_xr_start_3.jpg]]
* Android, switch platform

---

# 설치
* 설치 절차 공식 문서 : <https://developer.oculus.com/documentation/unity/unity-project-setup/>

### XR Plugin management
![[meta_xr_start_4.jpg]]

![[meta_xr_start_5.jpg]]
*PC, 안드로이드 모두 oculus 체크

### Meta XR All-in-One
* Meta XR All-in-One SDK : <https://assetstore.unity.com/packages/tools/integration/meta-xr-all-in-one-sdk-269657>

{% comment %}
### Meta XR Interaction SDK
* Meta XR Interaction SDK : <https://assetstore.unity.com/packages/tools/integration/meta-xr-interaction-sdk-265014>
{% endcomment %}

![[meta_xr_start_6.jpg]]
* install을 눌러서 설치
* 설치 중 restart project로 프로젝트가 재시작 될 수 있음.



![[meta_xr_start_7.jpg]]
* Untiy메뉴 > Window > Package Manager 선택하여 Package manager 창열기
* Packages: in Project 선택하여 현재 프로젝트에 들어있는 Packgage 표시
* Meta XR Interaction SDK 선택, Samples에 포함된 모든 sample을 import

![[meta_xr_start_8.jpg]]
* text mesh pro import
* Example & Extras는 필요 없음 x눌러서 창 닫기

![[meta_xr_start_9.jpg]]
* Edit > Project Setting > Meta XR > Fix All , Apply All

![[meta_xr_start_10.jpg]]
* Edit > Project Setting > Meta XR > Fix All , Apply All

2024-09-05
