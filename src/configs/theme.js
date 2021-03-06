const theme = {
	/*
	 * Go check /docs/guide-colors.png
	 */
	colors: {
		black: '#000',
		charcoal: '#4A4A4A',
		charcoalAlpha: 'rgba(74, 74, 74, $a)',
		cinnabar: '#DB4545',
		dimGray: '#707070',
		electricIndigo: '#8F00FF',
		ghostWhite: '#F5F4FF',
		lime: '#14FF00',
		limeAlpha: 'rgba(20, 255, 0, $a)',
		neonCarrot: '#FF9B3B',
		persianRed: '#CC4141',
		persianRedAlpha: 'rgba(204, 65, 65, $a)',
		slateBlue: '#6B5CFF',
		whiskey: '#CE976A',
		white: '#FFF',
		whiteAlpha: 'rgba(255, 255, 255, $a)',
	},
	fonts: {
		cairo: {
			bold: 'Cairo-Bold',
			semiBold: 'Cairo-SemiBold',
			regular: 'Cairo-Regular',
			light: 'Cairo-Light',
			extraLight: 'Cairo-ExtraLight',
		},
		sourceSans: {
			bold: 'SourceSansPro-Bold',
			semiBold: 'SourceSansPro-SemiBold',
			regular: 'SourceSansPro-Regular',
			italic: 'SourceSansPro-Italic',
			light: 'SourceSansPro-Light',
			extraLight: 'SourceSansPro-ExtraLight',
		},
		superclarendon: 'Superclarendon',
	},
	/*
	 * Go check /docs/guide-typo.png
	 */
	typo: {
		// Sizes with px unit (for styled-component)
		sizes: {
			h1: '32px',
			h2: '24px',
			h3: '16px',
			h3_alt: '18px',
			body: '14px',
			bodyDataviz: '14px',
			titleDataviz: '18px',
			subtitle: '11px',
		},
		// Sizes without px unit (for React-Native StyleSheet)
		sizesNb: {
			h1: 32,
			h2: 24,
			h3: 16,
			h3_alt: 18,
			body: 14,
			bodyDataviz: 14,
			titleDataviz: 18,
			subtitle: 11,
		},
	},
};

const { colors, fonts, typo } = theme;

export { colors, fonts, typo };

export default theme;
