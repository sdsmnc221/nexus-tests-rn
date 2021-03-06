import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'styled-components';
import { Image } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import HEART_IMG from 'assets/icons/HEART.png';

const HEART = ({ width, height, color, useImg }) =>
	useImg ? (
		<Image
			css={`
				${css`
					width: ${width}px;
					height: ${height}px;
				`}
			`}
			source={HEART_IMG}
			resizeMode="contain"
		/>
	) : (
		<Svg width={width} height={height} viewBox="0 0 19 16">
			<Path
				d="M16.252 1.14297C11.7844 -1.13022 9.52196 3.6286 9.52196 3.6286C9.52196 3.6286 7.25951 -1.13022 2.79198 1.14297C-0.787885 2.96405 0.769275 10.7928 9.52196 14.9995C18.2747 10.4047 19.8318 2.96405 16.252 1.14297Z"
				stroke="white"
				fill={color}
				fillRule="evenodd"
			/>
		</Svg>
	);

HEART.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
	color: PropTypes.string,
	useImg: PropTypes.bool,
};

HEART.defaultProps = {
	width: 19,
	height: 16,
	color: '#F4F3FF',
	useImg: false,
};

export default HEART;
