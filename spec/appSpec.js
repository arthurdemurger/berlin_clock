import { BerlinClock } from '../src/app.js';

describe("Berlin Clock function", function() {
	let berlin_clock = new BerlinClock();

	it("should return ", function() {
		let result = berlin_clock.convert_to_berlin_time(0);

		expect(result).toBe("O\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO");
	});
});