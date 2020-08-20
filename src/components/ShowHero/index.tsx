import React, { useEffect, useState } from 'react';

import { Container } from './styles';

interface Props {
  names: string[];
  correctName: string;
  image: string;
  handleClick(): void;
}

const ShowHero: React.FC<Props> = ({
  names,
  correctName,
  image,
  handleClick,
}) => {
  const [shuffledNames, setShuffledNames] = useState<Array<string>>([]);

  useEffect(() => {
    names.sort(() => 0.5 - Math.random());
    setShuffledNames([...names]);
  }, [names]);

  return (
    <Container>
      <img src={image} alt="hero" />
      {shuffledNames.map(name => {
        return (
          <button
            type="button"
            className={name === correctName ? 'isWright' : 'isWrong'}
            onClick={() => handleClick()}
            key={name}
          >
            {name}
          </button>
        );
      })}
    </Container>
  );
};
export default ShowHero;
