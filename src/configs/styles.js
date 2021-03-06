import { StyleSheet } from 'react-native';
import { css } from 'styled-components';

import { device } from 'utils';
import theme from './theme';
import { FLEX } from './constants';

const { colors } = theme;
const { JUSTIFY_CONTENT, ALIGN_ITEMS, FLEX_DIRECTION } = FLEX;

export default {
	safeAreaView: (gapForStatusBar, backgroundColor) => css`
		background-color: ${backgroundColor || 'transparent'};
		padding-top: ${gapForStatusBar ? 30 : 0}px;
		position: relative;
		width: ${device().width}px;
		flex: 1;
	`,
	body: (backgroundColor, justifyContent, alignItems) =>
		css`
			flex: 1;
			background-color: ${backgroundColor || colors.ghostWhite};
			width: 100%;
			height: 100%;
			justify-content: ${justifyContent || JUSTIFY_CONTENT};
			align-items: ${alignItems || ALIGN_ITEMS};
		`,
	flex: (justifyContent, alignItems, direction, fullWidth = false) => css`
		justify-content: ${justifyContent || JUSTIFY_CONTENT};
		align-items: ${alignItems || ALIGN_ITEMS};
		flex-direction: ${direction || FLEX_DIRECTION};
		width: ${fullWidth ? '100%' : 'auto'};
	`,
	flexWithoutSize: (justifyContent, alignItems, direction) =>
		css`
			justify-content: ${justifyContent || JUSTIFY_CONTENT};
			align-items: ${alignItems || ALIGN_ITEMS};
			flex-direction: ${direction || FLEX_DIRECTION};
		`,
	list: css`
		width: 100%;
	`,
	avatar: (borderColor, bodyColor) => css`
		border-radius: 100px;
		border: 1px solid ${borderColor || colors.white};
		background-color: ${bodyColor || colors.ghostWhite};
	`,
	janusVoice: css`
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
	`,
	fullScreen: css`
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
	`,
	styleSheet: StyleSheet.create({
		scrollBodyEmail: {
			width: '100%',
			padding: 22,
		},
		fullFlex: {
			flex: 1,
		},
		flip: {
			transform: [{ scaleX: -1 }, { scaleY: -1 }],
		},
		modal: {
			flex: 1,
			margin: 0,
			justifyContent: 'flex-start',
			alignItems: 'center',
		},
	}),
};
