import React from 'react';
import styled, { withTheme } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';
import { useSafeArea } from 'react-native-safe-area-context';
import { View, Keyboard } from 'react-native';

import BG_HOMESCREEN from 'assets/images/BG-HomeScreen.png';

import LayoutWrapper from 'sharedUI/LayoutWrapper';
import BackgroundImage from 'sharedUI/BackgroundImage';
import Clock from 'sharedUI/Clock';
import AppIcon from 'sharedUI/AppIcon/';

import getIconSize from 'utils/getIconSize';
import { APP_ICON, HOME_APPS } from 'configs';

const { ICONS_TRAY_WIDTH, ICONS_TRAY_MARGE } = APP_ICON;

const Icons = styled.View`
	position: absolute;
	bottom: ${({ notFullScreenDisplay }) => (notFullScreenDisplay ? 32 : 64)}px;
	width: ${ICONS_TRAY_WIDTH}%;
	padding: ${ICONS_TRAY_MARGE}px;
	border-radius: 50px;
	background-color: ${({ theme }) => theme.colors.ghostWhite};
	${({ theme }) => theme.styles.flexWithoutSize('space-around', null, 'row')}
`;

const HomeScreen = ({ route, navigation, theme }) => {
	const insets = useSafeArea();
	const dispatch = useDispatch();

	const mergedData = useSelector((state) => state.mergedData);

	const iconSize = getIconSize();

	const onPress = (screen) => navigation.navigate(screen);

	useFocusEffect(() => {
		Keyboard.dismiss();
	}, []);

	return (
		<LayoutWrapper screenName={route.name}>
			<BackgroundImage
				source={BG_HOMESCREEN}
				solid
				solidColor={theme.colors.ghostWhite}
				solidOpacity={0.24}
			/>

			<Clock />
			<Icons notFullScreenDisplay={!!insets.bottom}>
				{HOME_APPS.map((app, index) => (
					<AppIcon
						key={index}
						type={app.iconType}
						size={iconSize}
						notifs={
							typeof app.notifs === 'number' ? app.notifs : mergedData[app.notifs]
						}
						{...(app.screen
							? {
									onPress: () => {
										onPress(app.screen);
										app.onPress && app.onPress(dispatch);
									},
							  }
							: { noPressEffect: true })}
						withSpacing
					/>
				))}
			</Icons>
		</LayoutWrapper>
	);
};

export default withTheme(HomeScreen);
