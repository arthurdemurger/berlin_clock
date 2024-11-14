export class BerlinClock {
	seconds(seconds) {
		return seconds % 2 === 0 ? "R" : "O";
	}
}
