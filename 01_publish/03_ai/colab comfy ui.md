https://colab.research.google.com/
새 노트북
런타임 → 런타임 유형 변경 → 하드웨어 가속기 → GPU → 저장
![[Pasted image 20260702090148.png]]
T4 GPU
```
!nvidia-smi
```

출력에서 'Tesla T4' 확인

```
%cd /content
```

```
!git clone https://github.com/comfyanonymous/ComfyUI
```

'Cloning into 'ComfyUI'...' 출력 확인

## 폴더이동
```
%cd /content/ComfyUI
```

## 필수라이브러리 설치
```
!pip install -r requirements.txt
```

## 모델 폴더로 이동
```
%cd /content/ComfyUI/models
```

```
!mkdir -p checkpoints
!mkdir -p text_encoders
!mkdir -p vae
```

```
!ls /content/ComfyUI/models
```

---

```
!pip install huggingface_hub
from huggingface_hub import login
login()
```

https://huggingface.co/login?next=%2Fsettings%2Ftokens
create new token
READ 탭 
생성하고 토큰 입력하기

---

## 모델 다운로드

```
%cd /content/ComfyUI/models
```

```
%cd /content/ComfyUI/models/checkpoints

!wget -c https://huggingface.co/black-forest-labs/FLUX.1-schnell/resolve/main/flux1-schnell.safetensors
```

```
%cd /content/ComfyUI/models/text_encoders

!wget -c https://huggingface.co/google/t5-v1_1-xxl/resolve/main/model.safetensors -O t5xxl.safetensors
```

```
!wget -c https://huggingface.co/openai/clip-vit-large-patch14/resolve/main/model.safetensors -O clip_l.safetensors
```

```
%cd /content/ComfyUI/models/vae

!wget -c https://huggingface.co/stabilityai/sd-vae-ft-mse/resolve/main/diffusion_pytorch_model.safetensors -O flux_vae.safetensors
```

## 모델 다운로드 확인
```
!ls /content/ComfyUI/models/checkpoints
!ls /content/ComfyUI/models/text_encoders
!ls /content/ComfyUI/models/vae
```

```
flux1-schnell.safetensors
t5xxl.safetensors
clip_l.safetensors
flux_vae.safetensors
```

---

## 한방짜리
```
# 폴더 이동
%cd /content/ComfyUI/models

# 1. Flux Schnell UNet
%cd /content/ComfyUI/models/checkpoints
!wget -c https://huggingface.co/black-forest-labs/FLUX.1-schnell/resolve/main/flux1-schnell.safetensors

# 2. Text Encoders
%cd /content/ComfyUI/models/text_encoders
!wget -c https://huggingface.co/google/t5-v1_1-xxl/resolve/main/model.safetensors -O t5xxl.safetensors
!wget -c https://huggingface.co/openai/clip-vit-large-patch14/resolve/main/model.safetensors -O clip_l.safetensors

# 3. VAE
%cd /content/ComfyUI/models/vae
!wget -c https://huggingface.co/stabilityai/sd-vae-ft-mse/resolve/main/diffusion_pytorch_model.safetensors -O flux_vae.safetensors
```