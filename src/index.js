import React from 'react';
import {Text} from 'react-native';

import reactotronConfig from './config/ReactotronConfig';
import Routes from './routes';

const App = () => {
  console.tron.warn('iniciou!');
  return <Routes />;
};

export default App;
