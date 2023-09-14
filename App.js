import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import react navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const App = () => {
  const firebaseConfig = {
    apiKey: 'AIzaSyDi-xncyFZuo_WUl0Y-KxW5x6lfN6Nlq7A',
    authDomain: 'shopping-list-demo-5dc5e.firebaseapp.com',
    projectId: 'shopping-list-demo-5dc5e',
    storageBucket: 'shopping-list-demo-5dc5e.appspot.com',
    messagingSenderId: '937853527001',
    appId: '1:937853527001:web:6671dd471ce18d7384afc8',
  };

  //initialize Firebase
  const app = initializeApp(firebaseConfig);

  //Initialize cloud firestore and get a reference to the sevice
  const db = getFirestore(app);

  return (
    <NavigationContainer>
      <Stack.Navigator></Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
