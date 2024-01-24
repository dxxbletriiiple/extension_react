import { IExperiment } from './interfaces/Experiment.interface';

export const addCookies = (arr: IExperiment[]) => {
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		console.log(tabs);

		const cookieDetails = {
			url: 'vprok.ru',
			name: 'xo-front/experiments',
			value: encodeURIComponent(JSON.stringify(arr)),
			expirationDate: Math.floor(Date.now() / 1000 + 3600),
		};

		// Add the cookie
		chrome.cookies.set(cookieDetails, function (cookie) {
			console.log('Cookie added:', cookie);
		});
	});
};
