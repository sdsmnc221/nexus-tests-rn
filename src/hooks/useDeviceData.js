import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Contacts from 'react-native-contacts';
import SmsAndroid from 'react-native-get-sms-android';
import CameraRoll from '@react-native-community/cameraroll';
import RNCalendarEvents from 'react-native-calendar-events';
import Geolocation from 'react-native-geolocation-service';
import Geocoder from 'react-native-geocoding';
import CallLogs from 'react-native-call-log';
import AccountManager from 'react-native-account-manager';

import Data from 'data';

import {
	getDeviceContactsStart,
	getDeviceContactsFailure,
	getDeviceContactsSuccess,
	setDeviceContacts,
	getDeviceSmsStart,
	getDeviceSmsSuccess,
	getDeviceSmsFailure,
	setDeviceSms,
	getDeviceGalleryStart,
	getDeviceGallerySuccess,
	getDeviceGalleryFailure,
	setDeviceGallery,
	getDeviceCalendarStart,
	getDeviceCalendarSuccess,
	getDeviceCalendarFailure,
	setDeviceCalendar,
	getDeviceGpsStart,
	getDeviceGpsSuccess,
	getDeviceGpsFailure,
	setDeviceGps,
	getDeviceCallLogStart,
	getDeviceCallLogSuccess,
	getDeviceCallLogFailure,
	setDeviceCallLog,
	getDeviceAccountsStart,
	getDeviceAccountsSuccess,
	getDeviceAccountsFailure,
	setDeviceAccounts,
} from 'states/actions/deviceDataActions';

import { GOOGLE_MAPS_API_KEY, LOCALE, NUMBERS } from 'configs';
import {
	isArrEmpty,
	groupBy,
	randomDate,
	replaceRandom,
	sampleSize,
} from 'utils';

const useDeviceData = (defaultContacts = []) => {
	const [contacts, setContacts] = useState(defaultContacts);

	const { permissions } = useSelector((state) => state);

	const dispatch = useDispatch();

	useEffect(() => {
		if (permissions.requested) {
			// Retrieve Device Contacts
			getDeviceContactsStart(dispatch);
			Contacts.getAllWithoutPhotos((error, deviceContacts) => {
				if (error !== 'denied') {
					getDeviceContactsSuccess(dispatch);
					setDeviceContacts(dispatch, deviceContacts);
					setContacts((prevContacts) => [...prevContacts, ...deviceContacts]);
				} else {
					getDeviceContactsFailure(dispatch);
				}
			});

			// Retrieve Device SMS
			const formatSmsData = (sms) => {
				const address = Object.keys(groupBy(sms, 'address'));
				const title = /\d\d/.test(address[0])
					? address[0]
					: replaceRandom(address[0]);

				const content = sms.map((sms_) => {
					const isUser = address.length !== 1 && sms_.address === address[1];
					const withAvatar = !isUser;

					return {
						isUser,
						withAvatar,
						type: 'text',
						data: replaceRandom(sms_.body, 0.3),
					};
				});

				return { title, content };
			};

			getDeviceSmsStart(dispatch);
			SmsAndroid.list(
				JSON.stringify({
					box: '',
				}),
				(error) => {
					getDeviceSmsFailure(dispatch);
					console.log(error);
				},
				(count, smsList) => {
					const list = sampleSize(
						Object.values(groupBy(JSON.parse(smsList), 'thread_id')),
						NUMBERS.DEVICE_SMS
					)
						.map((sms) => sms.reverse())
						.map((sms) => {
							const data = formatSmsData(sms);

							return {
								title: data.title,
								content: [
									{
										title: null,
										data: data.content,
									},
								],
							};
						})
						.map((sms) => Data('SMS', sms));

					getDeviceSmsSuccess(dispatch);
					setDeviceSms(dispatch, { count, list });
				}
			);

			// Retrieve Photos from Camera Roll
			(async () => {
				try {
					getDeviceGalleryStart(dispatch);

					const albums = await CameraRoll.getAlbums();
					const count = albums
						.map((a) => a.count)
						.reduce((prev, current) => prev + current);
					const photosData = await CameraRoll.getPhotos({
						first: count,
						assetType: 'Photos',
					});
					const photos = photosData.edges.map(({ node }) =>
						Data('PHOTO', { isFakePhoto: false, source: node.image.uri })
					);

					getDeviceGallerySuccess(dispatch);
					setDeviceGallery(dispatch, { count, albums, photos });
				} catch (error) {
					getDeviceGalleryFailure(dispatch);
					console.log(error);
				}
			})();

			// Retrieve Calendar Events
			(async () => {
				try {
					getDeviceCalendarStart(dispatch);
					const authorizeStatus = await RNCalendarEvents.authorizeEventStore();

					if (authorizeStatus === 'authorized') {
						const calendars = await RNCalendarEvents.findCalendars();
						const events = await RNCalendarEvents.fetchAllEvents(
							new Date(1970, 0, 1, 0, 0, 0).toISOString(), // from the start of time
							new Date(2020, 11, 31, 24, 0, 0).toISOString() // to the end of this year 2020
						);

						getDeviceCalendarSuccess(dispatch);
						setDeviceCalendar(dispatch, { calendars, events });
					} else {
						getDeviceCalendarFailure(dispatch);
					}
				} catch (error) {
					getDeviceCalendarFailure(dispatch);
					console.log(error);
				}
			})();

			// Retrieve user's location / GPS
			getDeviceGpsStart(dispatch);
			Geolocation.getCurrentPosition(
				async (position) => {
					try {
						Geocoder.init(GOOGLE_MAPS_API_KEY, {
							language: LOCALE,
						});

						const { latitude: lat, longitude: long } = position.coords;
						const { results: addressesList } = await Geocoder.from([lat, long]);

						getDeviceGpsSuccess(dispatch);
						setDeviceGps(dispatch, {
							lat,
							long,
							address: isArrEmpty(addressesList)
								? null
								: addressesList[0].formatted_address,
						});
					} catch (error) {
						getDeviceGpsFailure(dispatch);
						console.log(error);
					}
				},
				(error) => {
					getDeviceGpsFailure(dispatch);
					console.log(error);
				},
				{ enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
			);

			// Retrieve Call Log
			(async () => {
				try {
					getDeviceCallLogStart(dispatch);

					const calls = await CallLogs.loadAll();

					getDeviceCallLogSuccess(dispatch);
					setDeviceCallLog(dispatch, calls);
				} catch (error) {
					getDeviceCallLogFailure(dispatch);
					console.log(error);
				}
			})();

			// Retrieve User's Google Accounts stored in device
			(async () => {
				try {
					getDeviceAccountsStart(dispatch);

					const accounts = await AccountManager.getAccountsByType('com.google');

					getDeviceAccountsSuccess(dispatch);
					setDeviceAccounts(dispatch, accounts.map((a) => a.name));
				} catch (error) {
					getDeviceAccountsFailure(dispatch);
					console.log(error);
				}
			})();
		}
	}, [permissions.requested, dispatch]);

	return contacts;
};

export default useDeviceData;
