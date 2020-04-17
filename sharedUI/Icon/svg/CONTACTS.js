import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

const CONTACTS = ({ width, height, color }) => (
	<Svg width={width} height={height} viewBox="0 0 25 25">
		<Path
			d="M12.5 0C5.6 0 0 5.6 0 12.5C0 19.4 5.6 25 12.5 25C19.4 25 25 19.4 25 12.5C25 5.6 19.4 0 12.5 0ZM12.5 3.75C14.575 3.75 16.25 5.425 16.25 7.5C16.25 9.575 14.575 11.25 12.5 11.25C10.425 11.25 8.75 9.575 8.75 7.5C8.75 5.425 10.425 3.75 12.5 3.75ZM12.5 21.5C9.375 21.5 6.6125 19.9 5 17.475C5.0375 14.9875 10 13.625 12.5 13.625C14.9875 13.625 19.9625 14.9875 20 17.475C18.3875 19.9 15.625 21.5 12.5 21.5Z"
			stroke="none"
			fill={color}
			fillRule="evenodd"
		/>
	</Svg>
);

CONTACTS.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
	color: PropTypes.string,
};

CONTACTS.defaultProps = {
	width: 25,
	height: 25,
	color: '#000',
};

export default CONTACTS;
