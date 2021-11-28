// WHAT IS A 'PROMISE' IN JAVASCRIPT?

// In simple words, a promise is an object that may produce and store a future result for an asynchronous operation.
// A promise may produce either a resolved value, or a reason why it's not resolved (e.g., a network error ocurred)

// A Promise is in one of these states:
// pending: initial state, neither fullfiled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.
// A pending promise can either be fulfilled with a value or rejected with a reason (error).

// When either of the 3 options happens, the associated handlers queued up by a promise's then method are called.
// Every promise must supply a.then() method with the following signature:


promise.then(
	function(result) { /* handle a sucessful result */ }, 
	function(error) { /* handle an error */ }
);


// For instance, here's a reaction to a successfully resolved promise:


//Creating a new promise
let promise = new Promise(function(resolve, reject){
	//Manually resolving the promise for understanding
	setTimeout(() => resolve("done!"), 1000);
});

// resolve runs the first function in .then
promise.then(
	result => alert(result), // shows "done!" after 1000
	error => alert(error) // doesn't run
);


// Here's a reaction to a succesfully resolved promise:


//Creating a new promise
let promise = new Promise(function(resolve, reject){
	//Manually resolving the promise for understanding
	setTimeout(() => reject(new Error("Whooops!")), 1000);
});

// reject runs the first function in .then
promise.then(
	result => alert(result), // doesn't run
	error => alert(error) // shows "Error: Whooops!" after 1000
);