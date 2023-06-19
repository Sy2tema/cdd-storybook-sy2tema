# 원티드 프리온보딩 챌린지

> 원티드 프리온보딩 챌린지 / 스토리북을 이용한 컴포넌트 주도 개발 (Component-Driven Development)

- https://www.wanted.co.kr/events/pre_challenge_fe_10
- https://lean-mahogany-686.notion.site/6-125367b8270f4ea388e93d3fdac89639

## 개발 환경

- React
- Styled

## Installation

BEFORE YOU INSTALL: please read the prerequisites

Start with cloning this repo on your local machine:

```sh
$ npm i cdd-storybook-sy2tema
```

To install and set up the library, run:

```sh
$ yarn i cdd-storybook-sy2tema
```
```sh
$ pnpm i cdd-storybook-sy2tema
```

## Usage

```js
// App.jsx
import { Button } from 'cdd-storybook-sy2tema';

const App = () => {
    return (
        <Button label="Sample label" color="#ffff" backgroundColor="#000" />
    );
}
```

## Docs

- Storybook Link
    - https://sy2tema.github.io/cdd-storybook-sy2tema
- Github Link
    - https://github.com/Sy2tema/cdd-storybook-sy2tema

## Authors

* **Sy2tema** - [Lee Gun Hyuk](https://github.com/Sy2tema)

## License

- MIT License

---

### **Todo**

- [ ] 1. TypeScript 전환
    - 배포 전에 빌드 과정이 바뀌는 것에 주의
- [ ] 2. Github Action / Workflwo 작성
- [ ] 2-1. 자동배포 트리거 시점 만들기
- [ ] 2-2. main 배포시 Commit message보고 SEMVer → NPM Update
- [ ] 2-3. Commit message보고 SEMVer → Release 문서 생성
- [ ] 2-4. Storybook Page 배포
- [ ] 3. CJS, ESM별로 어떤 빌드 방법을 가지맂 최적화

### **최종 목표 Workflow**

- Git commit → 배포 시점 트리거 → NPM Update → Release문서 생성 → Storybook Page 배포

- Figma 수정 → JSON 생성 → 디자인 토큰 생성 → Github Action Trigger → 저장소에서 사용 가능

- Storybook 커스텀
    - [스토리북 예시](https://storybook.js.org/showcase)를 참고