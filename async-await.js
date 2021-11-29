// PROMISES USING ASYNC/AWAIT


// We start by creating a special kind of function, this is an async function.

// This function will basically keep running in the background while performing the code thats inside of it.
// When the function is done it automatically returns a promise.

// Inside an async function, we can have onde or more await statements.
// await can be put in front of any async promise-based function to pause your code on that line until the promise fulfills, then return the resulting value.

// Is stopping the code using await, stopping the execution?
// No,
// Stopping execution using an async function is actually not a problem because this whole function is running asynchronously in the background.
// Therefore, it is not blocking the main thread of execution.
// Here is a simple example to display the syntax:


async function hello() {
	return await Promise.resolve("Hello");
};

hello().then(alert);


// Let's look at some real code using async/await:


async function myFetch() {
	//returns and stores the promise in response after fetch is complete
	let response = await fetch('ocean.jpg');

	//if response is NOT fetched succesfully
	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}

	let myBlob = await response.blob();

	let objectURL = URL.createObjectURL(myBlob);
	let image = document.createElement('img');
	image.src = objectURL;
	document.body.appendChild(image);
}

//Calling the function
myFetch()
	//.catch() catches the error thrown from myFetch(), if there is an error
	.catch(e => {
		console.log('There has been a problem with your fetch operations: ' + e.message);
								});