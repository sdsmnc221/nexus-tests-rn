import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

const NOTES_PRESSED = ({ width, height, color }) => (
	<Svg width={width} height={height} viewBox="0 0 22 26">
		<Path
			d="M20.7871 -0.000703173H0.701675C0.607843 -0.00609171 0.513768 0.00598393 0.425748 0.0347152C0.337728 0.0634465 0.257795 0.10817 0.191301 0.165892C0.124807 0.223614 0.0732864 0.293002 0.0401887 0.36941C0.00709097 0.445818 -0.00681985 0.527482 -0.000612395 0.608935V24.6897C-0.00681985 24.7711 0.00709097 24.8528 0.0401887 24.9292C0.0732864 25.0056 0.124807 25.075 0.191301 25.1327C0.257795 25.1904 0.337728 25.2351 0.425748 25.2639C0.513768 25.2926 0.607843 25.3047 0.701675 25.2993H20.7871C20.8809 25.3047 20.975 25.2926 21.063 25.2639C21.151 25.2351 21.231 25.1904 21.2975 25.1327C21.364 25.075 21.4155 25.0056 21.4486 24.9292C21.4817 24.8528 21.4956 24.7711 21.4894 24.6897V0.608935C21.4956 0.527482 21.4817 0.445818 21.4486 0.36941C21.4155 0.293002 21.364 0.223614 21.2975 0.165892C21.231 0.10817 21.151 0.0634465 21.063 0.0347152C20.975 0.00598393 20.8809 -0.00609171 20.7871 -0.000703173ZM3.86197 22.0072C3.73696 22.0072 3.61476 21.9751 3.51082 21.9148C3.40687 21.8545 3.32586 21.7688 3.27802 21.6685C3.23018 21.5683 3.21767 21.458 3.24205 21.3515C3.26644 21.2451 3.32664 21.1473 3.41504 21.0706C3.50343 20.9939 3.61605 20.9416 3.73866 20.9204C3.86127 20.8993 3.98835 20.9101 4.10385 20.9517C4.21934 20.9932 4.31805 21.0635 4.38751 21.1537C4.45696 21.244 4.49403 21.3501 4.49403 21.4586C4.49403 21.6041 4.42744 21.7436 4.3089 21.8465C4.19037 21.9494 4.0296 22.0072 3.86197 22.0072ZM3.86197 18.5323C3.73696 18.5323 3.61476 18.5001 3.51082 18.4398C3.40687 18.3795 3.32586 18.2939 3.27802 18.1936C3.23018 18.0933 3.21767 17.983 3.24205 17.8766C3.26644 17.7702 3.32664 17.6724 3.41504 17.5957C3.50343 17.5189 3.61605 17.4667 3.73866 17.4455C3.86127 17.4243 3.98835 17.4352 4.10385 17.4767C4.21934 17.5182 4.31805 17.5886 4.38751 17.6788C4.45696 17.769 4.49403 17.8751 4.49403 17.9836C4.49403 18.1291 4.42744 18.2687 4.3089 18.3716C4.19037 18.4745 4.0296 18.5323 3.86197 18.5323ZM3.86197 14.9964C3.73696 14.9964 3.61476 14.9642 3.51082 14.9039C3.40687 14.8436 3.32586 14.758 3.27802 14.6577C3.23018 14.5574 3.21767 14.4471 3.24205 14.3407C3.26644 14.2343 3.32664 14.1365 3.41504 14.0598C3.50343 13.983 3.61605 13.9308 3.73866 13.9096C3.86127 13.8884 3.98835 13.8993 4.10385 13.9408C4.21934 13.9823 4.31805 14.0527 4.38751 14.1429C4.45696 14.2331 4.49403 14.3392 4.49403 14.4477C4.49403 14.5932 4.42744 14.7328 4.3089 14.8357C4.19037 14.9386 4.0296 14.9964 3.86197 14.9964ZM3.86197 11.3386C3.73696 11.3386 3.61476 11.3064 3.51082 11.2461C3.40687 11.1858 3.32586 11.1001 3.27802 10.9999C3.23018 10.8996 3.21767 10.7893 3.24205 10.6829C3.26644 10.5764 3.32664 10.4787 3.41504 10.4019C3.50343 10.3252 3.61605 10.2729 3.73866 10.2518C3.86127 10.2306 3.98835 10.2415 4.10385 10.283C4.21934 10.3245 4.31805 10.3948 4.38751 10.4851C4.45696 10.5753 4.49403 10.6814 4.49403 10.7899C4.49403 10.9354 4.42744 11.075 4.3089 11.1779C4.19037 11.2808 4.0296 11.3386 3.86197 11.3386ZM3.86197 7.86363C3.73696 7.86363 3.61476 7.83145 3.51082 7.77116C3.40687 7.71087 3.32586 7.62518 3.27802 7.52493C3.23018 7.42467 3.21767 7.31435 3.24205 7.20792C3.26644 7.10148 3.32664 7.00372 3.41504 6.92699C3.50343 6.85025 3.61605 6.798 3.73866 6.77683C3.86127 6.75566 3.98835 6.76652 4.10385 6.80805C4.21934 6.84958 4.31805 6.9199 4.38751 7.01013C4.45696 7.10036 4.49403 7.20644 4.49403 7.31496C4.49403 7.46048 4.42744 7.60003 4.3089 7.70293C4.19037 7.80583 4.0296 7.86363 3.86197 7.86363ZM3.86197 4.38869C3.73696 4.38869 3.61476 4.35651 3.51082 4.29622C3.40687 4.23594 3.32586 4.15024 3.27802 4.04999C3.23018 3.94973 3.21767 3.83941 3.24205 3.73298C3.26644 3.62655 3.32664 3.52878 3.41504 3.45205C3.50343 3.37531 3.61605 3.32306 3.73866 3.30189C3.86127 3.28072 3.98835 3.29158 4.10385 3.33311C4.21934 3.37464 4.31805 3.44496 4.38751 3.53519C4.45696 3.62542 4.49403 3.7315 4.49403 3.84002C4.49403 3.98554 4.42744 4.12509 4.3089 4.22799C4.19037 4.33089 4.0296 4.38869 3.86197 4.38869ZM12.5001 14.8135H6.53066V14.2039H12.5001V14.8135ZM18.5398 11.1557H6.53066V10.546H18.5398V11.1557ZM18.5398 7.61978H6.53066V7.01014H18.5398V7.61978ZM18.5398 4.14484H6.53066V3.5352H18.5398V4.14484Z"
			stroke="none"
			fill={color}
			fillRule="evenodd"
		/>
	</Svg>
);

NOTES_PRESSED.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
	color: PropTypes.string,
};

NOTES_PRESSED.defaultProps = {
	width: 22,
	height: 26,
	color: '#CE976A',
};

export default NOTES_PRESSED;