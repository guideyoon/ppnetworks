# Resend 도메인 인증 가이드

## 현재 상황

Resend 무료 티어는 **테스트 모드**로, 자신의 계정 이메일로만 발송할 수 있습니다.
- ✅ 가능: `jangjs3@gmail.com` (계정 이메일)
- ❌ 불가: `peoplenetworks.help@gmail.com` (다른 이메일)

## 해결 방법: 도메인 인증

`peoplenetworks.help@gmail.com`으로 이메일을 받으려면 도메인을 인증해야 합니다.

### 방법 1: 자신의 도메인이 있는 경우 (권장)

1. **Resend Dashboard 접속**
   - https://resend.com/domains
   - "Add Domain" 클릭

2. **도메인 입력**
   - 예: `peoplenetworks.com` 또는 `ppnetworks.com`

3. **DNS 레코드 추가**
   - Resend가 제공하는 DNS 레코드를 도메인 관리자에서 추가
   - 보통 다음 레코드들이 필요:
     - TXT 레코드 (도메인 인증용)
     - DKIM 레코드 (이메일 인증용)

4. **인증 완료 대기**
   - DNS 전파 시간: 보통 몇 분 ~ 몇 시간
   - Resend Dashboard에서 인증 상태 확인

5. **발신자 주소 변경**
   - `src/app/api/contact/route.ts` 파일에서:
   ```typescript
   from: "PEOPLENETWORKS <noreply@peoplenetworks.com>"
   ```
   - 도메인을 인증한 도메인으로 변경

### 방법 2: 도메인이 없는 경우

**임시 해결책:**
- 현재 설정: `jangjs3@gmail.com`으로 발송 (이미 설정 완료)
- `jangjs3@gmail.com` 계정에서 이메일 확인 후 필요시 `peoplenetworks.help@gmail.com`으로 전달

**영구 해결책:**
- 도메인 구매 후 인증 (예: Namecheap, GoDaddy 등)
- 또는 Resend Pro 플랜으로 업그레이드 (유료)

## 현재 설정

현재는 `jangjs3@gmail.com`으로 이메일이 발송되도록 설정되어 있습니다.

문의가 들어오면:
1. `jangjs3@gmail.com`으로 문의 내용 받기
2. 필요시 `peoplenetworks.help@gmail.com`으로 전달

## 서버 재시작

설정 변경 후 서버를 재시작하세요:

```bash
# 서버 종료 (Ctrl + C)
npm run dev
```

이제 `jangjs3@gmail.com`으로 정상적으로 이메일이 발송됩니다!



