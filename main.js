// First prompt the user to ask how many disaster victims they wish to enter.
var victims = prompt("How many distaster victims are there?", "ex. 3");

var victimNames = [];
var victimPhones = [];
var victimStreets = [];

// For each disaster victim that will be added, prompt the user to enter their name, phone number, and street.
for(var i = 0; i < victims; i++) {
	var victimName = prompt("Victim #" + (i+1) + " name:");
	var victimPhone = prompt("Victim #" + (i+1) + " phone:");
	var victimStreet = prompt("Victim #" + (i+1) + " street:");

	// Add each newly entered user to three arrays, one for each piece of information.
	victimNames.push(victimName);
	victimPhones.push(victimPhone);
	victimStreets.push(victimStreet);
}