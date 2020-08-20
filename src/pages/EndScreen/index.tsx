import React from 'react';
import { useLocation } from 'react-router-dom';

// import { Container } from './styles';

interface EndScreenParams {
  points: number;
}

const EndScreen: React.FC = () => {
  const location = useLocation<EndScreenParams>();

  return (
    <>
      <h1>{location.state.points}</h1>
    </>
  );
};

export default EndScreen;
