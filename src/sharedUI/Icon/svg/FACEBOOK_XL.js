import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

const FACEBOOK_XL = ({ width, height, color }) => (
	<Svg width={width} height={height} viewBox="0 0 45 96">
		<Path
			d="M42.4316 13.7188H41.8555C40.8952 13.373 39.5124 13.0465 37.707 12.7393C35.9017 12.3936 34.2884 12.2207 32.8672 12.2207C28.2962 12.2207 25.0312 13.2578 23.0723 15.332C21.1517 17.3678 20.1914 21.0745 20.1914 26.4521V28.6416H38.1104V37.6299H20.5371V93H9.70508V37.6299H2.3877V28.6416H9.70508V26.5098C9.70508 18.7507 11.568 12.8545 15.2939 8.82129C19.0199 4.78809 24.359 2.77148 31.3115 2.77148C33.3089 2.77148 35.2679 2.88672 37.1885 3.11719C39.109 3.30924 40.8568 3.53971 42.4316 3.80859V13.7188Z"
			fill={color}
		/>
		<Path
			d="M42.4316 13.7188V15.8187H44.5316V13.7188H42.4316ZM41.8555 13.7188L41.1442 15.6946L41.489 15.8187H41.8555V13.7188ZM37.707 12.7393L37.3121 14.8018L37.3333 14.8059L37.3547 14.8095L37.707 12.7393ZM23.0723 15.332L21.5455 13.8901L21.5447 13.891L23.0723 15.332ZM20.1914 28.6416H18.0914V30.7416H20.1914V28.6416ZM38.1104 28.6416H40.2104V26.5416H38.1104V28.6416ZM38.1104 37.6299V39.7299H40.2104V37.6299H38.1104ZM20.5371 37.6299V35.5299H18.4371V37.6299H20.5371ZM20.5371 93V95.1H22.6371V93H20.5371ZM9.70508 93H7.60508V95.1H9.70508V93ZM9.70508 37.6299H11.8051V35.5299H9.70508V37.6299ZM2.3877 37.6299H0.287695V39.7299H2.3877V37.6299ZM2.3877 28.6416V26.5416H0.287695V28.6416H2.3877ZM9.70508 28.6416V30.7416H11.8051V28.6416H9.70508ZM15.2939 8.82129L13.7514 7.39629L15.2939 8.82129ZM37.1885 3.11719L36.9383 5.20223L36.9589 5.2047L36.9795 5.20677L37.1885 3.11719ZM42.4316 3.80859H44.5316V2.03674L42.7851 1.73855L42.4316 3.80859ZM42.4316 11.6188H41.8555V15.8187H42.4316V11.6188ZM42.5668 11.7429C41.4327 11.3346 39.9072 10.9835 38.0594 10.669L37.3547 14.8095C39.1176 15.1096 40.3577 15.4115 41.1442 15.6946L42.5668 11.7429ZM38.102 10.6767C36.2021 10.3129 34.4529 10.1207 32.8672 10.1207V14.3207C34.1239 14.3207 35.6012 14.4742 37.3121 14.8018L38.102 10.6767ZM32.8672 10.1207C28.056 10.1207 24.085 11.2012 21.5455 13.8901L24.599 16.7739C25.9775 15.3144 28.5364 14.3207 32.8672 14.3207V10.1207ZM21.5447 13.891C19.0398 16.5462 18.0914 20.9722 18.0914 26.4521H22.2914C22.2914 21.1769 23.2636 18.1895 24.5998 16.7731L21.5447 13.891ZM18.0914 26.4521V28.6416H22.2914V26.4521H18.0914ZM20.1914 30.7416H38.1104V26.5416H20.1914V30.7416ZM36.0104 28.6416V37.6299H40.2104V28.6416H36.0104ZM38.1104 35.5299H20.5371V39.7299H38.1104V35.5299ZM18.4371 37.6299V93H22.6371V37.6299H18.4371ZM20.5371 90.9H9.70508V95.1H20.5371V90.9ZM11.8051 93V37.6299H7.60508V93H11.8051ZM9.70508 35.5299H2.3877V39.7299H9.70508V35.5299ZM4.4877 37.6299V28.6416H0.287695V37.6299H4.4877ZM2.3877 30.7416H9.70508V26.5416H2.3877V30.7416ZM11.8051 28.6416V26.5098H7.60508V28.6416H11.8051ZM11.8051 26.5098C11.8051 19.0608 13.5937 13.7565 16.8365 10.2463L13.7514 7.39629C9.54241 11.9524 7.60508 18.4405 7.60508 26.5098H11.8051ZM16.8365 10.2463C20.0646 6.75187 24.7788 4.87148 31.3115 4.87148V0.671484C23.9393 0.671484 17.9751 2.8243 13.7514 7.39629L16.8365 10.2463ZM31.3115 4.87148C33.228 4.87148 35.1034 4.98204 36.9383 5.20223L37.4387 1.03215C35.4324 0.791397 33.3898 0.671484 31.3115 0.671484V4.87148ZM36.9795 5.20677C38.8613 5.39494 40.5599 5.61941 42.0782 5.87864L42.7851 1.73855C41.1537 1.46002 39.3568 1.22355 37.3974 1.02761L36.9795 5.20677ZM40.3316 3.80859V13.7188H44.5316V3.80859H40.3316Z"
			fill={color}
		/>
	</Svg>
);

FACEBOOK_XL.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
	color: PropTypes.string,
};

FACEBOOK_XL.defaultProps = {
	width: 45,
	height: 96,
	color: '#F4F3FF',
};

export default FACEBOOK_XL;
