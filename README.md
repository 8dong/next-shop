# Next Shop

## 프로젝트 실행

1. <code>npm i</code>

2. <code>npm run dev</code>

3. <a href="http://localhost:3001/" target="_blank">http://localhost:3001/</a> 접속

## 기술 스택

  <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="Typescript">
  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React">
  <img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js">
  <img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white" alt="Redux">
  <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white" alt="styled-components">

## 디자인 패턴

해당 프로젝트에 아토믹 디자인 패턴을 적용하였습니다. 각 단계에 대해서 주관적인 해석을 적용하여 구성하였습니다.

1. atoms

- 가장 작은 컴포넌트 단위입니다. atoms 컴포넌트의 범위는 요소의 의미나 기능, 속성이 유사한 경우 공통적인 컴포넌트로 구성하였습니다.

- 예를 들어, button의 경우 속성을 기준으로 분리하였습니다. Button과 Float 컴포넌트의 경우 CSS 속성이 서로 일치하지 않아 별개의 컴포넌트로 분리하였습니다. text의 경우 의미적인 부분으로 컴포넌트를 분리하였습니다. AdDescText는 광고에 대한 설명, AdTitleDesc는 광고의 주제, LogoText는 로고 텍스트, PriceText는 가격에 대한 텍스트를 나타내는 컴포넌트들로 구분하여 구성하였습니다.

2. molecules

- atoms 컴포넌트를 조합된 컴포넌트입니다. molecules 컴포넌트의 경우 하나의 의미를 갖는 컴포넌트 입니다.

3. organisms

- atoms과 molecules 컴포넌트로 구성되며 페이지 내 하나의 section을 담당하는 컴포넌트입니다. 즉, 독립적으로 존재하더라도 그 의미가 유지되는 컴포넌트입니다.

- organisms 컴포넌트의 경우 순수 컴포넌트가 아닌 state와 logic이 존재하도록 구성하였습니다.
  page 단계에서 모든 데이터를 props로 넘겨주게 된다면 page 단계가 무겁고 가독성이 좋지 않다고 판단하여 organisms 단계에서 state와 logic을 작성하였습니다.

4. templates

- templates 컴포넌트의 경우 단지 컴포넌트들을 배치하기 위한 Layout 용도로만 사용되는 컴포넌트 입니다.

5. pages

- 각 페이지에 해당되며 organisms 컴포넌트들이 순서에 맞게 배치됩니다.

## 구현 명세

### 반응형 웹 구현

데스크탑과 모바일 환경을 고려하여 반응형 웹 사이트로 제작하였습니다.

### 컴포넌트

모든 컴포넌트들은 styled-components 라이브러리를 사용하였으며 모든 CSS 스타일을 직접 작성하여 구성하였습니다.

### 상태 관리

1. cartList 상태의 경우 redux로 관리하며 redux-persist를 사용하여 localStorage에 연동되어 새로고침하더라도 상태를 잃지 않도록 구성했습니다.

2. selectedList 상태의 경우 redux로 관리하며 selectedList에 존재하는 제품들만이 결제 정보에 반영됩니다.

3. selectedCoupon 상태의 경우 redux로 관리되며 선택된 쿠폰에 대해서 결제 정보에 반영됩니다.

### 제품 리스트 페이지 (/)

- SSR 방식의 pre-rendering을 사용하며 초기 productItems 정보를 API 요청을 보내 props로 전달받아 렌더링합니다.

- Intersection Observer API를 사용하여 Infinity Scroll을 구현하였습니다. 마지막 Skeleton UI에 도달하는 경우 5개씩 추가적으로 로드하도록 구현하였습니다.

- 각 제품마다 존재하는 CartButton 클릭시 장바구니에 추가/삭제가 됩니다.

- Header 영역의 CartButton에는 현제 cartList의 개수가 표시되며, 클릭시 장바구니 페이지로 이동하도록 구현하였습니다.

### 장바구니 페이지(/cart)

- 삭제 버튼 클릭시 현제 선택된 제품들을 cartList에서 삭제합니다. 전체 선택 버튼 클릭시 cartList 내 모든 제품들이 selectedList에 추가됩니다.

- 각 제품 좌측 하단 체크 버튼을 통해 selectedList 추가/삭제가 가능합니다. 각 제품 우측 상단 엑스 버튼을 클릭시 cartList에서 해당 제품을 삭제합니다.

- 구메 목록에는 selectedList에 존재하는 제품들의 title이 표시됩니다.

- 쿠폰을 선택하고 적용버튼 클릭시 selectedList의 모든 제품 가격에서 해당 가격만큼 할인된 가격이 최종 가격에 표시됩니다. 각 제품마다 쿠폰 적용이 가능한지에 대한 여부가 availableCoupon 값으로 결정됩니다.

  - amount 타입의 쿠폰은 전체 결제 금엑에서 해당 amount만큼만 최종 결제 금액에 반영됩니다.
  - rate 타입의 쿠폰은 availableCoupon값이 false가 아닌 제품들마다 할인된 가격이 누적되어 최종 결제 금액에 반영됩니다.

- 최적 적용 클릭시 가장 많이 할인되는 쿠폰이 선택되어 적영됩니다.
