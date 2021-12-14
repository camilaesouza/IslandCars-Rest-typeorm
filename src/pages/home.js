import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';
import { connectActionSheet } from '@expo/react-native-action-sheet';

import Header from '../components/Header';
import api from '../services/api';

import ListOfCars from '../components/ListOfCars';

export const HomeContext = React.createContext(null);

function Home(props) {
  const [cars, setCars ] = React.useState([]);

  const { navigation } = props;

  React.useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      fetchData();
    });
    return unsubscribe;
  }, [navigation]);

  const fetchData = async () => {
    try {
      const result = await api.get("/cars");
      setCars(result.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <ActionSheetProvider>
      <HomeContext.Provider value={fetchData}>
        <SafeAreaView style={styles.container}>
          <Header home={props}/>

          <ListOfCars cars={cars} home={props}></ListOfCars>  

        </SafeAreaView> 
      </HomeContext.Provider>
    </ActionSheetProvider>
  );
}

const ConnectedApp = connectActionSheet(Home)

export default ConnectedApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});