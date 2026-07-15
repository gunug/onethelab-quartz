---
layout: post
title: character animation 캐릭터 애니메이션
category: subpage
tags: 
---


# character animation 캐릭터 애니메이션

## mixamo
* 참고링크 : <https://docs.readyplayer.me/ready-player-me/integration-guides/unity/animations/loading-mixamo-animations>
* 여러가지 사람 캐릭터와 애니메이션을 무료로 구할수 있는 웹사이트
* 로그인 필요 : 구글 로그인으로 추가 회원가입 절차 없이 로그인 가능
* <https://www.mixamo.com/>

## 대기 자세 만들기

![[animation_1.jpg]]

* ```idle```로 검색
* 대기 자세중에 한가지를 클릭하고 우상단의 Download 버튼 클릭
  
![[animation_2.jpg]]
* Format : FBX for Unity(.fbx)
* 옵션 변경 후 Download 클릭하여 파일 다운로드

---

## 애니메이션 폴더 만들기

![[animation_3.jpg]]

* Project창에서 assets 마우스 우클릭 Create > Folder를 선택하여 새 폴더 생성
* 이름은 ```Animation``` 으로 지정

![[animation_4.jpg]]

* 새로 만든 Animation 폴더를 선택한 후 다운로드 받은 애니메이션 파일을 드래그 드랍

![[animation_5.jpg]]

* project창에서 다운로드 받은 애니메이션을 선택
* Inspector창 Rig탭 Animation Type을 Humanoid로 변경 후 Apply 선택


![[animation_6.jpg]]

* Project창 빈공간 마우스 우클릭 Create > Animation Controller

![[animation_7.jpg]]

* Hierarchy창에서 아바타를 선택
* Inspector창 Animator > Controller 부분에 새로만든 New Animator Controller을 드래그 드랍

---

## 애니메이터 편집

![[animation_8.jpg]]

* MainMenu > Animation > Animator 선택하여 Animator 창 열기

![[animation_9.jpg]]

* Project창에서 다운로드 받은 idle animation을 드래그 하여 Animator창에 드롭
* 게임을 실행하면 NPC가 대기자세를 취합니다.

---

2024-08-05
