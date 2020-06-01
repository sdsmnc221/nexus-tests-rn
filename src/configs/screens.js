import { colors } from './theme';
import { additionalStyles } from './styles';

const SCREENS = {
	SPLASH: 'SplashScreen',
	WARNING: 'WarningScreen',
	INTRO: 'IntroScreen',
	NOTIFICATIONS: 'NotificationsScreen',
	LOCK: 'LockScreen',
	HOME: 'HomeScreen',
	ALL_APPS: 'AllAppsScreen',
	SMS: 'SmsScreen',
	SMS_CONVERSATION: 'SmsConversationScreen',
	SMS_JANUS: 'JanusConversationScreen',
	CONTACTS: 'ContactsScreen',
	CONTACTS_DETAILS: 'ContactDetailsScreen',
	ALBUM: 'AlbumScreen',
	ALBUM_PHOTO: 'AlbumPhotoScreen',
	FACEBOOK: 'FacebookScreen',
	FACEBOOK_LOGIN: 'FacebookLoginScreen',
	EMAIL: 'EmailScreen',
	EMAIL_LOGIN: 'EmailLoginScreen',
	EMAIL_DETAILS: 'EmailDetailsScreen',
	INTERNET: 'InternetScreen',
	END_MENU: 'EndMenuScreen',
	DATAVIZ: ' DatavizScreen',
	DATA_PROTECTION: 'DataProtectionScreen',
	ABOUT_US: 'AboutUsScreen',
};

const getBodyColor = (screen) => {
	const { black, charcoal, ghostWhite, slateBlue, white } = colors;
	let bodyColor = ghostWhite;

	switch (screen) {
		case SCREENS.SPLASH:
		case SCREENS.END_MENU:
		case SCREENS.DATAVIZ:
		case SCREENS.DATA_PROTECTION:
		case SCREENS.ABOUT_US:
			bodyColor = black;
			break;
		case SCREENS.WARNING:
			bodyColor = slateBlue;
			break;
		case SCREENS.INTRO:
			bodyColor = charcoal;
			break;
		case SCREENS.EMAIL:
		case SCREENS.EMAIL_LOGIN:
		case SCREENS.EMAIL_DETAILS:
			bodyColor = white;
			break;
		default:
			break;
	}

	return bodyColor;
};

const getBodyAddtionalStyle = (screen) => {
	let additionalStyle = null;

	switch (screen) {
		case SCREENS.DATAVIZ:
		case SCREENS.DATA_PROTECTION:
		case SCREENS.ABOUT_US:
			additionalStyle = additionalStyles.flexStart;
			break;
		default:
			break;
	}

	return additionalStyle;
};

const SCREENS_INFO = Object.entries(SCREENS).map((screen) => {
	const [constantName, displayName] = screen;
	const bodyColor = getBodyColor(displayName);
	const bodyAdditionalStyle = getBodyAddtionalStyle(displayName);

	return {
		constantName,
		displayName,
		bodyColor,
		bodyAdditionalStyle,
	};
});

export { SCREENS, SCREENS_INFO };