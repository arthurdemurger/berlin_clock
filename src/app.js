export class BerlinClock {

	convert_to_berlin_time(timestamp) {
		let berlin_time = "O\nOOOO\nOOOO\nOOOOOOOOOOO\n";

		berlin_time += this.simples_minutes(timestamp);

		return (berlin_time);
	}


	simples_hours(time_in_hours) {
		if (time_in_hours === 1) {
			return ("ROOO");
		}
		if (time_in_hours === 2) {
			return ("RROO");
		}
		return ("OOOO");
	}


	five_minutes_blocks(time_in_minutes) {
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
