const firstName = "Georgia";
let nameLength = firstName.length(); //Este codigo no botaria error en vanilla js

// Previously: sayMyName(firstName, lastName) { ...
function sayMyName(fullName) {
	console.log(`You acting kind of shady, ain't callin' me ${fullName}`);
}

sayMyName("Beyoncé", "Knowles");
// ~~~~~~~~~
// Expected 1 argument, but got 2.
