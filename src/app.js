export class BerlinClock {

	convertToBerlinTime(timestamp) {
		const time = timestamp.split(":");

		const seconds = parseInt(time[2]);

		const berlinTime = this.seconds(seconds) + "\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO";

		return (berlinTime);
	}

	fiveHoursBlocks(time_in_hours) {
		const hours = time_in_hours % 24;
		const hours_blocks = Math.floor(hours / 5);

		if (hours_blocks === 0) {
			return ("OOOO");
		}

		if (hours_blocks === 1) {
			return ("ROOO");
		}

		if (hours_blocks === 2) {
			return ("RROO");
		}

		if (hours_blocks === 3) {
			return ("RRRO");
		}

		if (hours_blocks === 4) {
			return ("RRRR");
		}
	}

	simpleHours(time_in_hours) {
		const hours = time_in_hours % 5;

		if (hours === 0) {
			return ("OOOO");
		}

		if (hours === 1) {
			return ("ROOO");
		}

		if (hours === 2) {
			return ("RROO");
		}

		if (hours === 3) {
			return ("RRRO");
		}

		if (hours === 4) {
			return ("RRRR");
		}
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

	seconds(time_in_seconds) {
		return time_in_seconds % 2 === 0 ? "R" : "O";
	}
}
