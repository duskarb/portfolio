# 배포 가이드

## 1. GitHub 저장소 초기화 및 설정

### 저장소 초기화 (처음 한 번만)

터미널에서 다음 명령어를 실행하세요:

```bash
# Git 저장소 초기화 (아직 안 했다면)
git init

# 모든 파일 추가
git add .

# 첫 커밋
git commit -m "Initial commit"

# GitHub에서 새 저장소를 만든 후, 원격 저장소 추가
# (YOUR_USERNAME과 YOUR_REPO_NAME을 실제 값으로 변경)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# main 브랜치로 푸시
git branch -M main
git push -u origin main
```

### 기존 저장소 초기화 (모든 히스토리 삭제)

기존 저장소의 모든 커밋 히스토리를 삭제하고 새로 시작하려면:

```bash
# 기존 원격 저장소 제거
git remote remove origin

# 새로운 orphan 브랜치 생성 (히스토리 없음)
git checkout --orphan new-main

# 모든 파일 스테이징
git add .

# 첫 커밋
git commit -m "Initial commit"

# 기존 main 브랜치 삭제
git branch -D main

# 새 브랜치를 main으로 이름 변경
git branch -m main

# 강제 푸시 (주의: 기존 히스토리가 모두 삭제됩니다)
git push -f origin main
```

## 2. 호스팅 옵션

### 옵션 A: Vercel (권장 - 가장 간단)

1. **Vercel 가입**: https://vercel.com 접속 후 GitHub 계정으로 로그인

2. **프로젝트 연결**:
   - "Add New Project" 클릭
   - GitHub 저장소 선택
   - 자동으로 설정 감지됨 (Next.js)
   - "Deploy" 클릭

3. **완료!** 
   - 몇 분 후 자동으로 배포 완료
   - `https://your-project.vercel.app` 형태의 URL 제공

**참고**: Vercel을 사용할 경우 `next.config.ts`에서 `basePath`와 `assetPrefix` 설정을 제거하는 것이 좋습니다.

### 옵션 B: GitHub Pages (현재 설정됨)

현재 프로젝트는 GitHub Pages 배포를 위한 설정이 되어 있습니다.

1. **GitHub 저장소 설정**:
   - GitHub 저장소 페이지로 이동
   - Settings → Pages
   - Source: "GitHub Actions" 선택
   - 저장

2. **배포**:
   - `main` 브랜치에 푸시하면 자동으로 배포됩니다
   - 배포 완료 후 `https://YOUR_USERNAME.github.io/portfolio` 형태의 URL로 접속 가능

3. **현재 설정 확인**:
   - `next.config.ts`에 `basePath: '/portfolio'`가 설정되어 있음
   - 저장소 이름이 `portfolio`가 아니라면 이 값을 변경해야 합니다

### 옵션 C: Netlify

1. **Netlify 가입**: https://netlify.com 접속 후 GitHub 계정으로 로그인

2. **프로젝트 연결**:
   - "Add new site" → "Import an existing project"
   - GitHub 저장소 선택
   - Build command: `npm run build`
   - Publish directory: `out`
   - "Deploy site" 클릭

## 3. Vercel 사용 시 설정 변경 (선택사항)

GitHub Pages 대신 Vercel을 사용한다면 `next.config.ts`를 다음과 같이 수정하세요:

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // basePath와 assetPrefix 제거 (Vercel은 루트 경로 사용)
  images: {
    unoptimized: true,
  },
  experimental: {
    typedRoutes: true
  }
};

export default nextConfig;
```

## 4. 빠른 시작 (Vercel 권장)

```bash
# 1. Git 초기화 및 커밋
git init
git add .
git commit -m "Initial commit"

# 2. GitHub에 새 저장소 생성 후
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main

# 3. Vercel.com 접속 → GitHub 저장소 연결 → Deploy
```

## 문제 해결

- **빌드 에러**: `npm run build`를 로컬에서 먼저 테스트해보세요
- **이미지가 안 보임**: `images.unoptimized: true` 설정 확인
- **경로 문제**: GitHub Pages 사용 시 `basePath` 설정이 올바른지 확인





