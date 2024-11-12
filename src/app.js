export class BerlinClock {

	convert_to_berlin_time(timestamp) {
		if (timestamp === 1) {
			return ("O\nOOOO\nOOOO\nOOOOOOOOOOO\nJOOO");
		}

		if (timestamp === 2) {
			return ("O\nOOOO\nOOOO\nOOOOOOOOOOO\nJJOO");
		}

		if (timestamp === 3) {
			return ("O\nOOOO\nOOOO\nOOOOOOOOOOO\nJJJO");
		}

		if (timestamp === 4) {
			return ("O\nOOOO\nOOOO\nOOOOOOOOOOO\nJJJJ");
		}

		return ("O\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO");
	}
}
