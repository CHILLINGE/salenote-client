# 당신의 Steam salenote
<img width="782" alt="image" src="https://user-images.githubusercontent.com/44703262/186368308-6344abe8-0e3f-4d45-8079-3ddadae2cde8.png">   
Steam에서 판매하는 게임의 과거 할인 기간, 가격 데이터를 수집하고 이를 기반으로 다음 계절할인 참여 여부와 유저가 게임을 적절한 시기에 살 근거를 마련해줍니다.   

종설 피그잼 : https://www.figma.com/file/nLqWO8oXVElj3ztcPSslOZ/%EC%A2%85%EC%84%A4-%ED%94%BC%EA%B7%B8%EC%9E%BC
   
   
## 설치, 환경설정 및 실행 방법
```
yarn
yarn start
```
    
    
## 프로젝트 기능
- 특정 게임 검색
- 게임 정보 확인(이름, 개발사, 배급사, 출시일, 현재 가격)
- 과거 가격 할인 할인율 그래프 확인
- 과거 가격 할인 기록 확인
- 과거 참여 계절할인 할인율 확인
- 다음 계절할인 참여 가능성 확인
   
   
## 사용한 프레임워크 및 라이브러리
### 코드 포맷터
- eslint
- prettier
- husky
   
### 프레임워크
- React
- Next.js
   
### 라이브러리
- Storybook
- Styled component
- Nivo
- lodash
- date-fns
- npm-run-all
- rimraf
   
   
## 폴더 구조  
모노레포 구조로 가장 최상위 루트 폴더에서는 전체적인 서비스에 적용될 수 있도록 코드 포맷터 라이브러리를 추가해 설정했습니다.
특정 개발 과정에 직접적으로 관련된 라이브러리는 각 폴더 안의 node module에 추가했습니다.(site)
   
```
.
├── _packages
│   └── eslint-config
│       └── rules
└── site
    ├── __api__
    ├── components
    │   ├── charts
    │   │   └── formatting
    │   ├── common
    │   ├── gameInfo
    │   ├── layout
    │   │   └── footer
    │   ├── saleInfo
    │   ├── search
    │   └── seasonalSale
    ├── gateway
    │   ├── gameInfo
    │   ├── ping
    │   └── search
    ├── pages
    │   ├── _app.tsx
    │   ├── _document.tsx
    │   ├── game
    │   ├── index.tsx
    │   └── ping.tsx
    ├── public
    │   └── assets
    │       ├── icons
    │       └── image
    ├── stories
    ├── styles
    │   ├── GlobalStyle.tsx
    │   ├── colors.ts
    │   └── fonts.ts
    ├── tsconfig.json
    ├── utils
    │   └── timing.ts
```
   
### site
커스텀 훅을 담는 hooks 디렉터리를 생성하지 않고,
관련있는 코드들을 가까이 위치시키는 Co-Location의 관점에서 각 기능별 디렉터리 안에 hooks를 두었습니다.
- component : 기능별 UI 컴포넌트 및 hook
- gateway : mock API, 서버 API를 상황에 맞게 호출하는 함수와 각 API를 호출하는 코드
- pages : 각 화면 페이지
- public : 아이콘, 폰트
