---
layout: post
title: Unity 반투명 이미지 객체 만들기
category: unity3d
tags: 
---


# Unity 반투명 이미지 객체 만들기
* Hierarchy창 빈공간 마우스 우클릭
* 3D Object > Plane

![[Unity_transparent_png_1.jpg]]

---



## Material 만들기
* Project창 빈공간 마우스 우클릭
* Create > Material
* 만들어진 Material을 선택하여 inspector창에 정보 띄우기

![[Unity_transparent_png_2.jpg]]

* 투명이 있는 png 이미지를 Material의 albedo 좌측 네모칸에 드래그 드랍
* Rendering Mode를 cutout으로 변경

![[Unity_transparent_png_3.jpg]]

* 만들어진 Material을 Panel에 드래그드랍하여 적용

![[Unity_transparent_png_4.jpg]]

* shader > standard는 빛을 받아 밝아지고 어두워짐

![[Unity_transparent_png_5.jpg]]

* shader > unlit > transparent cutout 으로 변경하면 빛을 무시함

![[Unity_transparent_png_6.jpg]]

2024-04-28
