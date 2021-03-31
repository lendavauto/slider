import React from 'react';
import styled from 'styled-components';
import { useStateValue } from '../StateProvider';

const DotsWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 12%;
  background: #fff;
  border-radius: 5px;
  border: 1px solid #222;
  height: 30px;
  max-width: 700px;
  min-width: 270px;
  outline: none;
  margin: 0 auto;
  z-index: 1;
  @media (min-width: 650px) {
    width: 540px;
  }
  @media (min-width: 950px) {
    width: 811px;
  }
  span {
    height: 18px;
    width: 18px;
    background: #222;
    margin: 0 auto;
    border-radius: 50%;
    cursor: pointer;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    @media (max-width: 650px) {
      transform: scale(0.8);
    }
  }
  .activeDot {
    height: 18px;
    width: 18px;
    background: #e12228;
    margin: 0 auto;
    border-radius: 50%;
    cursor: pointer;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
`;

const Dots = ({ count }) => {
  const [{ index }, dispatch] = useStateValue();

  return (
    <DotsWrapper>
      {count.map((_, dotIndex) => {
        const setActiveDot = () => {
          dispatch({
            type: 'SET_ACTIVE_DOT',
            payload: dotIndex,
          });
        };
        return (
          <span
            key={dotIndex}
            className={index === dotIndex ? 'activeDot' : null}
            onClick={setActiveDot}
          ></span>
        );
      })}
    </DotsWrapper>
  );
};

export default Dots;
