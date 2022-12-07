import { useSelector } from 'react-redux';
import styled from 'styled-components';

import type { RootState } from '../../../redux/store/store';

const SelectedListSection = () => {
  const selectedList = useSelector((store: RootState) => store.selectedList);

  return (
    <SelectedListWrapper>
      <h3>구매 목록</h3>
      <ul>
        {selectedList.map((selectedItem) => (
          <li className='selectedItem' key={selectedItem.id}>
            {selectedItem.title}
          </li>
        ))}
      </ul>
    </SelectedListWrapper>
  );
};

const SelectedListWrapper = styled.section`
  display: flex;
  justify-content: space-between;

  padding: 20px;
  background-color: #e3e3e3;

  .selectedItem {
    padding: 10px;

    text-align: right;
    color: #606060;
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;

    h3 {
      margin-bottom: 20px;
    }
  }
`;

export default SelectedListSection;
