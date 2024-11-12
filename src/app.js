export class BerlinClock {

	convert_to_berlin_time(timestamp) {
		let berlin_time = "O\nOOOO\nOOOO\nOOOOOOOOOOO\n";

		berlin_time += this.simples_minutes(timestamp);

		return (berlin_time);
	}

	five_hours_blocks(time_in_hours) {
		if (time_in_hours === 5) {
			return ("ROOO");
		}

		if (time_in_hours === 10) {
			return ("RROO");
		}

		if (time_in_hours === 15) {
			return "RRRO";
		}

		return ("OOOO");
	}

	simples_hours(time_in_hours) {
		const hours = time_in_hours % 5;

		if (hours === 0) {
			return ("OOOO");
		}

		if (time_in_hours === 1) {
			return ("ROOO");
		}
		
		if (time_in_hours === 2) {
			return ("RROO");
		}

		if (time_in_hours === 3) {
			return ("RRRO");
		}
		
		if (time_in_hours === 4) {
			return ("RRRR");
		}
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
