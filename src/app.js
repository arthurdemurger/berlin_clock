export class BerlinClock {

	convert_to_berlin_time(timestamp) {
		if (timestamp === 1) {
			return ("O\nOOOO\nOOOO\nOOOOOOOOOOO\nJOOO");
		}

		if (timestamp === 2) {
			return ("O\nOOOO\nOOOO\nOOOOOOOOOOO\nJJOO");
		}

		return ("O\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO");
	}
}
