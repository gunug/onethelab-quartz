---
layout: post
title: cross browsing 크로스 브라우징
category: web
tags: kaywon
---


# 크로스 브라우징
## 브라우저
* 글자(string)형태로 작성된 HTML, CSS, Javascript등을 눈으로 볼수 있는 양식문서(document) 형태로 변환해주는 프로그램
* internet explorer, edge, chrome, fire fox, safari, opera, whale, samsung internet 등

## 웹 브라우저 이용 현황
* [http://gs.statcounter.com/](http://gs.statcounter.com/)

## 2023
![[web_cross_browsing_1.png]]
* Chrome 브라우저의 점유율이 약 64%
  
![[web_cross_browsing_2.png]]
* Chrome for Android, Safari iPhone (스마트폰 웹브라우저)의 점유율이 약 51%

![[web_cross_browsing_3.png]]
* 한국도 크롬브라우저가 약 50%, 특수하게 네이버에서 만든 웨일브라우저 사용하는 사람이 있음

* 종합해 보면 스마트폰으로 인터넷을 하는 시대, 크롬브라우저를 이용하는 시대
  
---

## 2013
![[web_cross_browsing_4.png]]
* 2013 한국에서는 크롬보다 인터넷익스플로러 브라우저 점유율이 높았음
* 은행, 관공서 웹사이트를 이용하려면 Active-x가 필요했기 때문

---

# 웹 표준과 크로스 브라우징
* 어떤 운영체제나 브라우저를 이용하더라도 같은 결과물을 볼 수 있도록 하기 위해 (웹접근성의 '환경적 조건'에 해당)
* 이전까지의 크로스 브라우징은 온전히 퍼블리셔만의 역량(웹 브라우저 개발사들이 모두 재각각의 브라우저를 개발했기 때문) 이였다면, 앞으로는 브라우저도 웹 표준을 지켜 발전되면서 차차 웹 표준에 맞는 방향으로 변화해 갈 예정. 다양한 환경에 맞춰 여러버전으로 만들 필요가 없기 때문에 개발 시간이 짧고 유지보수가 편하며 디버깅이나 장애 추적이 수월함

---

# HTML5 지원여부
* HTML5, CSS3를 지원하는 브라우저 확인 : [https://html5test.com/](https://html5test.com/)
* 555점을 만점으로 지원되는 기능에 따라 점수 표시
  
## 2023
![[web_cross_browsing_5.png]]

## 2016
![[web_cross_browsing_6.png]]

---

# 기능의 지원 여부
* [http://caniuse.com/](http://caniuse.com/) - 내 브라우저는 ???를 지원 할까?

* canvas 같은 범용적인 기술은 대부분의 브라우저에서 개발됨

![[web_cross_browsing_7.png]]

* WebGL2.0같은 신기술은 몇몇 브라우저에서 구현되지 않을 수 있음

![[web_cross_browsing_8.png]]

---

# 크로스 브라우징이란
* 한계점 파악
  * 브라우저 현황을 파악하고 (실질적으로 프로젝트가 집중해야 할 브라우저가 무엇인지) 브라우저별 가능, 불가능한 HTML 기능들을 확인하여 미리 선별함
* 대처방법 모색
  * 주요 브라우저 이외의 웹 브라우저가 가지고 있는 문제점을 파악하고 우회할 방법 (어떻게든 정보를 서비스 할 수 있는방법)을 마련함
결국 가능성 파악 후 최대한의 브라우저별 접근성을 향상 시키는것.

2023-10-05
