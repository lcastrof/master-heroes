import React, { useEffect, useState } from 'react';

import { Container } from './styles';

interface Props {
  names: string[];
  correctName: string;
  image: string;
  handleClick(name: string): void;
}

const ShowHero: React.FC<Props> = ({
  names,
  correctName,
  image,
  handleClick,
}) => {
  const [shuffledNames, setShuffledNames] = useState<Array<string>>([]);
  const [correct, setCorrect] = useState('');

  useEffect(() => {
    setTimeout(() => {
      names.sort(() => 0.5 - Math.random());

      setShuffledNames([...names]);
      setCorrect(correctName);
    }, 500);
  }, [correctName, names]);

  return (
    <Container>
      {image && <img src={image} alt="hero" />}
      {shuffledNames.map(name => {
        return (
          <button
            type="button"
            className={name === correct ? 'isRight' : 'isWrong'}
            onClick={() => handleClick(name)}
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
