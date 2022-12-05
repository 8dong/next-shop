import React from 'react';
import styled from 'styled-components';

import HeaderSection from '../UI/organisms/HeaderSection';

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <PageLayoutWrapper>
      <HeaderSection logoText='NEXT SHOP' />
      {children}
    </PageLayoutWrapper>
  );
};

const PageLayoutWrapper = styled.section`
  max-width: 1024px;
  margin: 0 auto;
  padding-top: 100px;

  header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;

    max-width: 1024px;
    margin: 0 auto;
  }

  @media screen and (max-width: 768px) {
    & {
      padding-top: 70px;
    }
`;

export default PageLayout;
