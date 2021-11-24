// Create a *UNIQUE* ID
// Fast and easy way to create unique IDs using JavaScript:

export const uid = () => {
	const head = Date.now().toString(36);
	const tail = Math.random().toString(36).substr(2);

	return head + tail;
};

// To finish import it into another file like this:

import { uid } from './uid';

const id = uid();

// It should generate something like this: kvotbxl7jjyl7eis2s