# 피플네트웍스 홈페이지

소상공인을 위한 전문 홈페이지 제작 서비스 홈페이지입니다.

## 개발 서버 실행 방법

### 방법 1: npm 스크립트 사용 (권장)

1. 터미널에서 프로젝트 폴더로 이동:
   ```bash
   cd "C:\Users\user\홈페이지\ppnetworks"
   ```

2. 개발 서버 실행:
   ```bash
   npm run dev
   ```

3. 브라우저에서 접속:
   - http://localhost:3004

### 방법 2: Node.js로 직접 실행

```bash
node start-server.js
```

## 빌드

```bash
npm run build
npm start
```

## 포트 변경

포트를 변경하려면 `package.json`의 `dev` 스크립트를 수정하세요:

```json
"dev": "next dev -p [포트번호]"
```

## 문제 해결

### 서버가 시작되지 않는 경우

1. 포트가 사용 중인지 확인:
   ```powershell
   netstat -ano | findstr :3004
   ```

2. 다른 포트로 시도:
   - `package.json`에서 포트 번호 변경

3. 의존성 재설치:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

4. Next.js 캐시 삭제:
   ```bash
   rm -rf .next
   npm run dev
   ```

## 기술 스택

- Next.js 16
- TypeScript
- Tailwind CSS
- shadcn/ui






