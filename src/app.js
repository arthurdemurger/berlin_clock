export class BerlinClock {

	convert_to_berlin_time(timestamp) {
		let berlin_time = "O\nOOOO\nOOOO\nOOOOOOOOOOO\n";

		berlin_time += this.simples_minutes(timestamp);

		return (berlin_time);
	}

	simples_minutes(timestamp) {
		if (timestamp % 5 === 0) {
			return ("OOOO");
		}

		if (timestamp === 1) {
			return ("JOOO");
		}

		if (timestamp === 2) {
			return ("JJOO");
		}

		if (timestamp === 3) {
			return ("JJJO");
		}

		if (timestamp === 4) {
			return ("JJJJ");
		}
	}
}
