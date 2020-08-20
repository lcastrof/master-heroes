import React from 'react';
import { useLocation } from 'react-router-dom';
import gameSettings from '../../config/gameSettings';

// import { Container } from './styles';

interface EndScreenParams {
  points: number;
}

const EndScreen: React.FC = () => {
  const location = useLocation<EndScreenParams>();

  const playerPoints = location.state.points;
  const totalPossiblePoints = gameSettings.total_heroes_cards * 20;

  return (
    <>
      <h1>
        {`${playerPoints} / ${totalPossiblePoints} = ${
          (playerPoints / totalPossiblePoints) * 100
        }%`}
      </h1>
    </>
  );
};

export default EndScreen;
