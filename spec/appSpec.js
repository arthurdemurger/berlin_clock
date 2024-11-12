import { BerlinClock } from '../src/app.js';

describe("Berlin Clock function", function() {
	let berlin_clock = new BerlinClock();

	it("should return OOOO when given 0", function() {
		let result = berlin_clock.simples_minutes(0);

		expect(result).toBe("OOOO");
	});

	it("should return JOOO when given 1", function() {
		let result = berlin_clock.simples_minutes(1);

		expect(result).toBe("JOOO");
	});

	it("should return JJOO when given 2", function() {
		let result = berlin_clock.simples_minutes(2);

		expect(result).toBe("JJOO");
	});

	it("should return JJJO when given 3", function() {
		let result = berlin_clock.simples_minutes(3);

		expect(result).toBe("JJJO");
	});

	it("should return JJJJ when given 4", function() {
		let result = berlin_clock.simples_minutes(4);

		expect(result).toBe("JJJJ");
	});

	it("should return OOOO when given 5", function() {
		let result = berlin_clock.simples_minutes(5);

		expect(result).toBe("OOOO");
	});

});