import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';

import HeaderRight from './HeaderRight';
import HeaderShadow from './components/HeaderShadow';

import { SIZES } from 'configs';
import { HEADER_OPTIONS } from './configs';

const Wrapper = styled.View`
    position: relative;
	z-index: 999;
	${({ theme }) => theme.styles.flex('flex-start', null, 'row', true)}
	min-height: ${SIZES.HEADER_H}px;
    padding-left: ${HEADER_OPTIONS.padding.left}px;
    padding-right: ${HEADER_OPTIONS.padding.right}px;
    margin-bottom: ${HEADER_OPTIONS.extraGap}px;
    background-color: ${({ theme }) => theme.colors.ghostWhite};
`;

const Title = styled.Text`
    ${({ theme }) => theme.styles.os.h1}
    color: ${({ theme }) => theme.colors.whiskey};
    letter-spacing: 1.6px;
`;

const BasicHeader = ({ theme, title, ...otherConfigs }) => {
	const { screen, headerRight, headerShadow } = otherConfigs;
	return (
		<Wrapper>
			{headerShadow && <HeaderShadow />}
			{title && <Title>{title}</Title>}
			{headerRight && <HeaderRight type={screen} />}
		</Wrapper>
	);
};

BasicHeader.propTypes = {
	title: PropTypes.string,
};

BasicHeader.defaultProps = {
	title: null,
};

export default withTheme(BasicHeader);
