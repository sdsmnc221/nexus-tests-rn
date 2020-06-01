const theme = {
	/*
	 * Go check /docs/guide-colors.png
	 */
	colors: {
		black: '#000',
		charcoal: '#4A4A4A',
		cinnabar: '#DB4545',
		dimGray: '#707070',
		ghostWhite: '#F5F4FF',
		lime: '#14FF00',
		persianRed: '#CC4141',
		persianRedAlpha: 'rgba(204, 65, 65, $a)',
		slateBlue: '#6B5CFF',
		whiskey: '#CE976A',
		white: '#FFF',
	},
	fonts: {
		acumin: {
			bold: 'Acumin-BdPro',
			boldItalic: 'Acumin-BdItPro',
			medium: 'Acumin-MPro',
			regular: 'Acumin-RPro',
			italic: 'Acumin-ItPro',
		},
		cairo: {
			black: 'Cairo-Black',
			bold: 'Cairo-Bold',
			semiBold: 'Cairo-SemiBold',
			regular: 'Cairo-Regular',
			light: 'Cairo-Light',
			extraLight: 'Cairo-ExtraLight',
		},
		sourceSans: {
			black: 'SourceSansPro-Black',
			blackItalic: 'SourceSansPro-BlackItalic',
			bold: 'SourceSansPro-Bold',
			boldItalic: 'SourceSansPro-BoldItalic',
			semiBold: 'SourceSansPro-SemiBold',
			semiBoldItalic: 'SourceSansPro-SemiBoldItalic',
			regular: 'SourceSansPro-Regular',
			italic: 'SourceSansPro-Italic',
			light: 'SourceSansPro-Light',
			lightItalic: 'SourceSansPro-LightItalic',
			extraLight: 'SourceSansPro-ExtraLight',
			extraLightItalic: 'SourceSansPro-ExtraLightItalic',
		},
		superclarendon: 'Superclarendon',
	},
	shadows: {
		default: {
			shadowColor: '#000',
			shadowOffset: {
				width: 0,
				height: 6,
			},
			shadowOpacity: 0.37,
			shadowRadius: 7.49,

			elevation: 12,
		},
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
			body: 14,
			bodyDataviz: 14,
			titleDataviz: 18,
			subtitle: 11,
		},
	},
};

const { colors, fonts, shadows, typo } = theme;

export { colors, fonts, shadows, typo };

export default theme;
