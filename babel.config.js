module.exports = {
	presets: ['module:metro-react-native-babel-preset'],
	plugins: [
		[
			'module-resolver',
			{
				alias: {
					assets: './src/assets',
					configs: './src/configs',
					states: './src/states',
					screens: './src/screens',
					sharedUI: './src/sharedUI',
					utils: './src/utils',
				},
			},
		],
	],
};
