import {Async} from '@uif-js/core';

export interface ProfileServerObject {
	name: string;
	surname: string;
	position: string;
	email: string;
	phone: string;
	address: string;
}

export default {
	// Items
	
	// Profile
	profileLoadJSONData: async (): Promise<ProfileServerObject> => {
		const response = await fetch('/spa-app/com.netsuite.uifitem360/item360/assets/UserData.json');
		const data = await response.json();
		await artificialDelay();
		return data;
	},
};

// Generates random number in given range
function getRandomInt(min: number, max: number): number {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Creates an artificial random delay - used in order for loaders/skeletons to be visible on page for a longer noticeable time
async function artificialDelay(): Promise<void> {
	await Async.delay(getRandomInt(1000, 2000));
}
