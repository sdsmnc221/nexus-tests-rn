import React, { useRef } from 'react';
import { BackHandler } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
	SafeAreaProvider,
	initialWindowSafeAreaInsets,
} from 'react-native-safe-area-context';

import moment from 'moment';
import 'moment/locale/fr';

import FullScreen from 'utils/FullScreen';
import { LOCALE } from 'configs';
import { SCREENS } from 'configs/constants';
import { DEFAULT_HEADER_OPTIONS as headerOptions } from 'sharedUI/Header/configs';

import StoreProvider from 'states/StoreProvider';
import ThemeProvider from 'configs/ThemeProvider';

import SplashScreen from 'screens/Splash';
import WarningScreen from 'screens/Warning';
import IntroScreen from 'screens/Intro';
import NotificationsScreen from 'screens/Lock/Notifications';
import LockScreen from 'screens/Lock';
import HomeScreen from 'screens/Home';
import AllAppsScreen from 'screens/AllApps';
import SmsScreen from 'screens/SMS';
import SmsConversationScreen from 'screens/SMS/SmsConversation';
import JanusConversationScreen from './screens/SMS/JanusConversation';
import ContactsScreen from 'screens/Contacts';
import ContactDetailsScreen from 'screens/Contacts/ContactDetails';
import AlbumScreen from 'screens/Album';
import AlbumPhotoScreen from 'screens/Album/AlbumPhoto';
import FacebookScreen from 'screens/Facebook';
import FacebookLoginScreen from 'screens/Facebook/FacebookLogin';
import EmailScreen from 'screens/Email';
import EmailDetailsScreen from 'screens/Email/EmailDetails';
import EmailLoginScreen from 'screens/Email/EmailLogin';
import InternetScreen from 'screens/Internet';

// Example screens
import TypoScreen from 'screens/Examples/Typo';

import Notification from './sharedUI/Notification';

const Stack = createStackNavigator();

const App = () => {
	// Set date time locale to FR
	moment.locale(LOCALE);

	// Disable Back native button
	// useEffect, useCallback, useFocusEffect ==> enfin regarder la doc
	const onBackButtonPressed = () => {
		return true;
	};
	BackHandler.addEventListener('hardwareBackPress', onBackButtonPressed);

	// Enable Fullscreen mode
	FullScreen.enable();

	const navContainerRef = useRef(null);

	return (
		<StoreProvider>
			<ThemeProvider>
				<SafeAreaProvider initialSafeAreaInsets={initialWindowSafeAreaInsets}>
					<NavigationContainer ref={navContainerRef}>
						<Stack.Navigator>
							<Stack.Screen
								name={SCREENS.SPLASH}
								component={SplashScreen}
								options={headerOptions}
							/>
							<Stack.Screen
								name={SCREENS.WARNING}
								component={WarningScreen}
								options={headerOptions}
							/>
							<Stack.Screen
								name={SCREENS.INTRO}
								component={IntroScreen}
								options={headerOptions}
							/>
							<Stack.Screen
								name={SCREENS.NOTIFICATIONS}
								component={NotificationsScreen}
								options={headerOptions}
							/>
							<Stack.Screen
								name={SCREENS.LOCK}
								component={LockScreen}
								options={headerOptions}
							/>
							<Stack.Screen
								name={SCREENS.HOME}
								component={HomeScreen}
								options={headerOptions}
							/>
							<Stack.Screen
								name={SCREENS.ALL_APPS}
								component={AllAppsScreen}
								options={headerOptions}
							/>
							<Stack.Screen
								name={SCREENS.SMS}
								component={SmsScreen}
								options={headerOptions}
							/>
							<Stack.Screen
								name={SCREENS.SMS_CONVERSATION}
								component={SmsConversationScreen}
								options={headerOptions}
							/>
							<Stack.Screen
								name={SCREENS.SMS_JANUS}
								component={JanusConversationScreen}
								options={headerOptions}
							/>
							<Stack.Screen
								name={SCREENS.CONTACTS}
								component={ContactsScreen}
								options={headerOptions}
							/>
							<Stack.Screen
								name={SCREENS.CONTACTS_DETAILS}
								component={ContactDetailsScreen}
								options={headerOptions}
							/>
							<Stack.Screen
								name={SCREENS.ALBUM}
								component={AlbumScreen}
								options={headerOptions}
							/>
							<Stack.Screen
								name={SCREENS.ALBUM_PHOTO}
								component={AlbumPhotoScreen}
								options={headerOptions}
							/>
							<Stack.Screen
								name={SCREENS.FACEBOOK}
								component={FacebookScreen}
								options={headerOptions}
							/>
							<Stack.Screen
								name={SCREENS.FACEBOOK_LOGIN}
								component={FacebookLoginScreen}
								options={headerOptions}
							/>
							<Stack.Screen
								name={SCREENS.EMAIL}
								component={EmailScreen}
								options={headerOptions}
							/>
							<Stack.Screen
								name={SCREENS.EMAIL_LOGIN}
								component={EmailLoginScreen}
								options={headerOptions}
							/>
							<Stack.Screen
								name={SCREENS.EMAIL_DETAILS}
								component={EmailDetailsScreen}
								options={headerOptions}
							/>
							<Stack.Screen
								name={SCREENS.INTERNET}
								component={InternetScreen}
								options={headerOptions}
							/>

							{/* Example Screens */}
							<Stack.Screen
								name="TypoScreen"
								component={TypoScreen}
								options={headerOptions}
							/>
						</Stack.Navigator>
						{/* <Notification
						onPress={() => navContainerRef.current?.navigate('JanusConversation')}
					/> */}
					</NavigationContainer>
				</SafeAreaProvider>
			</ThemeProvider>
		</StoreProvider>
	);
};

export default App;
