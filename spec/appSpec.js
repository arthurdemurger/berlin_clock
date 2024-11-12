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

	it("should return O\nOOOO\nOOOO\nOOOOOOOOOOO\nJJJO when given 3", function() {
		let result = berlin_clock.convert_to_berlin_time(3);

		expect(result).toBe("O\nOOOO\nOOOO\nOOOOOOOOOOO\nJJJO");
	});

	it("should return O\nOOOO\nOOOO\nOOOOOOOOOOO\nJJJJ when given 4", function() {
		let result = berlin_clock.convert_to_berlin_time(4);

		expect(result).toBe("O\nOOOO\nOOOO\nOOOOOOOOOOO\nJJJJ");
	});

	it("should return O\nOOOO\nOOOO\nJOOOOOOOOOO\nOOOO when given 5", function() {
		let result = berlin_clock.convert_to_berlin_time(5);

		expect(result).toBe("O\nOOOO\nOOOO\nJOOOOOOOOOO\nOOOO");
	});
});