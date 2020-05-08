import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Contacts from 'react-native-contacts';
import { useSelector } from 'react-redux';

import { sortContact } from 'utils';

import NavigationBar from 'sharedUI/NavigationBar';
import AddButton from 'sharedUI/Button/AddButton';
import Contact from './components/Contact';

const ContactsScreen = ({ navigation }) => {
	const [contacts, setContacts] = useState(
		useSelector((state) => state.contacts).map((contact) => ({
			name: contact.name,
			number: contact.phoneNumber,
		}))
	);
	useEffect(() => {
		Contacts.getAllWithoutPhotos((err, contacts_) => {
			if (err === 'denied') {
				// error
			} else {
				let deviceContacts =
					contacts_.filter((contact) => contact.phoneNumbers.length > 0) || [];

				if (deviceContacts.length > 0) {
					deviceContacts = deviceContacts.map((contact) => {
						const { displayName, phoneNumbers } = contact;
						const { number } = phoneNumbers[0];

						return {
							name: displayName !== number ? displayName : null,
							number: number.replace('+33 ', '0'),
						};
					});
				}

				setContacts((prevContacts) => {
					const sortedContacts = [...prevContacts, ...deviceContacts].sort(
						sortContact
					);

					return sortedContacts;
				});
			}
		});
	}, []);

	return (
		<SafeAreaView>
			<View style={styles.body}>
				<ScrollView contentContainerStyle={styles.scrollBody}>
					{contacts.map((c, i) => (
						<Contact
							key={i}
							contact={c}
							firstLetter={c.name ? c.name.charAt(0) : '#'}
							onPress={() =>
								navigation.navigate('ContactDetails', {
									title: '',
									headerStyle: {
										elevation: 0,
									},
									contact: c,
									firstLetter: c.name ? c.name.charAt(0) : '#',
								})
							}
						/>
					))}
				</ScrollView>
				<AddButton />
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
		justifyContent: 'center',
		alignItems: 'center',
	},
	scrollBody: {
		backgroundColor: '#fff',
		width: '100%',
		paddingTop: 36,
		paddingBottom: 84,
	},
});

export default ContactsScreen;
