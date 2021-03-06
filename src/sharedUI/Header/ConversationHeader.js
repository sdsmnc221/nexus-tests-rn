import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';

import HeaderRight from './HeaderRight';
import HeaderLeft from './HeaderLeft';
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
    background-color: ${({ theme }) => theme.colors.ghostWhite};
`;

const Title = styled.Text`
	margin-left: 22%;
    ${({ theme }) => theme.styles.os.titleConversation}
    color: ${({ isJanus, theme }) =>
					isJanus ? theme.colors.slateBlue : theme.colors.charcoal};
`;

const ConversationHeader = ({ theme, title, ...otherConfigs }) => {
	const { screen, headerLeft, headerRight, headerShadow } = otherConfigs;

	return (
		<Wrapper>
			{headerShadow && <HeaderShadow withoutExtraGap />}
			{title && <Title isJanus={screen.includes('JANUS')}>{title}</Title>}
			{headerLeft && <HeaderLeft type="CONVERSATION" />}
			{headerRight && <HeaderRight type="CONVERSATION" />}
		</Wrapper>
	);
};

ConversationHeader.propTypes = {
	title: PropTypes.string,
};

ConversationHeader.defaultProps = {
	title: null,
};

export default withTheme(ConversationHeader);
