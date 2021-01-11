import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Modal, ActivityIndicator, TouchableWithoutFeedback, Text, View, Button, TouchableOpacity, Touchable, Alert, Image, ScrollView, TextInput } from 'react-native';

const createAlert = (setIsLoading) => {
  Alert.alert('Error!', 'Cant Load', [
    {
      text: 'OK',
      onPress: () => { setIsLoading(false) }
    }

  ]);
}

const Article = () => {
  return (
    <View style={{ height: 480, width: '100%', backgroundColor: 'beige', marginBottom: 30, padding: 20, flexDirection: 'column', justifyContent: 'center' }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Article Headling</Text>
      <Text style={{ fontSize: 18 }}>Text text texttext text texttexttext text text text textexttexttext text textext texttexttext text text text textvte xttextte xttexttext text text text texttext text text text textvte xtte texttexttext text text text textvte xttextte xttexttext text text text xtte xttexttext text text text t text textvte xttextte xttexttext text text text tvte xttextte xttexttext text text text texttext text text text textvte xttextte xttexttext text text text textvt exttexttexttexttext text text text textvtexttexttexttexttext text text text textvtexttexttexttexttext text text text textvtexttexttexttexttext text text text textvtexttexttexttexttext text text text textvtexttexttex ttexttext text text text textvtexttexttext texttext text text text textvtextt exttexttexttext text text text textvtextt exttexttexttext text text text textvv</Text>
    </View>
  );
}


export default function App() {
  const [isModalVisible, setModalIsVisible] = useState(false);
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  let inputValue;

  const image = require('./assets/adaptive-icon.png');
  const url = 'https://www.fodors.com/wp-content/uploads/2018/10/mini-horse.jpg';

  return (
    <View style={{ height: '100%', width: '100%' }}>
      <View style={{ backgroundColor: 'white', height: '5%' }} />
      <View style={{ backgroundColor: 'purple', height: '15%', flexDirection: 'row', alignItems: "center", justifyContent: 'space-between', padding: 20 }}>

        <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}>Hello{" "}
          <TouchableWithoutFeedback
            onPress={() => setModalIsVisible(true)}
            style={{ backgroundColor: 'orange' }}
          >
            <Text>{name === '' ? 'Guest' : name}</Text>
          </TouchableWithoutFeedback>
        </Text>
        <Image style={{ backgroundColor: 'white', height: 80, width: 80, resizeMode: 'cover', borderRadius: '100%' }} source={name == '' ? image : { uri: url }} />
      </View>

      <View style={{ height: '100%', width: '90%', alignSelf: 'center' }}>
        <View style={{ height: '7%', justifyContent: 'center' }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold' }}> Today's Highlights</Text>
        </View>

        <Modal visible={isModalVisible} transparent>
          <View
            style={{ ...styles.container, backgroundColor: 'rgba(1, 1, 1, 0.2)' }}
          >
            <View
              style={{
                justifyContent: 'space-around',

                flexDirection: 'column',
                backgroundColor: 'white',
                width: '60%',
                height: '15%'
              }}
            >
              <TouchableOpacity
                onPress={() => { setModalIsVisible(false) }}
                style={{}}>
                <Text style={{ paddingLeft: 10, fontSize: 20, fontWeight: 'bold' }}>x</Text>
              </TouchableOpacity>

              <Text style={{ paddingLeft: 10, fontSize: 18, fontWeight: 'bold' }}>Name:</Text>
              <TextInput
                style={{
                  height: 30,
                  marginHorizontal: 10,
                  backgroundColor: "#F2F2F2",
                }}
                placeholder="Enter name"
                onChangeText={(text) => inputValue = text}
              />
              <Button title="Submit" onPress={() => {
                setName(inputValue)
                setModalIsVisible(false)
              }} />
            </View>
          </View>
        </Modal>

        <ScrollView style={{ height: '13%' }}>
          <Article />
          <Article />
          <Article />
          <Article />

          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>

            <Button
              title={isLoading ? 'Loading' : 'Load More'}
              onPress={() => {
                setIsLoading(true)
                createAlert(setIsLoading)
              }}
            />
            <ActivityIndicator
              animating={isLoading}
              size="small"
              color="#0000ff"
            /></View>


        </ScrollView>



        <View style={{ height: '25%', width: '100%' }}></View>

      </View>



    </View>);

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});