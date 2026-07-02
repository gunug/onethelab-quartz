https://assetstore.unity.com/packages/audio/sound-fx/free-casual-soundfx-pack-164843

![[Pasted image 20260319205900.png]]

![[Pasted image 20260319205942.png]]

Download 후 Import

![[Pasted image 20260319210056.png]]

Project창 Assets > Show in Explorer (Reveal in Finder)

![[Pasted image 20260319210708.png]]

* 윈도우 탐색기에서 cmd 입력하여 터미널 실행
* 맥의 경우는 폴더안 빈공간 우클릭 > "폴더에서 새 터미널 열기"
* 안되는 경우는 terminal 직접 실행후. 폴더를 드래그 드롭

![[Pasted image 20260319210835.png]]

Finder > Services > New Terminal at Folder

![[Pasted image 20260319210909.png]]

폴더에서 우클릭 New Terminal at folder

---

터미널에서 gemini 입력하여 실행

![[Pasted image 20260319211403.png]]

@sounds 까지 입력하여 대상 폴더를 상하키로 선택한 상태로 엔터

```prompt
@"Assets/Casual SoundFX Pack/Sounds/" 안에 있는 사운드가 엔터키를 누를때마다 랜덤으로 재생되도록 script 만들어줘.
```

![[Pasted image 20260319211546.png]]

Alllow for this session

```
 Assets/Scripts/SoundPlayer.cs 경로에 요청하신 스크립트를 생성했습니다.

  스크립트 사용 방법은 다음과 같습니다.

   1. Unity 에디터에서 빈 게임 오브젝트(Empty GameObject)를 생성합니다.
   2. 생성한 게임 오브젝트에 Assets/Scripts/SoundPlayer.cs 스크립트를 추가(Add Component)합니다.
   3. Project 창에서 Assets/Casual SoundFX Pack/Sounds/ 폴더로 이동합니다.
   4. 사용하고 싶은 사운드 파일들을 모두 선택한 후, SoundPlayer 컴포넌트의 Audio Clips 배열에 드래그 앤 드롭합니다.
   5. 게임을 실행하고 엔터 키를 누르면, 등록된 사운드 중 하나가 랜덤으로 재생됩니다.
```

![[Pasted image 20260319211711.png]]

![[Pasted image 20260319212624.png]]

![[Pasted image 20260319212738.png]]

* Script가 들어있는  Game Object를 선택하고 Inpector 우상단에 lock(잠금) 활성화
* sound 파일을 복수선택 (드래그) 한다음 드래그 하여 audio clip 부분에 drop
![[Pasted image 20260319212918.png]]

* 모두 완료한 뒤에서는 audio clip을 열어 파일들을 확인할수 있습니다.
* 완료 후에는 반드시 lock를 해제 합니다.

---

![[Pasted image 20260319213111.png]]

* 게임 시작 ▶ 버튼 클릭하여 게임시작
* Game 창에 마우스로 한번 클릭 (포커스 이동)
* 키보드 엔터키 누르기

---
