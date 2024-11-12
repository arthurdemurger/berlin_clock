export class BerlinClock {

	convert_to_berlin_time(timestamp) {
		let berlin_time = "O\nOOOO\nOOOO\nOOOOOOOOOOO\n";

		berlin_time += this.simples_minutes(timestamp);

		return (berlin_time);
	}

	five_minutes_blocks(time_in_minutes) {
		if (time_in_minutes >= 55) {
			return ("JJRJJRJJRJJ");
		}
		if (time_in_minutes >= 50) {
			return ("JJRJJRJJRJO");
		}
		if (time_in_minutes >= 45) {
			return ("JJRJJRJJROO");
		}
		if (time_in_minutes >= 40) {
			return ("JJRJJRJJOOO");
		}
		if (time_in_minutes >= 35) {
			return ("JJRJJRJOOOO");
		}
		if (time_in_minutes >= 30) {
			return ("JJRJJROOOOO");
		}
		if (time_in_minutes >= 25) {
			return ("JJRJJOOOOOO");
		}
		if (time_in_minutes >= 20) {
			return ("JJRJOOOOOOO");
		}
		if (time_in_minutes >= 15) {
			return ("JJROOOOOOOO");
		}
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
