---
layout: post
title: Oculus Lipsync Unity
category: subpage
tags: 
---


# Lipsync

## Oculus Lipsync Unity
* <https://developer.oculus.com/downloads/package/oculus-lipsync-unity/>

![[lipsync_1.jpg]]

* DownLoad 눌러서 파일 다운로드
* 압축 해제 후 OculusLipSync.unitypackage 파일 열어서 유니티에 import

![[lipsync_2.jpg]]

* import된 ready play me 아바타를 Hirarchy 창에서 선택
* 하위 객체 중 Renderer_head 선텍후 Inspector 창에서 Add Component를 선택하여 컴포넌트 추가
  
![[lipsync_3.jpg]]

* OVR Lip Sync Context
* OVR Lip Sync Context Morph Target
* Eye Animation Handler

![[lipsync_4.jpg]]

* AudioSource 를 드래그 드롭하여 OVR Lip Sync Context > AudioSource에 넣기
* OVR Lip Sync Context > audio loop back 체크
* Ready Player Me 아바타의 Renderer_Head 를 드래그 드롭하여 OVR Lip Sync Context Morph Target > Skined Mesh Renderer에 넣기

---

![[lipsync_5.jpg]]

* OVRLipSyncContextMorphTarget.cs 파일수정
* Ctrl+G를 누른다음 줄번호를 입력하면 쉽게 이동 가능

```c#
CheckVisemeKey(visemeTestKeys[i], i, 100); //100을 1로 (150번째 줄)
skinnedMeshRenderer.SetBlendShapeWeight(
                    visemeToBlendTargets[i],
                    frame.Visemes[i] * 100.0f); //100.0f를 1.0f로 (169번째 줄)
skinnedMeshRenderer.SetBlendShapeWeight(
                laughterBlendTarget,
                laughterScore * 100.0f); //100.0f를 1.0f로 (191번째 줄)
lipsyncContext.SetLaughterBlend(100); //100을 1로 (220번째 줄)
```

2024-08-04
