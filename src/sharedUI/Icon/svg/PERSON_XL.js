import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

const PERSON_XL = ({ width, height, color }) => (
	<Svg width={width} height={height} viewBox="0 0 76 100">
		<Path
			d="M45.0053 51.9729C55.91 48.7622 63.8993 38.6771 63.8993 26.7473C63.8993 12.2412 52.0979 0.437988 37.5918 0.437988C23.0857 0.437988 11.2843 12.2412 11.2843 26.7473C11.2843 38.6404 19.2241 48.7035 30.0756 51.9472H29.0488C13.0318 51.9472 0 64.9772 0 80.9942V97.642C0 98.4268 0.636288 99.0612 1.42109 99.0612H73.7625C74.5473 99.0612 75.1818 98.4268 75.1818 97.642V82.6481C75.1818 65.8959 61.6897 52.2571 45.0053 51.9729ZM14.1228 26.7473C14.1228 13.8053 24.6517 3.27833 37.5918 3.27833C50.5337 3.27833 61.0608 13.8053 61.0608 26.7473C61.0608 39.6874 50.5337 50.2144 37.5918 50.2144C24.6517 50.2144 14.1228 39.6874 14.1228 26.7473ZM72.3433 96.2209H2.84034V80.9942C2.84034 66.5431 14.5977 54.7857 29.0488 54.7857H44.4808C59.8432 54.7857 72.3433 67.2839 72.3433 82.6481V96.2209Z"
			stroke="none"
			fill={color}
			fillRule="evenodd"
			clipRule="evenodd"
		/>
	</Svg>
);

PERSON_XL.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
	color: PropTypes.string,
};

PERSON_XL.defaultProps = {
	width: 76,
	height: 100,
	color: '#CE976A',
};

export default PERSON_XL;
