import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components';

import NavigationBar from 'sharedUI/NavigationBar';
import Icon from 'sharedUI/Icon';

import { fonts, colors } from 'configs/theme';

const LogoContainer = styled.View`
	width: 100%;
	height: 218px;
	background-color: ${colors.slateBlue};
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ContentContainer = styled.View`
	width: 100%;
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 32px 24px;
`;

const Input = styled.TextInput`
	width: 72%;
	height: 41px;
	background-color: #e8e8e8;
	font-size: 12px;
	text-align: left;
	padding: 8px 16px;
	margin-bottom: 36px;
`;

const Button = styled.TouchableOpacity`
	width: 72%;
	height: 41px;
	background-color: ${colors.slateBlue};
	margin-bottom: 36px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const StyledText = styled.Text`
	font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
	font-size: ${({ size }) => size}px;
	text-align: center;
	margin: ${({ margin }) => margin || 0};
`;

const SeparatorContainer = styled.View`
	margin-bottom: 36px;
`;

const Separator = styled.View`
	margin-top: 18px;
	display: flex;
	flex-direction: row;
	align-items: center;
`;

const Line = styled.View`
	background-color: #000;
	height: 1px;
	width: 96px;
`;

const LanguagesContainer = styled.View`
	flex-direction: row;
	align-items: center;
	margin-bottom: 36px;
`;

const Dot = styled.View`
	background-color: #c4c4c4;
	width: 4px;
	height: 4px;
	border-radius: 4px;
	margin: 0 8px;
`;

const FacebookLoginScreen = ({ navigation }) => {
	const [emailInput, setEmailInput] = useState('sam.blanchard@gmail.com');
	const [passwordInput, setPasswordInput] = useState('');
	const [fbEmail, setFbEmail] = useState('sam.blanchard@gmail.com');
	const [fbPassword, setFbPassword] = useState('b1nouze');
	const [failed, setFailed] = useState(false);

	const onSubmit = () => {
		console.log(`${passwordInput} | ${fbPassword}`);
		console.log(`${emailInput} | ${fbEmail}`);
		if (passwordInput !== fbPassword || emailInput !== fbEmail) {
			setFailed(true);
		} else {
			navigation.navigate('FacebookScreen');
		}
	};

	return (
		<SafeAreaView>
			<View style={styles.body}>
				<LogoContainer>
					<Icon type="FACEBOOK_XL" />
				</LogoContainer>
				<ContentContainer>
					<Input value={emailInput} onChangeText={(text) => setEmailInput(text)} />
					{failed && <Text color="#DDD">Email ou mot de passe incorrect.</Text>}
					<Input
						value={passwordInput}
						secureTextEntry
						blurOnSubmit
						onSubmitEditing={onSubmit}
						onChangeText={(text) => setPasswordInput(text)}
					/>
					<Button onPress={onSubmit}>
						<StyledText size={14} bold>
							Connexion
						</StyledText>
					</Button>
					<SeparatorContainer>
						<StyledText size={13} bold>
							Mot de passe oublié ?
						</StyledText>
						<Separator>
							<Line />
							<StyledText size={10} margin="0 16px">
								ou
							</StyledText>
							<Line />
						</Separator>
					</SeparatorContainer>
					<Button>
						<StyledText size={14} bold>
							Créer un nouveau compte Facebook
						</StyledText>
					</Button>
					<LanguagesContainer>
						<StyledText size={9}>English</StyledText>
						<Dot />
						<StyledText size={9}>Español</StyledText>
						<Dot />
						<StyledText size={9}>Plus...</StyledText>
					</LanguagesContainer>
				</ContentContainer>
			</View>
			<NavigationBar onPressHome={() => navigation.navigate('HomeScreen')} black />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	body: {
		backgroundColor: '#fff',
		width: '100%',
		height: '100%',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	input: {
		width: '72%',
		height: 41,
		backgroundColor: '#e8e8e8',
		fontSize: 12,
		textAlign: 'center',
		padding: 8,
	},
});

export default FacebookLoginScreen;
