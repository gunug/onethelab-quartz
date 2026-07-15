---
layout: post
title: Unity humanoid animation 휴머노이드 에니메이션
category: unity3d
tags: 
---


* 마지막 업데이트 : 2025-05-23
# Unity humanoid animation 휴머노이드 에니메이션
# Jammo Character | Mix and Jam
![[unity_humanoid_animation_1.jpg]]

* <https://assetstore.unity.com/packages/3d/characters/jammo-character-mix-and-jam-158456>

---

## rigging setting
![[unity_humanoid_animation_2.jpg]]

* Jammo-character / models / Jammo_LowPoly 선택
* Inspector > Rig > Animation Type : Humanoid 선택
* Avatar Defination : Create From This Model 선택
* Apply 적용
* Configure 선택

---

## rigging test
![[unity_humanoid_animation_3.jpg]]

* Mappings에 모두 초록색인지 확인 (붉은색이 있으면 리깅 실패)
* Muscles & Steeings에서 슬라이더를 이용해서 리깅 테스트
* Done을 눌러서 빠져나오기

---

## scene으로 올리기
![[unity_humanoid_animation_4.jpg]]

* Jammo-character / models / Jammo_LowPoly 선택
* 드래그하여 Scene 창으로 이동

---

## Animator 만들기  
![[unity_humanoid_animation_5.jpg]]
* Projector창 빈공간 마우스 우클릭
* Create > Animator Controller 생성
* 'robot_animator'로 이름변경

---

## Animator 적용하기
![[unity_humanoid_animation_6.jpg]]

* Hirarchy 창 Jammo_LowPoly 선택
* Inspector 창 Controller에 새로만든 Animator 드래그 드랍

---

## Fight pack bundle free
![[unity_humanoid_animation_7.jpg]]

* <https://assetstore.unity.com/packages/3d/animations/fighter-pack-bundle-free-36286>
* Asset store에서 Unity에서 열기 import하여 Project에 들여오기

---

## Animator 창 열기
![[unity_humanoid_animation_8.jpg]]

* Main Menu > Window > Animation > Animator 선택하여 애니메이터 창 열기

---

## Animation 등록하기
![[unity_humanoid_animation_9.jpg]]

* Project창 > Fighter Pack Bundle FREE / Berserkder Fighter Me... / Animations 선택
* 안에 있는 animation들을 각각 드래그하여 animator 창으로 이동

---

## c# script 작성
```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class AnimatorControl : MonoBehaviour
{
    private Animator target_animator;
    private void Start()
    {
        target_animator = GetComponent<Animator>();
    }
    void Update()
    {
        if (Input.GetKeyDown(KeyCode.Q))
        {
            Debug.Log("C");
            target_animator.Play("Punch");
        }
        if (Input.GetKeyDown(KeyCode.W))
        {
            Debug.Log("V");
            target_animator.Play("WalkBackward");
        }
        if (Input.GetKeyDown(KeyCode.E))
        {
            Debug.Log("B");
            target_animator.Play("WalkForward");
        }
    }
}
```

---

## Animator 세팅
![[unity_humanoid_animation_10.jpg]]

* Animator 창에서 애니메이션에서 마우스 우클릭 Make Transition
* idle로 돌아올 수 있도록 선을 연결

2024-05-16
