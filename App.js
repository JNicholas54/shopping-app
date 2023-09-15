//import react navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  disableNetwork,
  enableNetwork,
} from 'firebase/firestore';

import ShoppingLists from './components/ShoppingLists';
import Welcome from './components/Welcome';

import { LogBox, Alert } from 'react-native';
import { useEffect } from 'react';
import { useNetInfo } from '@react-native-community/netinfo';

LogBox.ignoreLogs(['AsyncStorage has been extracted from']);

const App = () => {
  const connectionStatus = useNetInfo();

  useEffect(() => {
    if (connectionStatus.isConnected === false) {
      Alert.alert('Connection Lost!');
      disableNetwork(db);
    } else if (connectionStatus.isConnected === true) {
      enableNetwork(db);
    }
  }, [connectionStatus.isConnected]);

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
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen name='Welcome' component={Welcome} />
        <Stack.Screen name='ShoppingLists'>
          {(props) => (
            <ShoppingLists
              isConnected={connectionStatus.isConnected}
              db={db}
              {...props}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
