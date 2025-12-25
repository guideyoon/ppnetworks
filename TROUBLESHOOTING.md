# 이메일 발송 문제 해결 가이드

## 현재 설정 확인

1. **.env.local 파일 확인**
   - 파일 위치: 프로젝트 루트
   - 내용 확인:
     ```
     RESEND_API_KEY=re_YkosRx8t_6NFLQQbkmRdJKADMpzjAQ7Gc
     CONTACT_EMAIL=peoplenetworks.help@gmail.com
     ```

2. **서버 재시작 확인**
   - 환경 변수 변경 후 반드시 서버를 재시작해야 합니다
   - 현재 실행 중인 서버를 종료하고 `npm run dev` 다시 실행

## 문제 진단

### 1. 브라우저 개발자 도구 확인
- F12로 개발자 도구 열기
- Console 탭에서 에러 메시지 확인
- Network 탭에서 `/api/contact` 요청 상태 확인

### 2. 서버 콘솔 확인
- 터미널에서 서버 실행 로그 확인
- "이메일 발송 성공" 또는 "이메일 발송 오류" 메시지 확인

### 3. Resend Dashboard 확인
1. [Resend Dashboard](https://resend.com/emails) 접속
2. Emails 섹션으로 이동
3. 발송 시도 로그 확인
4. 실패한 경우 오류 메시지 확인

## 일반적인 문제

### 문제 1: API 키 오류
**증상**: "Unauthorized" 또는 "Invalid API key" 오류

**해결**:
- Resend Dashboard에서 API 키 확인
- .env.local 파일의 API 키가 정확한지 확인
- 서버 재시작

### 문제 2: 이메일 주소 형식 오류
**증상**: "Invalid email address" 오류

**해결**:
- .env.local의 CONTACT_EMAIL 형식 확인
- 올바른 이메일 형식: `peoplenetworks.help@gmail.com`

### 문제 3: 스팸 폴더
**증상**: 이메일이 도착하지 않음

**해결**:
- Gmail 스팸 폴더 확인
- 받은편지함의 다른 폴더 확인 (프로모션, 업데이트 등)

### 문제 4: Resend 제한
**증상**: "Rate limit exceeded" 오류

**해결**:
- 무료 티어 제한 확인 (월 3,000통)
- Resend Dashboard에서 사용량 확인

## 테스트 방법

### 1. 간단한 테스트
문의하기 페이지에서 간단한 테스트 문의를 보내보세요:
- 이름: 테스트
- 연락처: 010-1234-5678
- 이메일: test@example.com
- 문의 내용: 테스트

### 2. 콘솔 로그 확인
서버 터미널에서 다음 메시지들을 확인하세요:
- "문의 접수:" - 요청이 서버에 도착
- "이메일 발송 성공:" - 이메일 발송 성공
- "이메일 발송 오류:" - 오류 발생 시 상세 내용

## 추가 도움말

여전히 문제가 있으면:
1. 서버 터미널의 전체 에러 메시지 복사
2. 브라우저 콘솔의 에러 메시지 복사
3. Resend Dashboard의 발송 로그 스크린샷

이 정보들을 공유해주시면 더 정확한 해결책을 제공할 수 있습니다.




