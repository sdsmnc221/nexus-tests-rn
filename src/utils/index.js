const cleanLineBreaks = (str, withValue = ' ') =>
	str.replace(/\r?\n|\r/g, withValue);

const truncate = (str, ln = 96, ellipsis = true) =>
	cleanLineBreaks(str).substring(0, ln) + (ellipsis ? '...' : '');

const sample = (arr) => arr[Math.floor(Math.random() * arr.length)];

const sampleSize = ([...arr], n = 1) => {
	let m = arr.length;
	while (m) {
		const i = Math.floor(Math.random() * m--);
		[arr[m], arr[i]] = [arr[i], arr[m]];
	}
	return arr.slice(0, n);
};

const shuffle = ([...arr]) => {
	let m = arr.length;
	while (m) {
		const i = Math.floor(Math.random() * m--);
		[arr[m], arr[i]] = [arr[i], arr[m]];
	}
	return arr;
};

const random = (odd = 0.5) => (Math.random() <= odd ? true : false);

export { truncate, sample, sampleSize, shuffle, random };