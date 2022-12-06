import styled from 'styled-components';

interface GridLayoutProps {
  columnWidth: string;
  rowWidth: string;
  children: React.ReactNode;
}

const GridLayout = ({ columnWidth, rowWidth, children }: GridLayoutProps) => {
  return (
    <GridLayoutWrapper columnWidth={columnWidth} rowWidth={rowWidth}>
      {children}
    </GridLayoutWrapper>
  );
};

const GridLayoutWrapper = styled.ul<{ columnWidth: string; rowWidth: string }>`
  display: grid;
  grid-template-columns: repeat(auto-fill, ${(props) => props.columnWidth});
  grid-template-rows: repeat(auto-fill, ${(props) => props.rowWidth});
  justify-content: space-between;
  column-gap: 30px;
  row-gap: 50px;

  padding: 20px 0;

  @media screen and (max-width: 1024px) {
    justify-content: space-evenly;
  }
`;

export default GridLayout;
