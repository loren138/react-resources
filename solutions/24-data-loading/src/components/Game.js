import { useSpring, animated, to } from 'react-spring';
import styled from 'styled-components';
import { useState } from 'react';
import Penguin from '../images/penguinLogo.jpg';

function Game() {
  const [ballPos, setBallPos] = useState('left');
  const [{ left, bottom }, api] = useSpring(() => ({
    config: { mass: 1, tension: 150, friction: 100 },
    bottom: 0,
    left: 0,
  }));

  const onClickLeft = () => {
    if (ballPos === 'left') {
      api.start({
        to: { bottom: 3.4, left: 380 },
        from: { bottom: 0, left: 0 },
      });
      setBallPos('right');
    }
  };

  const onClickRight = () => {
    if (ballPos === 'right') {
      api.start({
        from: { bottom: 3.14, left: 380 },
        to: { bottom: -0.2, left: 0 },
      });
      setBallPos('left');
    }
  };

  return (
    <div>
      <Title>
        Click the penguin with the ball to kick it to the other penguin
      </Title>
      <Flexbox>
        <ImgButton onClick={onClickLeft} disabled={ballPos !== 'left'}>
          <StyledLeftImage src={Penguin} alt="Left Penguin" />
        </ImgButton>
        <BallWrapper>
          <animated.div style={{
            bottom: to(
              [bottom],
              (b) => (b > 3.14 || b < 0 ? 2 : Math.sin(b) * 200),
            ),
            left,
            width: '20px',
            height: '20px',
            backgroundColor: 'black',
            borderRadius: '10px',
            position: 'absolute',
          }}
          />
        </BallWrapper>
        <ImgButton onClick={onClickRight} disabled={ballPos !== 'right'}>
          <StyledRightImage src={Penguin} alt="Right Penguin" />
        </ImgButton>
      </Flexbox>
    </div>
  );
}

const Title = styled.h1`
    text-align: center;
`;

const ImgButton = styled.button`
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  &:disabled {
    cursor: default;
  }
`;

const Flexbox = styled.div`
  margin: 10px auto;
  width: 945px;
  display: flex;
`;

const StyledLeftImage = styled.img`
  margin-right: 5px;
  width: 267px;
  flex: 0 0 auto;
`;

const BallWrapper = styled.div`
  width: 400px;
  flex: 0 0 auto;
  position: relative;
`;

const StyledRightImage = styled.img`
  margin-left: 5px;
  width: 267px;
  transform: scaleX(-1);
  flex: 0 0 auto;
`;

export default Game;
