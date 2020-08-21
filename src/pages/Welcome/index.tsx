import React from 'react';

import { FiPlay } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import heroImg from '../../images/heroes.jpg';

import { Container, Content } from './styles';

const Welcome: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={heroImg} alt="heroes" />
        <h1>Welcome!</h1>
        <h2>Superheroes are cool, wright?</h2>
        <h2>
          But can you guess any hero or vilan in comics and movies by looking at
          one image? Lets find out.
        </h2>
        <div className="playButton">
          <Link to="/game">
            <FiPlay size={24} />
            Play
          </Link>
        </div>
      </Content>
    </Container>
  );
};

export default Welcome;
