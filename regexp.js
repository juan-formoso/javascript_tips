// Regular expressions are a great tool to create codes when it comes to textual analysis and validation
// In addition to data extraction in case of some types of webcrawlers.

// How to do it?
// In JS most of the time we use regexp object like this:

let re = new RegExp("\d+(.)+\d+","igm"),
result = re.exec("padding 01234 text text 56")
console.log(result); //"01234 text text 56"

// It might not be the cleanest code ever, but in some situations where the size of the JS file matters, this is an excellent tip of code minification.