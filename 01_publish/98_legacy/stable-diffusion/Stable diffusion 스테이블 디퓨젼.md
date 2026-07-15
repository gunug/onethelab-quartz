---
layout: post
title: Stable diffusion 스테이블 디퓨젼
category: stable-diffusion
tags: ai
---


---

# 프롬프트 사이트
* https://www.ptsearch.info/articles/list_best/
* https://civitai.com/
* https://prompts.co.kr/

---

# 최적의 해상도
* 1024 * 1024 = 1,048,576
* 1048576 / 768 * 1344
* 1024 x 1024(1:1 정사각형)
* 1152x896(9:7)
* 896x1152(7:9)
* 1216x832 (19:13)
* 832 x 1216 (13:19)
* 1344 x 768(7:4 가로)
* 768 x 1344(4:7 세로)
* 1536 x 640(12:5 가로)
* 640 x 1536 (세로 5:12, iPhone 해상도에 가장 가깝습니다)

---

# prompt 프롬프트
## 얼굴만
* 512*768

* positive

```markdown
1girl, realistic, masterpiece, best quality, detailed face, detailed eyes, focus on face, light smile, happy,  realistic skin,  beauty face,  pretty, korean. portrait,  upper body,  cinematic light, 
__77_face_lora__, __77_face_lora__,  __77_face_lora__, highres, (simple background:1.2), 
```

* negative

```markdown
Easynegative,  nsfw, Drawings, abstract art, cartoons, surrealist painting, conceptual drawing, graphics, low resolution, (blurry:1.3), (strabismus:1.1), (western:1.2), (full body:1.2),
(worst quality:1.3), (low quality:1.3),  collage, (makeup:0.8), nsfw, bad proportions, floral print, loli, big eyes, (watermark:1.2), letter, (abs:1.2), (hand:1.7)
```

---

# 블러관련 프롬프트
* bokeh, f1.8 / f8 / f16
* --no, —no 로 네가티브 프롬프트 역할을 할 수 있나봄


---

★다음은 설치하는 절차 입니다.

---

# Start
- 설치 및 설정 정보 출처 https://arca.live/b/aiart/68917133 - 거의 백과사전급
- WebUI 로컬 설치 정보 출처 https://dreaminfo.tistory.com/1201

---

# 성능 확인
- 윈도우11 :  Ctrl + Shift + ESC
- 성능 탭에서 각종 정보 확인

---

## 그래픽카드
- 라데온 인텔은 어렵다, 엔비디아라면 가능
- 전용 GPU 메모리 - 통칭 VRAM이 적으면 CUDA 램부족 오류로 사진을 생성할수 없음
- VRAM이 작을 수록 본인이 생성할 수 잇는 일러스트 크기가 작아짐. 최소 6GB이상
- 다음 그래픽 카드는 코렙보다 느림, 차라리 코렙을 이용(512*768이미지 생성시 20초~2분)
```
GTX 1050, GTX 1050ti, GTX 1060, GTX 1070, GTX 1080, GTX 1650, GTX 1650s, GTX 1650TI, GTX 1660, GTX 1660s, GTX 1660TI, RTX 2060, RTX 2060s
```
---

## VRAM
- 8GB~ : 최소사양. 모델에 따라 로딩이 오래걸리거나 튕길수 있음
- 16GB~ : 권장사양. 대부분의 활동가능
- 32GB~ : 학습을 잘 다루게 되면 필요해 질수도

---

# 파이썬 설치
- [파이썬 3.10.8](https://www.python.org/ftp/python/3.10.8/python-3.10.8-amd64.exe)
- Add python.exe to PATH 체크
- Install Now로 설치 시작

# Git 설치
- [Git 2.38.0 16bit](https://github.com/git-for-windows/git/releases/download/v2.38.0.windows.1/Git-2.38.0-64-bit.exe)
- Next로 설치 시작

---

# Stable diffusion
## Stable diffusion 설치
- 설치할 새로운 위치에 폴더 생성하고 경로 복사(Ctrl+C)
- 윈도우 | 시작 > cmd 입력하여 터미널 실행
- ```cd 복사된경로붙이기(Ctrl+V)```입력하여 해당 경로로 이동
- ```git clone https://github.com/AUTOMATIC1111/stable-diffusion-webui.git``` 입력하여 설치 시작

---

## Stable diffusion, WebUI 실행
- 시작 > cmd
- webui-user.bat파일이 있는 곳으로 이동
- webui-user.bat실행

- webui-user.bat파일의 바로가기 파일을 만들어서 실행해도 됨
- 접속주소 :  http://localhost:7860 또는 http://127.0.0.1:7860

## xformers
- 이미지 생성속도 증가
- webui-user.bat에 --xformers추가

---
<!-- ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ -->

# Model
- 모델 정보 출처1 https://arca.live/b/aiart/68304467 
- 모델 정보 출처2 https://dreaminfo.tistory.com/1201
- Anything 4.5 - 애니체
- MeinaMix - 2.5D
- BloodTreeCounter - 얼굴2d, 몸3d
- OrangeMix2
- camelliablossommix_finaledition
---

## Model 다운로드
- 오렌지믹스(애니+반실사): https://huggingface.co/WarriorMama777/OrangeMixs/tree/main/Models/AbyssOrangeMix2 
- 바질믹스(실사): https://huggingface.co/nuigurumi/basil_mix/tree/main
- 칠 아웃믹스(실사,한국): https://civitai.com/?query=chilloutmix
- 시비타이(모델보관소1): https://civitai.com/
- 허깅페이스(모델보관소2): https://huggingface.co/

---

## Model 설치
- ```\stable-diffusion-webui\model\Stable-diffusion```에 다운로드된 모델파일을 붙여넣기 하여 설치끝

# VAE
- kl-f8-anim2 VAE : https://huggingface.co/hakurei/waifu-diffusion-v1-4/tree/main/vae

- ```\stable-diffusion-webui\model\VAE``` 설치
- 설치후 WebUI 재시작 ```settings > reload UI
- WebUI | Settings > Stable Diffusion > SD VAE에서 선택 
- 상단의 Apply settings 선택

---

# TEXTUAL INVERSION
- ```\stable-diffusion-webui\embeddings``` 설치
- trigger word를 입력하여 실행한다.

## easynagative
- https://civitai.com/models/7808/easynegative

---
<!-- ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ -->
# WebUI
## 파일저장 이름 패턴 바꾸기
- settings tab > Saving images/grids > Images filename pattern
- ```[seed]-[steps]-[cfg]-[sampler]``` 패턴예시
- ```00000-789761513-11-11-DPM++ 2M Karras.png``` 저장예시
- 설정 > 저장경로에서 저장되는 위치 변경가능

---

# Hires 전 해상도 이미지 저장
- setting | image/grid > save a copy of image before appying highres fix.


## img2img를 이용한 업스케일링
- ```\stable-diffusion-webui\outputs``` 있는 폴더 활용
- ```\stable-diffusion-webui\inputs``` 폴더 새로만듬

## Outpainting - 외부에 배경을 추가로 그림
- img2img 하단의 script에서 outpainting mk2. 선택


---

## 제한 해제, 기본값 지정
- ui-cofig.json
- sampling steps : ```img2img/Sampling Steps/maximum": 150```

## plot XYZ
- 사용법 : https://arca.live/b/aiart/61028883
- 사용법 : https://www.youtube.com/watch?v=y7rDdamvuAM
- prompt S/R : 와일드카드는 안바꿔줌. 프롬프트내에 해당 단어를 , 쉼표 다음단어로 하나씩 교체해줌.

---
<!-- ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ -->
## extension
- extansion리스트 : https://arca.live/b/aiart/71470421

## cutoff
- 깃주소: https://github.com/hnmr293/sd-webui-cutoff
- 사용법: https://arca.live/b/aiart/71809651

---

# 리얼타임 블록머지
* 실시간으로 모델을 블럭머지하여 이미지 생성에 반영함 (모델병합 프로토용)
* 깃주소 : https://github.com/ashen-sensored/sd-webui-runtime-block-merge
* Merge Block Weighted

# 블록머지
* 깃주소 : https://github.com/bbc-mc/sdweb-merge-block-weighted-gui
* 토큰을 골라서 병합치를 조절할 수 있는듯 하다.

---

## Dynamic Thresholding
* 깃주소 : https://github.com/mcmonkeyprojects/sd-dynamic-thresholding.git
* 사용법: https://github.com/mcmonkeyprojects/sd-dynamic-thresholding/wiki
* 유효한 입력의 예: 
```
Steps: 3, Mimic scale: 8, Threshold percentile: 90, Mimic mode: Power Up, Mimic scale minimum: 2, CFG mode: Power Up, CFG scale minimum: 2.5, Power Scheduler Value: 10
```

---

### tagcomplete
- https://github.com/DominikDoom/a1111-sd-webui-tagcomplete


### clip - Interrogator
- git주소 : https://github.com/pharmapsychotic/clip-interrogator-ext

---

### controllnet
- https://arca.live/b/aiart/69816884 설치 및 설정
- WebUI | Extensions > install from URL
- 깃주소 ```https://github.com/Mikubill/sd-webui-controlnet```입력
- 아래의 주소에서 'openpose' 모델 다운로드 (hugging face가 원본, civitai는 병합모델)
- hugging face : https://huggingface.co/lllyasviel/ControlNet/tree/main/models
- civitai : https://civitai.com/models/9251/controlnet-pre-trained-models
- ```\stable-diffusion-webui\extensions\sd-webui-controlnet\models```에 파일옮기기
- txt2img 하단의 controlNet, enable에 체크
- 컨트롤넷 부연설명: https://arca.live/b/aiart/69724880

---

### controllnet - MLSD
- 건물이나 인테리어 그리는데 특화

---


### ddetailer - 설치과정중에 오류가 많아 안쓰는게 낫겠다. wildcard와 충돌나서 exif가 저장되지 않음
- 정보 출처 : https://arca.live/b/aiart/70355715
- 깃주소 : https://github.com/dustysys/ddetailer
- 익스텐션 설치후 시작에러가 남
- 추가 설치 방법 : https://github.com/dustysys/ddetailer/issues/1#issuecomment-1309415543
- https://visualstudio.microsoft.com/ko/downloads/ 에서 'Visual Studio 2022용 빌드 도구 '다운로드
- 설치 프로그램을 실행하고 설치하기 전에 'Desktop development with C++'를 선택
- C++를 사용한 테스크톱 개발

---

- 패키지가 자동으로 선택됩니다. 설치를 마침
- 이후 신버전은 자동으로 업데이트 된다고 함, (★아래 절차를 수행할 필요 없음)
- powershell(또는 명령 프롬프트) 열기
- sd-webui 폴더로 이동하고 다음 명령을 실행합니다.
```
venv\Scripts\activate
pip install Cython
pip install "git+https://github.com/philferriere/cocoapi.git#egg=pycocotools&subdirectory=PythonAPI"
```
---

### ddetailer - 사용법

- 이 스크립트를 사용하면 와일드 카드가 적용이 안됨.
- 설정법: https://arca.live/b/aiart/70368079
- 심화편: https://arca.live/b/aiart/70372490
- bbox - 얼굴만 감지
- segm - 몸전체 감지

---

### civitai helper
* git:https://github.com/butaixianran/Stable-Diffusion-Webui-Civitai-Helper
* menu | Civitai hepler > scan
* 로딩 완료되면 화투패
* 🖼: 원래 있던 미리보기 이미지 교체
* 🌐: Civitai에 모델이 있다면 거기로 링크
* 💡:자기 프롬프트에 이 모델의 트리거 단어 추가
* 🏷: 현재 이 모델 미리보기 이미지에 사용했던 프롬프트를 불러옴

---

### DAAM
* 프롬프로 적용 위치를 알려주는 기능
* 설치불가, 처음개발한 사람이 업데이를 멈췄다고함
* 깃주소: https://github.com/toriato/stable-diffusion-webui-daam
---

### controllnet - pose editor extension
- WebUI | Extensions > install from URL
- 깃주소 : ```https://github.com/fkunn1326/openpose-editor``` 입력
- 상단텝에 OpenPose Editor 생김

---

### Whild Card Extension
- WebUI | extensions > install from url
- URL for extension's git repository에 ```https://github.com/adieyal/sd-dynamic-prompts.git``` 입력
- install 누름
- ```stable-diffusion-webui\extensions\sd-dynamic-prompts```
- whildcards 폴더가 없다면 새로 생성
- 내부에 텍스트파일 생성, 단어나열
- 프롬프트에 ```__TXT파일명__```으로 입력
- ChatGPT에 ```show me words about 원하는카테고리 without explain``` 질문해서 단어를 뽑아낼 수 있음.
---
- ```show me random situation sentence, without explain```
- ```show me words about 'actual eye color' without explain```
- ```show me words about 'job and clothes' (for example 'boss, office suite') without explain```
- ```show me words about 'job and clothes and object and place' (for example 'boss, office suite, Fountain pen, boss room') without explain```
- ```Remind me by adding objects to all the jobs you've told me so far. (for example 'boss, office suite', 'fountain pen')```
- ```show me random 'background visual description sentence', without explain```
---

### remove backgound
- 깃주소: https://github.com/AUTOMATIC1111/stable-diffusion-webui-rembg

<!-- ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ -->

# ngrok
- 포트포워딩 설정을 하지 않아도 주소를 통해 PC접속
## ngrok 설치
- ngrok: https://ngrok.com/
- 다운로드하면 설치과정 없이 ngrok.exe파일이 있다.

---

## rgrok 보안
- 구동시 입력하면 특정 도메인 아이디만 접속 가능함.
```
ngrok http 8080 --oauth=google \
    --oauth-allow-domain=acme.com,doe.com
```
- 구동시 입력하면 특정 구글 아이디만 접속 가능함.
```
ngrok http 7860 --oauth=google \
    --oauth-allow-email=john@acme.com,jane@doe.com
```
---

# painthua - outpainting
- 정보 출처: https://www.youtube.com/watch?v=l6_ZCcHzq2E
- 정보 출처: https://www.youtube.com/watch?v=RyFTYa1jzvM
- https://www.painthua.com/
- webui-user.bat 텍스트 에디터에서 열기
- ```set COMMANDLINE_ARGS=```에 ```--api``추가
- ```--port 7860 --cors-allow-origins=https://www.painthua.com``` 추가

---

- webui.py에 ```app.user_middleware = [x for x in app.user_middleware if x.cls.__name__ != 'CORSMiddleware']``` 주석처리
- [sd-v1.5-inpainting](https://huggingface.co/runwayml/stable-diffusion-inpainting/tree/main) 다운로드
- ```\stable-diffusion-webui\models\Stable-diffusion```에 집어넣기
- inpainting 모델만이 제대로 연결그림을 그려주는듯하고 다른 모델들은 반복그림만 만들어냄

---

# painthua - setting
- setting | stable diffusion > apply color correct to img2img result match original colors.
- setting | user interface > Quicksetting list , inpainting_mask_weight

---

# 시작시

## Web UI 구동
- 시작 > cmd
- webui-user.bat파일이 있는 곳으로 이동
- webui-user.bat실행

- 해당파일의 바로가기 파일을 만들어서 실행해도 됨
- 접속주소 :  http://127.0.0.1:7860

---

## ngrok 구동
ngrok
- ngrok.exe http 7860로 외부주소에서 접속 가능하게함
- 8시간의 세션만료시간이 있으니 홈페이지 가입후 키입력을 하면 제한 풀림

- 배치(bat)파일만들어
```start f:\ngrok\ngrok.exe http 7860``` 작성하면 쉽게 시동
```start f:\ngrok\ngrok.exe http 7860 --oauth=google --oauth-allow-email=gunajona85@gmail.com,메일주소``` 접속제한 포함

- 시동된 터미널 창에서 접속주소 확인

---

# 번외
## AI연구
- https://www.reddit.com/r/StableDiffusion/comments/y0t4pd/a_bizarre_experiment_with_negative_prompts/
- CFG를 음수(-)로 넣고 나온 이미지를 negative에 넣으면 이미지가 더 향상 된다.
## 로라학습
- https://arca.live/b/aiart/71481928
## 병합모델의 상업적 이용권에 관한 이야기
- https://arca.live/b/aiart/72197647
## 모델병합관련 자료
- https://arca.live/b/aiart/71966881
## stable diffusion 정보
- https://arca.live/b/aiart/71947912

---

속도향상
* https://developer.download.nvidia.com/compute/redist/cudnn/v8.7.0/local_installers/11.8/
* https://www.youtube.com/watch?v=KspDSmfVOME
* cudnn-windows-x86_64-8.7.0.84_cuda11-archive 다운로드
* 압축 해제후 bin 폴더에 있는 dll모두

---

# 초고화질 이미지 만들기
* 설명글: https://arca.live/b/aiart/72218134?target=all&keyword=%EC%B4%88+%EA%B3%A0%ED%99%94%EC%A7%88&p=1
* 깃주소: https://github.com/opparco/stable-diffusion-webui-two-shot

## divisions 영역크기
* 1:1, 1:2, 1:2
* 1:1 Y축 1번, x축 1번 나눔 - 영역1
* 1:1 Y축 1번, x축 2번 나눔 - 영역2
* 1:1 Y축 1번, x축 2번 나눔 - 영역3
## position는 영역의 왼쪽위 꼭지점 위치
* 0:0, 0:0, 0:1
## Weights 각 영역이 결과물에 주는 영향력
* 0.2,0.8,0.8

---

## 세팅값
1:1,3:2,3:2,3:2,3:2,3:2,3:2
0:0,0:0,0:1,1:0,1:1,2:0,2:1
0.2,0.7,0.7,0.7,0.7,0.7,0.7

3:2,3:2,3:2,3:2,3:2,3:2
0:0,0:1,1:0,1:1,2:0,2:1
0.7,0.7,0.7,0.7,0.7,0.7

512, 1024, 1536, 2048,
768, 1536, 2304, 3072,

# 2048, 3072

4:4,4:4,4:4,4:4,4:4,4:4,4:4,4:4,4:4,4:4,4:4,4:4,4:4,4:4,4:4,4:4
0:0,0:1,0:2,0:3,1:0,1:1,1:2,1:3,2:0,2:1,2:2,2:3,3:0,3:1,3:2,3:3
0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6

2023-09-20
