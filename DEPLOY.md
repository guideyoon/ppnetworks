# Vercel 배포 가이드

## 🚀 빠른 배포 방법 (웹 인터페이스)

### 1단계: Vercel 계정 생성 및 로그인

1. https://vercel.com 접속
2. "Sign Up" 클릭
3. **GitHub 계정으로 로그인** (권장)

### 2단계: 프로젝트 Import

1. Vercel Dashboard에서 **"Add New..."** → **"Project"** 클릭
2. **"Import Git Repository"** 선택
3. GitHub 저장소 목록에서 **`guideyoon/ppnetworks`** 선택
4. **"Import"** 버튼 클릭

### 3단계: 프로젝트 설정

Vercel이 자동으로 Next.js 프로젝트를 감지합니다. 다음 설정을 확인하세요:

- **Framework Preset**: `Next.js` (자동 감지)
- **Root Directory**: `./` (기본값)
- **Build Command**: `npm run build` (자동 설정)
- **Output Directory**: `.next` (자동 설정)
- **Install Command**: `npm install` (자동 설정)

### 4단계: 환경 변수 설정 ⚠️ 중요

**"Environment Variables"** 섹션에서 다음 변수를 추가하세요:

#### Production 환경 변수:
```
RESEND_API_KEY = re_LuxBsWMe_GSR6WFZAvMjSKY9jwzzYyz6y
CONTACT_EMAIL = peoplenetworks.help@gmail.com
```

#### 추가 방법:
1. "Environment Variables" 섹션 클릭
2. 각 변수를 하나씩 추가:
   - **Name**: `RESEND_API_KEY`
   - **Value**: `re_LuxBsWMe_GSR6WFZAvMjSKY9jwzzYyz6y`
   - **Environment**: `Production`, `Preview`, `Development` 모두 선택
3. 동일하게 `CONTACT_EMAIL` 추가
4. **"Save"** 클릭

### 5단계: 배포 실행

1. 모든 설정 확인 후 **"Deploy"** 버튼 클릭
2. 배포 진행 상황을 실시간으로 확인할 수 있습니다
3. 배포 완료까지 약 1-2분 소요

### 6단계: 배포 완료 확인

배포가 완료되면:
- ✅ 자동으로 배포 URL이 생성됩니다 (예: `https://ppnetworks.vercel.app`)
- ✅ "Visit" 버튼을 클릭하여 사이트 확인
- ✅ 모든 페이지가 정상 작동하는지 테스트
- ✅ 문의 폼이 정상 작동하는지 테스트

---

## 🔄 자동 배포 설정

GitHub에 코드를 푸시하면 자동으로 재배포됩니다:

```bash
git add .
git commit -m "변경사항 설명"
git push origin main
```

→ Vercel이 자동으로 변경사항을 감지하고 재배포합니다.

---

## 🌐 커스텀 도메인 연결 (선택사항)

### 도메인 추가 방법:

1. Vercel Dashboard → 프로젝트 선택
2. **"Settings"** → **"Domains"** 메뉴
3. **"Add Domain"** 클릭
4. 도메인 입력 (예: `ppnetworks.com`)
5. DNS 설정 안내에 따라 도메인 제공업체에서 DNS 레코드 추가
6. DNS 인증 완료 후 자동으로 SSL 인증서 발급

---

## 🔧 문제 해결

### 배포 실패 시

1. **빌드 로그 확인**
   - Vercel Dashboard → 프로젝트 → "Deployments" → 실패한 배포 클릭
   - "Build Logs"에서 에러 메시지 확인

2. **로컬에서 빌드 테스트**
   ```bash
   npm run build
   ```
   - 로컬에서 빌드가 성공하는지 확인

3. **환경 변수 확인**
   - 모든 환경 변수가 올바르게 설정되었는지 확인
   - 변수 이름에 오타가 없는지 확인

### 이메일 발송이 안 되는 경우

1. **환경 변수 확인**
   - Vercel Dashboard에서 `RESEND_API_KEY`와 `CONTACT_EMAIL`이 설정되어 있는지 확인

2. **Resend API 키 확인**
   - Resend Dashboard에서 API 키가 활성화되어 있는지 확인

3. **배포 로그 확인**
   - Vercel Dashboard → "Functions" → API 라우트 로그 확인

---

## 📝 배포 후 확인 사항

- [ ] 홈페이지가 정상적으로 표시됨
- [ ] 모든 페이지 링크가 작동함
- [ ] 문의 폼이 정상 작동함
- [ ] 이메일이 정상적으로 발송됨
- [ ] 모바일 반응형이 정상 작동함

---

## 💡 추가 팁

- **Preview 배포**: Pull Request를 생성하면 자동으로 Preview URL이 생성됩니다
- **환경별 변수**: Production, Preview, Development 환경별로 다른 환경 변수 설정 가능
- **배포 알림**: Slack, Discord 등에 배포 알림 설정 가능

---

## 📞 지원

배포 중 문제가 발생하면:
1. Vercel 문서: https://vercel.com/docs
2. Vercel 커뮤니티: https://github.com/vercel/vercel/discussions

