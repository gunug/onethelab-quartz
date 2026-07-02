
---
layout: post
title: Unity third person 삼인칭 캐릭터
category: unity3d
tags:
---

# Unity third person
<img style='border:solid 1px black;' src="https://image.onethelab.com/resized/1716437845.jpg" />

* <https://assetstore.unity.com/packages/essentials/starter-assets-thirdperson-updates-in-new-charactercontroller-pa-196526>
* AssetStore 접속 불가시 다운로드 : https://drive.google.com/file/d/1-WHXOXQqyaFtUTdXC1UNK6YttX2mySeH/view?usp=sharing
---

## Material Shader 변경
<img style='border:solid 1px black;' src="https://image.onethelab.com/resized/1716438661.jpg" />

* Project창 > StartAssets > ThirdPersonController > Character > Material 폴더안 모든 Material 전체선택
* Inspector창 > Shader > Standard로 변경

---

## 삼인칭 캐릭터 올리기
<img style='border:solid 1px black;' src="https://image.onethelab.com/resized/1716440115.jpg" />

* Project창 > StartAssets > ThirdPersonController > Prefabs > NestedParentArmature_Unpack 드래그 하여 Scene창에 드랍
* MainCamera 삭제
* UI_Canvas_StarterAssetsInputs_Joysticks 삭제
* UI_EventSystem 삭제

---

## 캐릭터 바꾸기

# Jammo Character | Mix and Jam
<img style='border:solid 1px black;' src="https://image.onethelab.com/resized/1716161741.jpg" />

* <https://assetstore.unity.com/packages/3d/characters/jammo-character-mix-and-jam-158456>
* AssetStore 접속불가시 다운로드 : https://drive.google.com/file/d/1L081vNPa4QrGanoY7Ripwu8ZgIf_dAuB/view?usp=sharing
---

## rigging setting
<img style='border:solid 1px black;' src="https://image.onethelab.com/resized/1716161863.jpg" />

* Jammo-character / models / Jammo_LowPoly 선택
* Inspector > Rig > Animation Type : Humanoid 선택
* Avatar Defination : Create From This Model 선택
* Apply 적용

---

## third person controller에 캐릭터 적용
<img style='border:solid 1px black;' src="https://image.onethelab.com/resized/1716442035.jpg" />

* Jammo-character / models / Jammo_LowPoly 드래그하여 NestedParentArmature_Unpack > PlayerAmature에 드랍
* Geomatry 삭제
* Skeleton 삭제

## Avatar 적용
<img style='border:solid 1px black;' src="https://image.onethelab.com/resized/1716442309.jpg" />

* Hierarchy창에서 PlayerAmature 선택
* Inspector창에서 Animator > Avatar 확인
* Jammo-character / models / Jammo_LowPoly 우측 화살표를 클릭하여 패키지 펼치기
* 패키지 내부에 있는 jammo-LowPoly 아바타를 드래그하여 inspector창 > Animator > Avatar에 집어 넣기

---

## 카메라 스위칭하기
* ActiveCamera.cs
  
```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ActiveCamera : MonoBehaviour
{
    public GameObject mainCameraObject; //메인 카메라
    public GameObject characterObject; //캐릭터
    private void Update(){
        if(Input.GetKeyDown(KeyCode.Z)){
            Debug.Log("Z");
            mainCameraObject.SetActive(true);//메인카메라 켜기
            characterObject.SetActive(false);//캐릭터 끄기
        }
        if(Input.GetKeyDown(KeyCode.X)){
            Debug.Log("X");
            mainCameraObject.SetActive(false);//메인카메라 끄기
            characterObject.SetActive(true);//캐릭터 켜기
        }
    }
}
```
