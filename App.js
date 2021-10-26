import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,SafeAreaView, Text, View } from 'react-native';
import InputComponent from "./components/InputComponent";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { initStore } from "./store/configureStore";
import { Provider } from "react-redux";
import Constants from "expo-constants";
import ListComponent from './components/ListComponent';
export default function App() {
  return (
    <Provider store={initStore()}>
      <SafeAreaProvider>
      <SafeAreaView style={styles.flex}>
      <View style={{backgroundColor:'#F8F6F8',padding:20,paddingTop:20+ Constants.statusBarHeight, alignItems:'center', justifyContent:'center'}}>
        <Text style={{color:'#000', fontWeight:'700'}}>Header</Text>
        <InputComponent />
      </View>
      <ListComponent />
      </SafeAreaView>
      </SafeAreaProvider>
      {/* <View style={styles.container}>
        <InputComponent />
      </View> */}
    </Provider>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});
