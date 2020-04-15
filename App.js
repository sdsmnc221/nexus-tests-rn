import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { BackHandler } from 'react-native';

import moment from 'moment';
import 'moment/locale/fr';

import SplashScreen from './screens/SplashScreen';
import WarningScreen from './screens/Warning';
import NotificationsScreen from './screens/LockScreen/Notifications';
import LockScreen from './screens/LockScreen';
import HomeScreen from './screens/Home';
import SmsScreen from './screens/SMS';
import SmsConversation from './screens/SMS/SmsConversation';
import ContactsScreen from './screens/ContactsScreen';

import FullScreen from "./utils/FullScreen";

const App = () => {
  moment.locale('fr');
  
  const Stack = createStackNavigator();
  
  const onBackButtonPressed = () => {
    return true;
  }
  //Disable Back native button
  BackHandler.addEventListener('backPress', onBackButtonPressed);

  FullScreen.enable();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='SplashScreen' component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name='WarningScreen' component={WarningScreen} options={{ headerShown: false }} />
        <Stack.Screen name='NotificationsScreen' component={NotificationsScreen} options={{ headerShown: false }} />
        <Stack.Screen name='LockScreen' component={LockScreen} options={{ headerShown: false }} />
        <Stack.Screen name='HomeScreen' component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name='SmsScreen' component={SmsScreen} options={{ title: 'Messagerie', headerLeft: null }} />
        <Stack.Screen name='SmsConversation' component={SmsConversation} />
        <Stack.Screen name='ContactsScreen' component={ContactsScreen} options={{ title: 'Contacts', headerLeft: null }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
