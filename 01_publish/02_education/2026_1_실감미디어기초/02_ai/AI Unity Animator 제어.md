```prompt
Unity 3D Animator 제어하는 스크립트 만들어줘.
```

``` csharp
using UnityEngine;

public class PlayerController : MonoBehaviour
{
    private Animator anim;
    private float moveSpeed = 5f;

    void Start()
    {
        // 오브젝트 내 Animator 컴포넌트 참조
        anim = GetComponent<Animator>();
    }

    void Update()
    {
        // 1. 이동 제어 (Float 파라미터 업데이트)
        float horizontal = Input.GetAxis("Horizontal");
        float vertical = Input.GetAxis("Vertical");
        Vector3 moveDir = new Vector3(horizontal, 0, vertical);

        // 입력값의 크기를 전달하여 Idle <-> Run 전환
        anim.SetFloat("Speed", moveDir.magnitude);

        if (moveDir != Vector3.zero)
        {
            transform.forward = moveDir;
            transform.position += moveDir * moveSpeed * Time.deltaTime;
        }

        // 2. 공격 제어 (Trigger 파라미터 호출)
        if (Input.GetKeyDown(KeyCode.Space))
        {
            anim.SetTrigger("Attack");
        }
    }
}
```

---

![[Pasted image 20260319202743.png]]

```prompt
이 환경에서 작동하도록 해줘.
```

```csharp
using UnityEngine;

public class AnimationSwitcher : MonoBehaviour
{
    private Animator animator;

    void Start()
    {
        animator = GetComponent<Animator>();
    }

    void Update()
    {
        // 1번 키를 누르면 Animation1 실행
        if (Input.GetKeyDown(KeyCode.Alpha1))
        {
            animator.Play("Animation1");
        }
        
        // 2번 키를 누르면 Animation2 실행
        if (Input.GetKeyDown(KeyCode.Alpha2))
        {
            animator.Play("Animation2");
        }
        
        // 3번 키를 누르면 Animation3 실행
        if (Input.GetKeyDown(KeyCode.Alpha3))
        {
            animator.Play("Animation3");
        }
    }
}
```

```prompt
이 스크립트의 사용법 알려줘.
```

```markdown
제공해 드린 `AnimationSwitcher.cs` 스크립트를 유니티 엔진에서 실제로 적용하고 테스트하는 단계별 시나리오입니다.

---

### 1. 스크립트 파일 생성 및 코드 작성

1. **Project** 창의 `Assets` 폴더 내 빈 공간에 우클릭합니다.
    
2. **Create > C# Script**를 선택하고 이름을 **`AnimationSwitcher`**로 정확히 입력합니다. (대소문자 주의)
    
3. 파일을 더블 클릭하여 열고, 이전 답변에서 드린 코드를 모두 복사하여 붙여넣고 저장(Ctrl+S)합니다.
    

---

### 2. 캐릭터 오브젝트에 스크립트 연결

1. **Hierarchy** 창에서 **Animator** 컴포넌트가 붙어 있는 캐릭터(또는 오브젝트)를 선택합니다.
    
2. 방금 만든 `AnimationSwitcher` 스크립트 파일을 드래그하여 해당 오브젝트의 **Inspector** 창으로 끌어다 놓습니다. (Add Component 버튼을 눌러 검색해서 추가해도 됩니다.)
    

---

### 3. 애니메이터 상태 이름 확인 (중요)

1. **Animator** 창을 엽니다. (이미지에 보여주신 화면)
    
2. 각 노드의 이름(`Animation1`, `Animation2`, `Animation3`)이 스크립트 코드 내 `animator.Play("이름")`의 큰따옴표 안의 글자와 **토씨 하나 틀리지 않고 일치**하는지 확인하세요.
    
3. 이미지처럼 `Animation3`가 주황색(Default)이라면, 게임 시작 시 자동으로 3번 애니메이션부터 재생됩니다.
    

---

### 4. 실행 및 테스트

1. 상단 중앙의 **Play (▶️)** 버튼을 눌러 게임을 실행합니다.
    
2. 키보드의 숫자키 **1, 2, 3**을 각각 눌러봅니다.
    
3. 눌렀을 때 캐릭터의 동작이 즉시 해당 애니메이션으로 전환되는지 확인합니다.
    

---

### 💡 팁: 전환이 너무 뚝뚝 끊긴다면?

만약 애니메이션이 부드럽게 이어지지 않고 순간이동하듯 바뀐다면, 코드를 아래와 같이 살짝 수정해 보세요.

> `animator.Play("이름");` 대신 **`animator.CrossFade("이름", 0.2f);`**를 사용하면 0.2초 동안 부드럽게 섞이면서 전환됩니다.

특정 애니메이션이 끝난 뒤에 자동으로 다시 `Animation3`(기본 상태)로 돌아가게 만들고 싶으신가요?
```

