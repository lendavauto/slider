import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useStateValue } from '../StateProvider';
import Slide from '../components/Slide';
import loadingGif from '../assets/images/loading.svg';
import Dots from './Dots';

const CarouselWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  min-height: 700px;
  width: 100%;
  max-width: 811px;
  min-width: 270px;
  @media (min-width: 650px) {
    width: 540px;
  }
  @media (min-width: 950px) {
    width: 811px;
  }
  .slide {
    display: grid;
    place-items: center;
    margin: 0 auto;
    height: 381px;
    width: 100%;
    max-width: 811px;
    min-width: 270px;
    background: #fff;
    border-radius: 5px;
    border: 1px solid #222;
    z-index: 1;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .activeSlide {
    opacity: 1;
  }
  .loadingSlides {
    display: grid;
    place-items: center;
    margin: 0 auto;
    width: 100%;
  }
  .slides {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 500px;
    width: 100%;
    min-width: 270px;
    z-index: 1;
    overflow: hidden;
    touch-action: none;
    pointer-events: all;
    cursor: pointer;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
`;

const Carousel = () => {
  const [{ index, loading, apiData }, dispatch] = useStateValue();
  const [count, setCount] = useState([]);
  const url = 'https://randomuser.me/api/?results=13';
  const sliderChildren = useRef(0);

  let moving = false;
  let initialMousePosition = null;
  let initialFingerPosition = null;

  const fetchData = async () => {
    dispatch({
      type: 'LOADING_TRUE',
      payload: true,
    });

    const response = await fetch(url);
    const data = await response.json();

    if (data === undefined) {
      return null;
    } else if (data.results) {
      dispatch({
        type: 'SET_DATA',
        payload: data.results,
      });
      dispatch({
        type: 'LOADING_FALSE',
        payload: false,
      });
      let slideCount = document.getElementsByClassName('mainSlide').length;
      setCount(Array.from(Array(slideCount).keys()));
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (count.length > 0) {
      let lastIndex = count.length - 1;

      if (index < 0) {
        dispatch({
          type: 'SET_INDEX_LAST',
          payload: lastIndex,
        });
      }

      if (index > lastIndex) {
        dispatch({
          type: 'SET_INDEX_FIRST',
          payload: 0,
        });
      }

      if (sliderChildren.current.childNodes[index]) {
        let notIndex = count.filter(function (x) {
          return x !== index;
        });

        notIndex.map((notIndex) => {
          if (
            sliderChildren.current.childNodes[
              notIndex
            ].firstChild.classList.contains('activeSlide')
          ) {
            sliderChildren.current.childNodes[
              notIndex
            ].firstChild.classList.remove('activeSlide');

            sliderChildren.current.childNodes[
              notIndex
            ].firstChild.style.transform = 'translateX(0px)';
          }
        });

        if (
          sliderChildren.current.childNodes[
            index
          ].firstChild.classList.contains(index)
        ) {
          sliderChildren.current.childNodes[index].firstChild.classList.add(
            'activeSlide'
          );
        }
      }
    }
  }, [count, index]);

  const fingerSwipeStart = (e) => {
    initialFingerPosition = e.touches[0].screenX;
    moving = true;
  };

  const mouseSwipeStart = (e) => {
    initialMousePosition = e.pageX;
    moving = true;
  };

  const fingerSwipeMove = (e) => {
    let positionDiff = null;

    if (!moving) {
      return;
    }

    if (moving) {
      const currentPosition = e.touches[0].screenX;
      positionDiff = currentPosition - initialFingerPosition;

      sliderChildren.current.childNodes[
        index
      ].firstChild.style.transform = `translateX(${positionDiff}px)`;

      if (positionDiff <= -200) {
        dispatch({
          type: 'NEXT_SLIDE',
          payload: 1,
        });
      } else if (positionDiff >= 200) {
        dispatch({
          type: 'PREV_SLIDE',
          payload: -1,
        });
      }
    }
  };

  const mouseSwipeMove = (e) => {
    let positionDiff = null;

    if (!moving) {
      return;
    }

    if (moving) {
      const currentPosition = e.pageX;
      positionDiff = currentPosition - initialMousePosition;

      sliderChildren.current.childNodes[
        index
      ].firstChild.style.transform = `translateX(${positionDiff}px)`;

      if (positionDiff <= -250) {
        dispatch({
          type: 'NEXT_SLIDE',
          payload: 1,
        });
      } else if (positionDiff >= 250) {
        dispatch({
          type: 'PREV_SLIDE',
          payload: -1,
        });
      }
    }
  };

  const swipeEnd = () => {
    moving = false;
    sliderChildren.current.childNodes[index].firstChild.style.transform =
      'translateX(0px)';
  };

  useEffect(() => {
    let moveSlider = setInterval(() => {
      dispatch({
        type: 'ADD_INDEX',
        payload: 1,
      });
    }, 7000);
    return () => clearInterval(moveSlider);
  }, [index]);

  return (
    <CarouselWrapper>
      {loading ? (
        <div className='loadingSlides'>
          <div className='slide'>
            <img src={loadingGif} alt='loading image' />
          </div>
        </div>
      ) : (
        <div
          ref={sliderChildren}
          className='slides'
          onTouchStart={fingerSwipeStart}
          onTouchMove={fingerSwipeMove}
          onTouchCancel={swipeEnd}
          onTouchEnd={swipeEnd}
          onMouseDown={mouseSwipeStart}
          onMouseMove={mouseSwipeMove}
          onMouseUp={swipeEnd}
          onMouseLeave={swipeEnd}
        >
          {apiData?.map(
            (
              {
                login: { uuid },
                picture: { large: image },
                name: { first, last },
                email,
                phone,
              },
              childIndex
            ) => {
              return (
                <Slide
                  key={uuid}
                  id='1'
                  className={`${childIndex} mainSlide`}
                  image={image}
                  fName={first}
                  lName={last}
                  email={email}
                  phone={phone}
                />
              );
            }
          )}
          <Slide id='2' className={`13 mainSlide exampleSlide`} />
        </div>
      )}
      <Dots count={count} />
    </CarouselWrapper>
  );
};

export default Carousel;
