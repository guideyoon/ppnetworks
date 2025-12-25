# 이메일 설정 완료

## ✅ 완료된 작업

1. ✅ Resend 패키지 설치 완료
2. ✅ API 키 설정 완료 (`re_YkosRx8t_6NFLQQbkmRdJKADMpzjAQ7Gc`)
3. ✅ 이메일 발송 API 구현 완료

## ⚠️ 필요한 추가 설정

`.env.local` 파일에 **받을 이메일 주소**를 설정해야 합니다.

### 설정 방법

프로젝트 루트의 `.env.local` 파일을 열어서 다음 줄을 수정하세요:

```
CONTACT_EMAIL=your-email@example.com
```

예시:
```
CONTACT_EMAIL=yourname@gmail.com
```

또는 터미널에서 다음 명령어를 실행하세요 (이메일 주소를 자신의 주소로 변경):

```powershell
(Get-Content .env.local) -replace 'CONTACT_EMAIL=.*', 'CONTACT_EMAIL=your-email@example.com' | Set-Content .env.local
```

## 서버 재시작

환경 변수를 변경한 후 반드시 서버를 재시작하세요:

1. 현재 실행 중인 서버 종료 (Ctrl + C)
2. `npm run dev` 실행

## 테스트

1. 문의하기 페이지 접속
2. 테스트 문의 전송
3. 설정한 이메일 주소로 문의 내용이 도착하는지 확인

## 참고

- 처음에는 이메일이 스팸 폴더에 들어갈 수 있습니다
- Resend Dashboard → Emails에서 발송 로그를 확인할 수 있습니다
- 무료 티어: 월 3,000통까지 무료




