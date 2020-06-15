import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import { View, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import FlatButton from 'sharedUI/Button/FlatButton';

const Wrapper = styled.View`
	height: ${({ fullBody }) => (fullBody ? '100%' : 'auto')};
	${({ theme }) => theme.styles.flex(null, null, null, true)}
	background-color: ${({ color }) => color || 'transparent'};
`;

const Title = styled.Text`
	margin-bottom: 20px;
	color: ${({ color, theme }) => color || theme.colors.whiskey};
	${({ theme }) => theme.styles.os.h2}
`;

const Input = styled.TextInput`
	width: 64%;
	height: 60px;
	padding: 14px 26px;
	border-radius: 50px;
	border: ${({ inputBorder }) => (inputBorder ? 2 : 1)}px solid
		${({
			theme,
			inputBorder,
			isFocused,
			passwordValid,
			passwordSubmitted,
			value,
		}) =>
			passwordValid
				? theme.colors.lime
				: (isFocused && !passwordSubmitted) || !value
				? inputBorder
					? theme.colors.white
					: 'transparent'
				: theme.colors.cinnabar};
	background-color: ${({ theme }) => theme.colors.ghostWhite};
	color: ${({ theme }) => theme.colors.dimGray};
	${({ theme }) => theme.styles.os.input}
`;

const Hint = styled.Text`
	width: 60%;
	margin-top: 20px;
	margin-bottom: 24px;
	font-family: ${({ theme }) => theme.fonts.sourceSans.light};
	font-size: 12px;
	line-height: 14px;
	letter-spacing: 0.15px;
	text-align: center;
	color: ${({ color, theme }) => color || theme.colors.charcoal};
`;

const PasswordLock = ({
	theme,
	submitButton,
	fullBody,
	bodyColor,
	titleColor,
	hintEnabled,
	hint,
	hintColor,
	inputBorder,
	passwordInput,
	passwordValid,
	passwordSubmitted,
	onInputPassword,
	onSubmitPassword,
}) => {
	const { whiskey, white } = theme.colors;

	const [buttonPressed, setButtonPressed] = useState(false);
	const [inputFocused, setInputFocused] = useState(false);

	const onPress = () => onSubmitPassword();

	// useEffect(() => {
	// 	if (buttonPressed) {
	// 		console.log('pressed')
	// 		setTimeout(() => onSubmitPassword(), 60);
	// 	}
	// }, [buttonPressed, onSubmitPassword]);

	return (
		<Wrapper color={bodyColor} fullBody={fullBody}>
			<Title color={titleColor}>Mot de passe</Title>
			<Input
				inputBorder={inputBorder}
				secureTextEntry
				blurOnSubmit
				onChangeText={onInputPassword}
				onSubmitEditing={onSubmitPassword}
				onFocus={() => setInputFocused(true)}
				onBlur={() => setInputFocused(false)}
				value={passwordInput}
				style={theme.shadows.default}
				isFocused={inputFocused}
				passwordValid={passwordValid}
				passwordSubmitted={passwordSubmitted}
			/>
			{hintEnabled && <Hint color={hintColor}>{hint}</Hint>}
			{submitButton && (
				<FlatButton
					text="ok"
					borderColor={whiskey}
					inactiveButtonColor={white}
					inactiveTextColor={whiskey}
					activeButtonColor={whiskey}
					activeTextColor={white}
					pressHandler={onPress}
				/>
			)}
		</Wrapper>
	);
};

PasswordLock.propTypes = {
	submitButton: PropTypes.bool,
	fullBody: PropTypes.bool,
	bodyColor: PropTypes.string,
	titleColor: PropTypes.string,
	hintEnabled: PropTypes.bool,
	hint: PropTypes.string,
	hintColor: PropTypes.string,
	inputBorder: PropTypes.bool,
	passwordInput: PropTypes.string,
	passwordValid: PropTypes.bool.isRequired,
	onInputPassword: PropTypes.func,
	onSubmitPassword: PropTypes.func,
};

PasswordLock.defaultProps = {
	submitButton: false,
	fullBody: true,
	bodyColor: undefined,
	titleColor: undefined,
	hintEnabled: false,
	hint: undefined,
	hintColor: undefined,
	inputBorder: false,
	passwordInput: '',
	onInputPassword: () => {},
	onSubmitPassword: () => {},
};

export default withTheme(PasswordLock);
