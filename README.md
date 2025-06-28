# 🧩 JobStick Junior - Monorepo Architecture

## 📌 프로젝트 개요


---

## ⚙️ 프로젝트 구조 및 포트 설정

| 패키지명                 | 포트번호 | 설명 |
|--------------------------|----------|------|
| `main-container`         | `3000`   | 공통 레이아웃 및 라우팅 허브. 모든 기능 모듈의 Wrapper 역할 |
| `job-postings`           | `3001`   | 채용 공고 및 기업 분석 모듈 (기존 `companyreport`) |
| `ai-interview`           | `3002`   | AI 기반 면접 시뮬레이션 기능 |
| `membership`             | `3003`   |  |
| `mypage`                 | `3004`   | 유저 마이페이지 기능 |
| `google-authentication` | `3100`   | Google OAuth2 인증 처리 모듈 |
| `kakao-authentication`  | `3101`   | Kakao OAuth2 인증 처리 모듈 |
| `naver-authentication`  | `3102`   | Naver OAuth2 인증 처리 모듈 |

---

## 🧱 개발 환경 및 실행

```bash

npm install
npm run dev  # localhost:3000

# job-postings 실행
cd ../job-postings
npm install
npm run dev  # localhost:3001
