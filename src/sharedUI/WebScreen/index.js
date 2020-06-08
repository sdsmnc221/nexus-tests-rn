import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled, { css, withTheme } from 'styled-components';
import { View, Linking } from 'react-native';
import { WebView } from 'react-native-webview';

import FillGap from 'sharedUI/FillGap';

const Wrapper = styled.View`
	width: 100%;
	min-height: 100%;
	background-color: ${({ bodyColor, theme }) =>
		bodyColor || theme.colors.ghostWhite};
`;

const WebScreen = ({ url, bodyColor, fillGapHeight, theme }) => {
	const webviewRef = useRef(null);

	const handleNavigationStateChange = (event) => {
		if (event.url !== url && webviewRef.current) {
			Linking.openURL(event.url);
			webviewRef.current.stopLoading();
			webviewRef.current.goBack();
		}
	};

	const handlerContentProcessDidTerminate = (syntheticEvent) => {
		const { nativeEvent } = syntheticEvent;
		console.warn('Content process terminated, reloading', nativeEvent);
		webviewRef.current && webviewRef.current.reload();
	};

	return (
		<Wrapper bodyColor={bodyColor}>
			<WebView
				css={`
					${css`
						width: 100%;
						min-height: 100%;
						background-color: ${bodyColor || theme.colors.ghostWhite};
						margin-bottom: 30%;
					`}
				`}
				ref={webviewRef}
				source={{ uri: url }}
				onNavigationStateChange={handleNavigationStateChange}
				onContentProcessDidTerminate={handlerContentProcessDidTerminate}
			/>
			{fillGapHeight && <FillGap height={fillGapHeight} />}
		</Wrapper>
	);
};

WebScreen.propTypes = {
	url: PropTypes.string.isRequired,
	bodyColor: PropTypes.string,
	fillGapHeight: PropTypes.number,
};

WebScreen.defaultProps = {
	bodyColor: null,
	fillGapHeight: null,
};

export default withTheme(WebScreen);
