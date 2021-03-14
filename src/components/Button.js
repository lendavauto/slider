import React from 'react';
import styled from 'styled-components';
import leftArrow from '../assets/icons/left-arrow.svg';
import rightArrow from '../assets/icons/right-arrow.svg';

const Button = ({ side, leftSlide, rightSlide, preventDrag }) => {
  switch (side) {
    case 'left':
      return (
        <ButtonWrapper onClick={leftSlide}>
          <img src={leftArrow} alt='left button' onDragStart={preventDrag} />
        </ButtonWrapper>
      );
      break;
    case 'right':
      return (
        <ButtonWrapper onClick={rightSlide}>
          <img src={rightArrow} alt='right button' onDragStart={preventDrag} />
        </ButtonWrapper>
      );
      break;
    default:
      break;
  }
};

const ButtonWrapper = styled.button`
  border: none;
  background: none;
  outline: none;
  pointer-events: auto;
  position: relative;
  z-index: 999;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  img {
    height: 60px;
    transition: 0.3s ease-in-out;
    &:hover {
      opacity: 80%;
    }
  }
`;

export default Button;
