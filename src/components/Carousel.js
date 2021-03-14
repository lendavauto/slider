import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import data from '../data';
import Button from './Button';
import blobFirst from '../assets/images/vector-dark.svg';
import blobSecond from '../assets/images/vector-red.svg';

const Carousel = () => {
  const [employees, setEmployees] = useState(data);
  const [index, setIndex] = useState(0);
  let initialPosition = null;
  let moving = false;

  const swipeInit = (e) => {
    initialPosition = e.pageX;
    moving = true;
    console.log(initialPosition);
  };

  const swipeSlide = (e) => {
    if (moving) {
      const currentPosition = e.pageX;
      console.log(currentPosition);
      if (initialPosition - currentPosition >= 100) {
        prevSlide();
      } else if (initialPosition - currentPosition <= -100) {
        nextSlide();
      }
    }
  };

  const swipeEnd = () => {
    moving = false;
    initialPosition = null;
  };

  const prevSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex - 1;
      if (index < 0) {
        index = employees.length - 1;
      }
      return index;
    });
  };

  const nextSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex + 1;
      if (index > employees.length - 1) {
        index = 0;
      }
      return index;
    });
  };

  const preventDragging = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((oldIndex) => {
        let index = oldIndex + 1;
        if (index > employees.length - 1) {
          index = 0;
        }
        return index;
      });
    }, 6000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <CarouselWrapper>
      <Button side='left' leftSlide={prevSlide} preventDrag={preventDragging} />
      <div className='section'>
        <img
          src={blobFirst}
          alt='dark blob'
          className='firstBlob'
          onDragStart={preventDragging}
        />
        <img
          src={blobSecond}
          alt='red blob'
          className='secondBlob'
          onDragStart={preventDragging}
        />
        {employees.map((emp, empIndex) => {
          const { id, image, name, title, email } = emp;
          // more here
          let position = 'nextSlide';
          if (empIndex === index) {
            position = 'activeSlide';
          }
          if (
            empIndex === index - 1 ||
            (index === 0 && empIndex === employees.length - 1)
          ) {
            position = 'lastSlide';
          }
          return (
            <article
              key={id}
              className={position}
              onMouseDown={swipeInit}
              onMouseMove={swipeSlide}
              onMouseUp={swipeEnd}
              onPointerDown={swipeInit}
              onPointerMove={swipeSlide}
              onPointerUp={swipeEnd}
            >
              <img
                src={image}
                alt={name}
                className='empImg'
                onDragStart={preventDragging}
              />
              <h4>{name}</h4>
              <p className='title'>{title}</p>
              <p className='email'>{email}</p>
            </article>
          );
        })}
        <div className='dots'>
          {employees.map((_, dotIndex) => {
            return (
              <span
                key={dotIndex}
                className={index === dotIndex ? 'active' : null}
                onClick={() => setIndex(dotIndex)}
              ></span>
            );
          })}
        </div>
      </div>
        <Button
          side='right'
          rightSlide={nextSlide}
          preventDrag={preventDragging}
        />
    </CarouselWrapper>
  );
};

const CarouselWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  .firstBlob {
    position: absolute;
    left: 20%;
    @media (max-width: 970px) {
      height: 80%;
      width: 70%;
    }
    @media (max-width: 550px) {
      display: none;
    }
  }
  .secondBlob {
    position: absolute;
    left: 35%;
    height: 95%;
    @media (max-width: 970px) {
      height: 80%;
      left: 30%;
    }
    @media (max-width: 750px) {
      height: 70%;
      left: 20%;
    }
    @media (max-width: 550px) {
      display: none;
    }
  }
  article {
    position: absolute;
    top: 25%;
    left: 25%;
    height: 50%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: #fff;
    border: 1px solid #222;
    border-radius: 5px;
    opacity: 0;
    transition: 0.3s ease-in-out;
    touch-action: none;
    cursor: pointer;
  }
  article.activeSlide {
    opacity: 1;
    transform: translateX(0);
  }
  article.lastSlide {
    transform: translateX(100%);
  }
  article.nextSlide {
    transform: translateX(-100%);
  }
  .section {
    height: 600px;
    width: 80vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .empImg {
    margin-bottom: 15px;
    width: 150px;
    height: 150px;
    object-fit: cover;
    border: 4px solid whitesmoke;
    border-radius: 50%;
    -webkit-box-shadow: 2px 3px 6px 2px rgba(0, 0, 0, 0.82);
    box-shadow: 2px 3px 6px 2px rgba(0, 0, 0, 0.82);
  }
  .title {
    text-transform: capitalize;
    margin-bottom: 10px;
  }
  .email {
    @media (max-width: 550px) {
      font-size: 11px;
    }
  }
  .dots {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: absolute;
    bottom: 19%;
    background: #fff;
    border-radius: 5px;
    border: 1px solid #222;
    height: 30px;
    width: 200px;
    outline: none;
    span {
      height: 15px;
      width: 15px;
      background: #222;
      margin: 0 auto;
      border-radius: 50%;
      cursor: pointer;
    }
    .active {
      height: 15px;
      width: 15px;
      background: #e12228;
      margin: 0 auto;
      border-radius: 50%;
      cursor: pointer;
    }
    @media (max-width: 550px) {
      transform: scale(0.9);
    }
  }
`;

export default Carousel;
