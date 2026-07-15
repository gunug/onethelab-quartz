---
layout: post
title: moving object 상하로 움직이는 오브젝트
category: unity3d
tags: 
---


# moving object 상하로 움직이는 오브젝트
## 직선운동
```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class UpDownPingPong : MonoBehaviour
{
    public float speed = 1.0f;
    public float distance = 1.0f;

    void FixedUpdate()
    {
        transform.position = new Vector3(transform.position.x, Mathf.PingPong(Time.time * speed, distance), transform.position.z);    
    }
}
```

![[moving_object_1.jpg]]

---

## 곡선운동
```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class UpDownSin : MonoBehaviour
{
    public float speed = 1.0f;
    public float distance = 1.0f;

    void FixedUpdate()
    {
        //transform update with sin function
        transform.position = new Vector3(transform.position.x, transform.position.y + Mathf.Sin(Time.time * speed) * distance, transform.position.z);
    }
}

```

![[moving_object_2.jpg]]

2024-11-13
