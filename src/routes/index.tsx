import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Game from '../pages/Game';
import EndScreen from '../pages/EndScreen';
import Welcome from '../pages/Welcome';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Welcome} />
      <Route path="/game" exact component={Game} />
      <Route path="/gameover" component={EndScreen} />
    </Switch>
  );
};

export default Routes;
