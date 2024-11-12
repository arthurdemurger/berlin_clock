export class BerlinClock {

	convertToBerlinTime(timestamp) {
	}

	fiveMinutesBlocks(time_in_minutes) {
		const fiveMinuteBlock = Math.floor(time_in_minutes / 5);

		let minutes = "J".repeat(fiveMinuteBlock);

		minutes = minutes.replace(/JJJ/g, "JJR");

		minutes = minutes.padEnd(11, "O");

		return minutes;
	}


	simpleMinutes(time_in_minutes) {
		const minutes = time_in_minutes % 5;

		if (minutes === 0) {
			return ("OOOO");
		}

		if (minutes === 1) {
			return ("JOOO");
		}

		if (minutes === 2) {
			return ("JJOO");
		}

		if (minutes === 3) {
			return ("JJJO");
		}

		if (minutes === 4) {
			return ("JJJJ");
		}
	}
}
