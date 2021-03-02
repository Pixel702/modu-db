let array = [];

function get(args) {
	try {
		for (var i = 0; i < array.length; i++) {
			if (array[i].includes(`${args}`)) {
				var split = array[i].replace(`${args}\u200b`, '');
				return split;
			};
		};

		console.log('X Saved data has failed to aquire make sure you have saved it erlier');
		return 'X Failed to aquire saved data';
	} catch(error) {
		console.log('X Saved data has failed to aquire make sure you have saved it erlier - ' + error);
		return 'X Failed to aquire saved data - ' + error;
	}
};

module.exports = class db {
	get(args, value) {
		try {
			for (var i = 0; i < array.length; i++) {
				if (array[i].includes(`${args}`)) {
					var split = array[i].replace(`${args}\u200b`, '');
					return split;
				};
			};

			console.log('X Saved data has failed to aquire make sure you have saved it erlier');
			return 'X Failed to aquire saved data';
		} catch(error) {
			console.log('X Saved data has failed to aquire make sure you have saved it erlier - ' + error);
			return 'X Failed to aquire saved data - ' + error;
		}
	};

	edit(args, value) {
		try {
			for (var i = 0; i < array.length; i++) {
				if (array[i].includes(`${args}`)) {
					array[i] = `${args}\u200b${value}`
				};
			};

			console.log('X Data has failed to be set to database');
			return 'X Failed to set a save to data';
		} catch(error) {
			console.log('X Data has failed to be set to database - ' + error);
			return 'X Failed to set a save to data - ' + error;
		}
	};

	set(args, value) {
		try {
			array = [
				`${args}\u200b${value}`
			]
		} catch(error) {
			console.log('X Data has failed to be set to database - ' + error);
			return 'X Failed to set a save to data - ' + error;
		}
	};

	add(args, value) {
		try {
			array.push(`${args}\u200b${value}`);
		} catch(error) {
			console.log('X Data has failed to be added to database - ' + error);
			return 'X Failed to add a save to data - ' + error;
		}
	};

	remove(args, value) {
		try {
			for (var i = 0; i < array.length; i++) {
				if (array[i].includes(`${args}`)) {
					var forDeletion = [args];

					array = array.filter(item => item !== `${args}\u200b${get(args)}`);

					return;
				};
			};

			console.log('X Saved data has failed to be removed make sure you have saved it erlier');
			return 'X Failed to remove saved data';
		} catch(error) {
			console.log('X Saved data has failed to be removed make sure you have saved it erlier - ' + error);
			return 'X Failed to remove saved data - ' + error;
		}
	};
};