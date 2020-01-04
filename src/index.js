import React from 'react';
import {StatusBar} from 'react-native';

import reactotronConfig from './config/ReactotronConfig';
import Routes from './routes';

const App = () => {
  console.tron.warn('iniciou!');
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <Routes />
    </>
  );
};

export default App;
