import React, { useState, useEffect, useCallback } from 'react';

import { useHistory } from 'react-router-dom';
import settings from '../../config/gameSettings';

import api from '../../services/api';

import { Container } from './styles';
import ShowHero from '../../components/ShowHero';
import Header from '../../components/Header';

interface Hero {
  id: number;
  name: string;
  images: {
    md: string;
  };
}

const Game: React.FC = () => {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [selectedHero, setSelectedHero] = useState({
    id: 0,
    name: '',
    images: {
      md: '',
    },
  } as Hero);
  const [randomHeroes, setRandomHeroes] = useState<Array<string>>([]);

  const [names, setNames] = useState<Array<string>>([]);
  const [counter, setCounter] = useState(1);

  const [points, setPoints] = useState(0);

  const history = useHistory();

  useEffect(() => {
    async function loadHeroes(): Promise<void> {
      const { data } = await api.get('/all.json');

      data.sort(() => 0.5 - Math.random());

      const selected = data.splice(0, settings.total_heroes_cards);

      const otherHeroes = data.splice(0, 2 * settings.total_heroes_cards);

      const randomHeroesNames = otherHeroes.map((he: Hero) => he.name);

      const namesToAdd = randomHeroesNames.splice(0, 2);

      setSelectedHero(selected[0]);

      setHeroes([...selected]);

      setRandomHeroes([...randomHeroesNames]);

      setNames([...namesToAdd]);
    }

    loadHeroes();
  }, []);

  const handleClick = useCallback(
    (clickedName: string) => {
      if (counter === settings.total_heroes_cards) {
        setCounter(0);
        history.push('/gameover', { points });
      }

      if (clickedName === selectedHero.name) {
        setPoints(previousPoints => previousPoints + 20);
      }

      setSelectedHero(heroes[counter]);

      setCounter(prevValue => prevValue + 1);

      const newNames = randomHeroes.splice(0, 2);
      setNames([...newNames]);
    },
    [counter, heroes, history, points, randomHeroes, selectedHero.name],
  );

  return (
    <Container>
      <Header />
      <ShowHero
        names={[selectedHero.name, ...names]}
        correctName={selectedHero.name}
        image={selectedHero.images.md}
        handleClick={handleClick}
      />
    </Container>
  );
};

export default Game;
