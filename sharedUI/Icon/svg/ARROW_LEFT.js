import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

const ARROW_LEFT = ({ width, height, color }) => (
  <Svg width={width} height={height} viewBox="0 0 28 8">
    <Path
      d="M27.3536 4.35355C27.5488 4.15829 27.5488 3.84171 27.3536 3.64645L24.1716 0.464466C23.9763 0.269204 23.6597 0.269204 23.4645 0.464466C23.2692 0.659728 23.2692 0.976311 23.4645 1.17157L26.2929 4L23.4645 6.82843C23.2692 7.02369 23.2692 7.34027 23.4645 7.53553C23.6597 7.7308 23.9763 7.7308 24.1716 7.53553L27.3536 4.35355ZM0 4.5L27 4.5V3.5L0 3.5L0 4.5Z"
      stroke="none"
      fill={color}
      fillRule="evenodd"
    />
  </Svg>
);

ARROW_LEFT.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

ARROW_LEFT.defaultProps = {
  width: 28,
  height: 8,
  color: '#000',
};

export default ARROW_LEFT;