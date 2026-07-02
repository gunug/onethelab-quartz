## 버튼 준비
![[Pasted image 20260318175519.png]]

- 버튼으로 사용된 이미지를 준비하여 Project에 import
- Project에 있는 이미지를 드래그드롭하여 scene에 올림

## script 폴더 만들기

![[Pasted image 20260318175537.png]]

- project창 마우스 우클릭
- Create > Folder
- 폴더의 이름은 ‘Script’로 작성합니다.

---

## ## 파일명, 폴더명, C# Script명 금지사항

![[Pasted image 20260318175601.png]]
- 한글을 사용하지 않습니다.
- 숫자로 시작하지 않습니다. (중간이나 끝에 숫자가 들어가는건 가능)
- 특수문자(/,.”’:;*)를 사용하지 않습니다.
- 띄어쓰기대신 언더바(_)를 사용합니다.

---

## C# Script 만들기

![[Pasted image 20260318175623.png]]

- Project창 빈공간에 마우스 우클릭
- Create > C# Script 선택하여 새 스크립트 생성
- 스크립트 이름은 ‘test_button’으로 입력
- 만들어진 스크립트를 더블클릭하여 visual stuido 실행
- 위 과정에서 ‘실행 프로그램 선택’등이 뜨는 학생은 다음의 과정을 진행합니다.
* [[Unity visual studio code 비쥬얼 스튜디오 코드 연결]]

---

![[Pasted image 20260318180018.png]]

- visual studio화면 또는 visual studio code 화면이 뜨면 내용입력

---

# C# Script 입력

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class test_button : MonoBehaviour
{
    private void OnMouseDown()
    {
        Debug.Log("버튼이 눌렸습니다");
    }
}

```

```csharp
void OnMouseDown()
{
    Debug.Log("마우스 좌클릭");
}
void OnMouseUp()
{
    Debug.Log("마우스 좌클릭 해제");
}
void OnMouseEnter()
{
    Debug.Log("마우스 올림");
}
void OnMouseExit()
{
    Debug.Log("마우스 내림");
}
```

---

## C# Script 버튼에 등록

![[Pasted image 20260318180139.png]]
- 스크립트를 hierarchy 창에있는 객체(Object)에 드래그 드랍
- inspector창에서 스크립트를 볼수 있다면 등록 성공

---
## 충돌체 등록
![[Pasted image 20260318180210.png]]

- inspetor창 하단 AddComponent
- Physics 2D > Box Colider 2D

---

![[Pasted image 20260318180234.png]]
- inspector창에서 Box Colider 2D가 보이면 등록 완료

---

## 버튼 테스트
![[Pasted image 20260318180256.png]]

- Main Menu > Window > General > Console 선택하여 콘솔창 열기

![[Pasted image 20260318180308.png]]
- 콘솔창은 inspector옆에 두면 사용하기가 좋습니다.

---

## 게임 시작 및 버튼 테스트

![[Pasted image 20260318180328.png]]

- 게임 시작버튼을 눌러 게임을 시작
- Game창의 버튼을 마우스 좌클릭 (Scene창에서 클릭하지 않도록 합니다)
- Console창에 ‘버튼이 눌렸습니다’ 글씨가 출력되는지 확인

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class test_button : MonoBehaviour
{
    public Animator animator_; //변수의 선언

    //접근제한자(Access Modifier) 변수타입(variable type) 변수이름(variable name)
    //공공의 애니메이터 animator_;
    
    private void OnMouseDown()
    {
        Debug.Log("버튼이 눌렸습니다");
        animator_.Play("Animation1", -1, 0f); //함수의 호출
        // animator_의 "Animation1"을 재생(Play) 하세요.
        // -1 레이어를 재생합니다
        // 0지점(시작지점)부터 재생합니다. 1지점은 끝지점 입니다.
    }
}
```

![[Pasted image 20260318180355.png]]
- Hierarchy창에서 Animator를 Animator_에 드래그 드랍

---

## 애니메이션 재생이 안될 때 확인 사항
![[Pasted image 20260318180413.png]]
- Animator의 Animation이름과 C# Script에 명시된 이름이 같아야합니다. (대소문자, 띄어쓰기 모두 포함)

---

# 누가, 언제, 무엇을, 어떻게

- 육하원칙 : 누가, 언제, 어디서, 무엇을, 어떻게, 왜

## 누가 Reference

- Animation이, Animator가, 캐릭터가

## 언제 Event

- 마우스를 눌렀을때, 마우스를 땠을때, 마우스를 올렸때

## 무엇을 어떻게 Function

- 움직인다, 투명해진다, 재생된다, 멈춘다