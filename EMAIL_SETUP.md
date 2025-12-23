# 이메일 설정 가이드

## Resend를 사용한 이메일 발송 설정

### 1. Resend 계정 생성 및 API 키 발급

1. [Resend 웹사이트](https://resend.com)에 접속
2. 무료 계정 생성 (월 3,000통까지 무료)
3. Dashboard → API Keys로 이동
4. "Create API Key" 클릭
5. API 키 복사

### 2. 환경 변수 설정

프로젝트 루트에 `.env.local` 파일을 생성하고 다음 내용을 추가하세요:

```env
RESEND_API_KEY=re_your_api_key_here
CONTACT_EMAIL=your-email@example.com
```

**중요:** 
- `RESEND_API_KEY`: Resend에서 발급받은 API 키
- `CONTACT_EMAIL`: 문의를 받을 이메일 주소

### 3. 발신자 이메일 도메인 인증 (선택사항)

**기본 설정 (온보딩 이메일 사용):**
- 현재는 `onboarding@resend.dev`를 발신자로 사용
- 이는 Resend에서 제공하는 테스트용 이메일

**프로덕션 환경 (추천):**
1. Resend Dashboard → Domains로 이동
2. 자신의 도메인 추가 및 DNS 설정
3. DNS 인증 완료 후, `src/app/api/contact/route.ts`의 `from` 주소 변경:
   ```typescript
   from: "PEOPLENETWORKS <noreply@yourdomain.com>"
   ```

### 4. 서버 재시작

환경 변수를 추가한 후, 개발 서버를 재시작하세요:

```bash
npm run dev
```

## 테스트

문의하기 페이지에서 테스트 문의를 보내보세요. 설정한 이메일 주소로 문의 내용이 전달됩니다.

## 문제 해결

### 이메일이 오지 않는 경우

1. `.env.local` 파일이 프로젝트 루트에 있는지 확인
2. 환경 변수 이름이 정확한지 확인 (`RESEND_API_KEY`, `CONTACT_EMAIL`)
3. 서버를 재시작했는지 확인
4. 브라우저 콘솔에서 에러 메시지 확인
5. Resend Dashboard → Emails에서 발송 로그 확인

### API 키 오류

- Resend API 키가 올바른지 확인
- API 키가 활성화되어 있는지 확인 (Resend Dashboard에서 확인)

### 스팸 폴더 확인

처음에는 이메일이 스팸 폴더에 들어갈 수 있습니다. 스팸 폴더도 확인해보세요.

