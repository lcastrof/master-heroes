/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { animated, useSpring } from 'react-spring';

import { FiPlay } from 'react-icons/fi';
import gameSettings from '../../config/gameSettings';

import { Container, Content, Percentage } from './styles';

interface EndScreenParams {
  points: number;
}

const EndScreen: React.FC = () => {
  const location = useLocation<EndScreenParams>();

  const playerPoints = location.state.points;
  const totalPossiblePoints = gameSettings.total_heroes_cards * 20;

  const successPercentage = (playerPoints / totalPossiblePoints) * 100;

  const props = useSpring({
    number: successPercentage,
    from: { number: 0 },
    config: { duration: 1000 },
  });

  return (
    <Container>
      <Content>
        <h1>Success rate:</h1>
        <Percentage>
          <animated.span>
            {props.number.interpolate(number => Math.floor(number))}
          </animated.span>
          <span>%</span>
        </Percentage>

        <h1>Points:</h1>
        <span>{`${playerPoints} / ${totalPossiblePoints}`}</span>
        <Link to="/game">
          <FiPlay />
          Play Again
        </Link>
      </Content>
    </Container>
  );
};

export default EndScreen;
