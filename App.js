
import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


const App = () => {


  useEffect(() => {
     SplashScreen.hide();
  }, [])

  return (
    <SafeAreaView style={styles.background}>
        <Text>cool</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
      background :{
        backgroundColor: "white"
      }
});

export default App;
