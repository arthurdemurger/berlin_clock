import { BerlinClock } from '../src/app.js';

describe("Berlin Clock function", function() {
	let berlin_clock = new BerlinClock();

	it("should return O\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO when given 0", function() {
		let result = berlin_clock.convert_to_berlin_time(0);

		expect(result).toBe("O\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO");
	});

	it("should return O\nOOOO\nOOOO\nOOOOOOOOOOO\nJOOO when given 1", function() {
		let result = berlin_clock.convert_to_berlin_time(1);

		expect(result).toBe("O\nOOOO\nOOOO\nOOOOOOOOOOO\nJOOO");
	});

	it("should return O\nOOOO\nOOOO\nOOOOOOOOOOO\nJJOO when given 2", function() {
		let result = berlin_clock.convert_to_berlin_time(2);

		expect(result).toBe("O\nOOOO\nOOOO\nOOOOOOOOOOO\nJJOO");
	});
});