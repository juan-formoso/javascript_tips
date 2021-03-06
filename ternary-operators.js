// How to use the famous 'if/else in one line'
// Let's consider a block example before to make things easier:

let big;

if (x > 10) {
	big = true;
} else {
	big = false;
}

// Now let's turn it into a single line statement:

let big = x > 10 ? true : false;

// But... Does it work when functions are called?
// Here we have two different functions and we'll call the first one when it returns 'true' and the second one when it returns 'false':

function x() {console.log('x')};
function y() {console.log('y')};

let z = 3;
if (z == 3)
{
	x();
} else 
{
	y();
}

// Perhaps... You may dislike what you're seeing. In this case...
// You can do the same function call using a ternary:

function x() {console.log('x')};
function y() {console.log('y')};

let z = 3;
(z == 3 ? x : y)(); // Clean, isn't it?

// To finish...
// It's valid to make an honorable mention to the "if" that tests if a variable is true. Some people do then like this:

if (likeJs === true);

// But we can do it this way too:

if (likeJs)

// False version:

let c;
if (c != true) {
	// does something...
}

// It can be solve like this:

let c;
if (!c) {
	// does something...
}
