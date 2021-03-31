import React from 'react';
import styled from 'styled-components';
import { useStateValue } from '../StateProvider';
import leftArrow from '../assets/icons/left-arrow.svg';

const ButtonWrapper = styled.button`
  border: none;
  background: none;
  outline: none;
  height: 60px;
  width: 60px;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  img {
    height: 60px;
    width: 60px;
    padding: 5px;
    transition: 0.3s ease-in-out;
    &:hover {
      opacity: 80%;
    }
  }
  .flip {
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
  }
`;

const Button = ({ side }) => {
  const [, dispatch] = useStateValue();
  
  const nextSlide = () => {
    dispatch({
      type: 'NEXT_SLIDE',
      payload: 1,
    });
  };

  const prevSlide = () => {
    dispatch({
      type: 'PREV_SLIDE',
      payload: -1,
    });
  };

  const preventDrag = (e) => {
    e.preventDefault();
  };

  switch (side) {
    case 'left':
      return (
        <ButtonWrapper onClick={prevSlide}>
          <img src={leftArrow} alt='left button' onDragStart={preventDrag} />
        </ButtonWrapper>
      );
    case 'right':
      return (
        <ButtonWrapper onClick={nextSlide}>
          <img
            src={leftArrow}
            alt='right button'
            onDragStart={preventDrag}
            className='flip'
          />
        </ButtonWrapper>
      );
    default:
      break;
  }
};

export default Button;
