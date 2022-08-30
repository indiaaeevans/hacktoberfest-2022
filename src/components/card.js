import styled, { keyframes } from 'styled-components';
// import { useEffect } from 'react';

const StyledDiv = styled.div``;

const textAnimation = () => keyframes`
  25% {
    content: "10101010 01010101 10101010 01010101";
  }
  50% {
    content: "01010101 10101010 01010101 10101010";
  }
  75% {
    content: "10101010 01010101 10101010 01010101";
  }
  100% {
    content: "01010101 10101010 01010101 10101010";
  }
`;

const dividerAnimation = () => keyframes`
  25% {
    transform: scaleX(0.8);
  }
  50% {
    transform: scaleX(0.3);
  }
  75% {
    transform: scaleX(0.5);
  }
`;

const MainWrapper = styled(StyledDiv)`
  background: linear-gradient(
    180deg,
    ${(props) => props.theme[props.primary]} 0%,
    ${(props) => props.theme[props.secondary]} 100%
  );
  border: 4px solid ${(props) => props.theme[props.secondary]};
  border-radius: 24px;
  box-shadow: 0px 0px 12px ${(props) => props.theme[props.secondary]};
  height: 354px;
  min-width: 304px;
  padding: 36px 44px 44px 44px;
  position: relative;
  transition: 0.4s cubic-bezier(0.8, -1, 0.2, 1.5);

  &:hover {
    box-shadow: 0px 0px 25px ${(props) => props.theme[props.secondary]},
      0px 0px 8px 2px ${(props) => props.theme[props.secondary]};
    transform: translateY(-20px);

    .binary:after {
      animation: ${textAnimation} 1s linear infinite;
    }
  }

  &:after {
    background-image: url(../../images/sparkle.gif);
    border-radius: inherit;
    content: '';
    height: 100%;
    left: 0;
    mix-blend-mode: color-dodge;
    opacity: 0.5;
    pointer-events: none;
    position: absolute;
    top: 0;
    width: 100%;
  }

  .divider {
    background: #170f1e;
    height: 1px;
    margin: 12px 0;
    position: relative;
    width: 100%;

    &:after {
      animation: ${dividerAnimation} 4s ${(props) => props.delay} ease infinite;
      background: ${(props) => props.theme[props.secondary]};
      content: '';
      height: 1px;
      left: 0;
      position: absolute;
      top: 0;
      transform-origin: top left;
      width: 100%;
    }
  }

  h2 {
    bottom: 44px;
    color: #170f1e;
    font-family: 'Vanguard';
    font-size: 180px;
    line-height: 100%;
    position: absolute;
    text-shadow: ${(props) => props.theme.bodyShadow};
  }

  h3 {
    color: #170f1e;
    font-family: 'Elevon';
    text-shadow: ${(props) => props.theme.bodyShadow};
  }

  .binary {
    color: ${(props) => props.theme[props.secondary]};
    font-size: 12px;
    pointer-events: none;
    position: absolute;
    text-align: center;
    width: 100%;

    &.top {
      left: 0;
      top: 10px;
    }

    &.bottom {
      bottom: 10px;
      color: ${(props) => props.theme[props.primary]};
      left: 0;
      transform: rotate(180deg);
    }

    &.side {
      height: 100%;
      text-align: center;
      top: 0;
      width: max-content;
      writing-mode: vertical-rl;

      &.right {
        right: 10px;
      }

      &.left {
        left: 10px;
        transform: rotate(180deg);
      }
    }

    &:after {
      content: '01011001 01010010 01011010 01010010';
    }
  }
`;

const Card = (props) => {
  // useEffect(() => {
  //   const card = document.getElementById('card');

  //   card.onmousemove = (e) => {
  //     let rect = e.target.getBoundingClientRect();
  //     let x = e.clientX - rect.left; //x position within the element.
  //     if (x < e.target.clientWidth / 2) {
  //       // prettier-ignore
  //       x = ((e.target.clientWidth / 2) / x) * -1;
  //       console.log('minus');
  //     } else {
  //       // prettier-ignore
  //       x = x / (e.target.clientWidth / 2);
  //     }
  //     let y = e.clientY - rect.top; //y position within the element.
  //     card.style.transform = 'rotate(' + x + 'deg)';
  //     console.log(x);
  //   };

  //   card.onmouseleave = () => {
  //     card.style.transform = 'rotate(0deg)';
  //   };

  //   return () => {};
  // }, []);

  return (
    <MainWrapper
      id="card"
      delay={props.delay}
      primary={props.primary}
      secondary={props.secondary}
    >
      <p className="binary top" />
      <p className="binary side right" />
      <p className="binary bottom" />
      <p className="binary side left" />
      <h3>{props.title}</h3>
      <div className="divider" />
      <h3>*********</h3>
      <h2>{props.number}</h2>
    </MainWrapper>
  );
};

export default Card;
