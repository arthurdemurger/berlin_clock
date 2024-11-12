export class BerlinClock {

	convert_to_berlin_time(timestamp) {
		let berlin_time = "O\nOOOO\nOOOO\nOOOOOOOOOOO\n";

		berlin_time += this.simples_minutes(timestamp);

		return (berlin_time);
	}

	five_minutes_blocks(time_in_minutes) {
		if (time_in_minutes >= 10) {
			return ("JJOOOOOOOOO");
		}
		if (time_in_minutes >= 5) {
			return ("JOOOOOOOOOO");
		}

		return ("OOOOOOOOOOO");
	}


	simples_minutes(time_in_minutes) {
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
