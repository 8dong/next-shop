# Next Shop

## 프로젝트 실행

1. <code>npm i</code>

2. <code>npm run dev</code>

3. <a href="http://localhost:3001/" target="_blank">http://localhost:3001/</a> 접속

## 프로젝트 배포 URL

배포 URL : <a href="https://next-shop-8dong.vercel.app/">https://next-shop-8dong.vercel.app/</a>

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

## CI/CD

- GitHub Actions를 사용하여 CI/CD 과정을 자동화하도록 설계하였습니다.

- main 브랜치에 push, merge와 같은 이벤트가 발생하는 경우 CDCD.yml(workflow)가 실행되도록 설계하였습니다.

## 구현 명세

### API 명세

- request body에 fetchStartIndex, fetchLength를 포함하여 요청합니다.

  - fetchStartIndex는 가져올 상품 리스트의 인덱스를 전달합니다.

  - fetchLength는 가져올 상품의 개수를 전달합니다.

- response body로 요청한 상품 리스트를 응답으로 전달받습니다.

### 반응형 웹 구현

- 데스크탑과 모바일 환경을 고려하여 반응형 웹 사이트로 제작하였습니다.

<img src="https://user-images.githubusercontent.com/96307662/210173082-b9891040-4bbb-4022-b02f-a8257cf8ce37.gif" alt="Responsive Web" width="80%" />

### 컴포넌트

모든 컴포넌트들은 styled-components 라이브러리(CSS-in-JS)를 사용하였으며 모든 CSS 스타일을 직접 작성하여 구성하였습니다.

### 상태 관리

#### cartList

- 장바구니 리스트의 경우 cartList 전역 상태(redux)로 관리하도록 설계하였습니다.

- localStroage와 연동하기 위해 redux-persist 라이브러리를 사용하였으며 refresh되더라도 cartList 상태를 잃지 않도록 설계하였습니다.

#### selectedList

- 결제될 상품 리스트의 경우 selectedList 전역 상태(redux)로 관리하도록 설계하였습니다.

- selectedList에 존재하는 상품들만 결제 정보에 반영되도록 설계하였습니다.

#### selectedCoupon

- 선택된 쿠폰의 경우 selectedCoupon 전역 상태(redux)로 관리하도록 설계하였습니다.

- selectedCoupon이 결제 정보에 반영됩니다.

### 상품 리스트 페이지 (/)

- SSR 방식의 pre-rendering을 사용하며 초기 상품 정보들을 서버 API에 요청을 보내 props로 전달받아 렌더링합니다.

- Intersection Observer API를 사용하여 Infinity Scroll을 구현하였습니다. 마지막 Skeleton UI에 도달하는 경우 5개씩 추가적으로 상품을 로드하도록 구현하였습니다.

<img src="https://user-images.githubusercontent.com/96307662/210173373-806861a2-981e-4aae-aa5a-091628eb6ac0.gif" alt="Infinity Scroll" width="80%" />

<hr />

- 각 상품마다 존재하는 카트 토클 버튼 클릭시 장바구니(cartList)에 추가/삭제가 됩니다.

- Header 영역의 카트 버튼에는 현재 장바구니에 포함된 상품의 개수가 표시됩니다.

<img src="https://user-images.githubusercontent.com/96307662/210173418-2c3dfa9d-3bce-4361-9f2d-1bea6470ecd2.gif" alt="Add/Delete Cart" width="80%" />

### 장바구니 페이지(/cart)

- Header 영역의 카트 버튼 클릭시 장바구니 페이지(/cart)로 라우팅됩니다.

- 초기에 장바구니 페이지 진입한 경우 장바구니(cartList)의 모든 상품들은 선택된 상품(selectedList)으로 설정됩니다.

- 각 상품 좌측 하단 체크 버튼을 통해 selectedList 추가/삭제가 가능합니다.

- 상단 삭제 버튼 클릭시 선택된 상품들(selectedList)을 장바구니(cartList)에서 제거합니다.

- 상단 전체 선택 버튼 클릭시 장바구니(cartList) 내 모든 상품들이 선택된 상품(selectedList)으로 추가됩니다.

<img src="https://user-images.githubusercontent.com/96307662/210173599-5e2738bb-f8d1-4ac8-a88f-4f48f9c69160.gif" alt="cart page" width="80%" />

<hr />

- 각 상품 우측 상단 엑스 버튼을 클릭시 장바구니(cartList)에서 해당 상품을 삭제합니다.

<img src="https://user-images.githubusercontent.com/96307662/210173705-ca78677e-f263-4c61-8c86-e47e8d88ba16.gif" alt="delete to cartList" width="80%" />

<hr />

- 구메 목록에는 선택된 상품(selectedList)에 존재하는 상품들의 제목(title)이 표시됩니다.

- 쿠폰을 선택하고 적용 버튼 클릭시 선택된 쿠폰이 selectedCoupon 상태로 갱신됩니다.

- 선택된 상품(selectedList)의 모든 상품 가격에서 선택된 쿠폰에 해당 가격만큼 할인된 가격이 최종 가격에 표시됩니다. 각 상품마다 쿠폰 적용이 가능한지에 대한 여부가 availableCoupon 값으로 결정됩니다.

  - amount 타입의 쿠폰은 전체 결제 금엑에서 해당 amount만큼만 최종 결제 금액에 반영됩니다.

  - rate 타입의 쿠폰은 availableCoupon값이 false가 아닌 각 상품들마다 할인된 가격이 누적되어 최종 결제 금액에 반영됩니다.

- 최적 적용 클릭시 가장 많이 할인되는 쿠폰이 자동적으로 선택되어 적용됩니다.

<img src="https://user-images.githubusercontent.com/96307662/210173798-be4255c0-5d50-4d17-9f88-c136c1cac3fc.gif" alt="coupon apply" width="80%" />
