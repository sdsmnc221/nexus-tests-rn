import { find, last } from 'utils';

import { storyScripts } from 'states/data';
import { STORY_TYPES } from './configs';

const {
	BREAKPOINT,
	BREAKPOINT_TRIGGER,
	END,
	INPUT,
	MESSAGE_AFTER_BREAKPOINT,
	MESSAGE_AFTER_BREAKPOINT_NO_CHOICE,
	MESSAGE_WITH_PLACEHOLDER,
} = STORY_TYPES;

const containsPlaceholder = ({ type }) => type === MESSAGE_WITH_PLACEHOLDER;

const convertDelayTime = (minute) => 1000 * 60 * minute;

const doProceedToNextScript = ({ choices, nextID }) =>
	!choices || choices.length === 0 || nextID;

const findScript = (id) => find(storyScripts, 'ID', id);

const doTriggerNotification = ({ type }) =>
	[MESSAGE_AFTER_BREAKPOINT, MESSAGE_AFTER_BREAKPOINT_NO_CHOICE].includes(type);

const isBreakpoint = ({ type }) => type === BREAKPOINT;

const isEnding = ({ type }) => type === END;

const isInputAction = ({ action }) => action === INPUT;

const isNeedToTrigger = ({ type }) => type === BREAKPOINT_TRIGGER;

const isSafeToAddScript = ({ text, type }, dialogueLog) =>
	text !== last(dialogueLog).text &&
	(type !== INPUT && type !== BREAKPOINT && type !== BREAKPOINT_TRIGGER);

const isSafeToTrigger = ({ condition }, gameObject) => !!gameObject[condition];

const replaceWithUsername = (string, username, isUser = false) => {
	const USERNAME = ` ${username.toUpperCase()} `;
	if (isUser) {
		return string.slice(0, string.lastIndexOf('...')) + USERNAME;
	} else {
		return string.replace('[$]', USERNAME);
	}
};

export {
	containsPlaceholder,
	convertDelayTime,
	doProceedToNextScript,
	doTriggerNotification,
	findScript,
	isBreakpoint,
	isEnding,
	isInputAction,
	isNeedToTrigger,
	isSafeToAddScript,
	isSafeToTrigger,
	replaceWithUsername,
};
