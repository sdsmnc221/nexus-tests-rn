import React from 'react';
import { css } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { View } from 'react-native';

import LayoutWrapper from 'sharedUI/LayoutWrapper';
import AppIcon from 'sharedUI/AppIcon';
import FlexDiv from 'sharedUI/FlexDiv';

import { ALL_APPS } from 'configs';
import { chunk } from 'utils';
import getIconSize from 'utils/getIconSize';

const AllAppsScreen = ({ route, navigation }) => {
	const dispatch = useDispatch();

	const mergedData = useSelector((state) => state.mergedData);
	const { UNLOCK_EMAIL } = useSelector((state) => state.game);

	const iconSize = getIconSize();

	const onPress = (screen) => navigation.navigate(screen);

	const apps = chunk(ALL_APPS, 3);

	return (
		<LayoutWrapper screenName={route.name}>
			<View
				css={`
					position: absolute;
					top: 6%;
				`}>
				{apps.map((apps_, index) => (
					<FlexDiv
						key={index}
						fullWidth
						direction="row"
						justifyContent="space-evenly"
						additionalStyle={css`
							margin-top: 48px;
						`}>
						{apps_.map((a, i) => (
							<AppIcon
								key={i}
								label={a.label}
								type={a.iconType || 'LOCK'}
								size={iconSize}
								notifs={typeof a.notifs === 'number' ? a.notifs : mergedData[a.notifs]}
								{...(a.screen
									? {
											onPress: () => {
												onPress(UNLOCK_EMAIL && a.screenUnlock ? a.screenUnlock : a.screen);
												a.onPress && a.onPress(dispatch);
											},
									  }
									: { noPressEffect: true })}
							/>
						))}
					</FlexDiv>
				))}
			</View>
		</LayoutWrapper>
	);
};

export default AllAppsScreen;
