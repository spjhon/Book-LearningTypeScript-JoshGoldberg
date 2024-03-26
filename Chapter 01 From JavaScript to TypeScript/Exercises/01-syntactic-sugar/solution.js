function announceMachines(announce, ...machines) {
	/*...machines is a rest parameter that allows the function to accept 
	any number of arguments after the announce parameter. These arguments 
	will be stored as an array called machines.*/
	let labelsCount = 0;

	for (const machine of machines) {
		let label;

		if (machine.label) {
			label = machine.label;
			labelsCount += 1;
		} else {
			label = `Make: ${machine.make}; Model: ${machine.model}`;
		}

		announce(label);
	}

	return labelsCount;
}

module.exports.announceMachines = announceMachines;
