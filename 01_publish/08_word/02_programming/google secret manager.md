
* google에서 제공하는 암호관리자

Google의 **Application Default Credentials(ADC)**가 자동으로 사용
GCP google cloude platform

gcloud auth application-default login

```
from google.cloud import secretmanager
client = secretmanager.SecretManagerServiceClient()
```

google run
