import React from 'react';
import { SafeAreaView, StyleSheet, Text, Linking, View, Image, SectionList } from 'react-native';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';

import ButtonShow from "./ButtonShow";
import ButtonEdit from "./ButtonEdit";
import ButtonDelete from "./ButtonDelete";

const Separator = () => (
    <View style={styles.separator} />
  );

const Item = ({item, props}) =>(
    <View style={styles.item}>
      <Text style={styles.label}>Modelo:</Text>
      <Text style={styles.itemText}>{item.model}</Text>

      <View style={styles.buttonView}>
        <ButtonShow style={styles.buttonShow} carId={item.id} props={props}/>
        <Separator />
        <ButtonEdit style={styles.buttonItem} carId={item.id} props={props}/>
        <Separator />
        <ButtonDelete style={styles.buttonItem} carId={item.id} props={props}/>
      </View>
    </View>
  )

function helper(dataToFormat) {
    const dataFormatted = dataToFormat.reduce((accum, current)=> {
      let dateGroup = accum.find(x => x.brand === current.brand);
      if(!dateGroup) {
        dateGroup = { brand: current.brand, data: [] }
        accum.push(dateGroup);
      }
      dateGroup.data.push(current);
      return accum;
    }, []);
  
    return dataFormatted;
  }

export default function ListOfCars(props) {

  const dataCars = helper(props.cars);

  return (
    <ActionSheetProvider>
        <SafeAreaView style={styles.container}>
        
        <SectionList
            sections={dataCars}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => <Item props={props.home} item={item} />}
            renderSectionHeader={({ section: { brand } }) => (
              <Text style={styles.header}>{brand}</Text>
            )}
          />
        
        </SafeAreaView>
    </ActionSheetProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  item: {
    margin: 7,
    padding: 15,
    backgroundColor : "#0000",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },

  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'green',
  },

  separator: {
    marginVertical: 5,
  },

  itemText: {
    fontSize: 15,
    marginBottom: 8
  },

  buttonView: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },

  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  }
});