export class BerlinClock {
	seconds(time_in_seconds) {
		return time_in_seconds % 2 === 0 ? "R" : "O";
	}
}
