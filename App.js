import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { } from 'react-native';
import Routes from './src/routes';

import config from "./src/database/config";
import { createConnection } from "typeorm";

export default function App() {
  const connect = React.useCallback(async () => {
    try {
      const connection = await createConnection(config);
    } catch (err) {
      console.log(err);
    }
  });

  React.useEffect(() => {
    connect();
  }, []);


  return (
    <>
      <StatusBar/>
      <Routes/>
    </>
  );
}
