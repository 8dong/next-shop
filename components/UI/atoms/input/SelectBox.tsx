import React, { useState } from 'react';
import styled from 'styled-components';

interface SelectBoxProps {
  options: string[];
  setSelectedOption: Function;
  selectedOption: string;
}

const SelectBox = ({ options, setSelectedOption, selectedOption }: SelectBoxProps) => {
  const [isShowOptions, setIsShowOptions] = useState(false);

  const handleClickSelectButton = () => {
    setIsShowOptions((prevState) => !prevState);
  };

  const handleClickOption = (event: React.MouseEvent<HTMLLIElement>) => {
    setSelectedOption((event.target as HTMLLIElement).textContent!);
    setIsShowOptions(false);
  };

  return (
    <SelectBoxWrapper>
      <button onClick={handleClickSelectButton}>{selectedOption}</button>
      {isShowOptions && (
        <ul>
          {options.map((option, index) => (
            <li onClick={handleClickOption} key={index}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </SelectBoxWrapper>
  );
};

const SelectBoxWrapper = styled.div`
  position: relative;

  button {
    width: 300px;
    height: 50px;
    padding-left: 15px;
    border: 1px solid #d4d4d4;

    text-align: left;

    cursor: pointer;
  }

  ul {
    position: absolute;
    top: 100%;
  }

  li {
    display: flex;
    align-items: center;

    width: 300px;
    height: 50px;
    padding-left: 15px;
    border: 1px solid #d4d4d4;
    border-top: none;
    background-color: #fff;

    text-align: left;
  }
`;

export default SelectBox;
