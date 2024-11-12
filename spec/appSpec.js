import { BerlinClock } from '../src/app.js';

describe("Berlin Clock function", function() {
	let berlin_clock = new BerlinClock();

	// Test cases for simpleMinutes function
	it("simpleMinutes should return OOOO when given 0", function() {
		let result = berlin_clock.simpleMinutes(0);

		expect(result).toBe("OOOO");
	});

	it("simpleMinutes should return JOOO when given 1", function() {
		let result = berlin_clock.simpleMinutes(1);

		expect(result).toBe("JOOO");
	});

	it("simpleMinutes should return JJOO when given 2", function() {
		let result = berlin_clock.simpleMinutes(2);

		expect(result).toBe("JJOO");
	});

	it("simpleMinutes should return JJJO when given 3", function() {
		let result = berlin_clock.simpleMinutes(3);

		expect(result).toBe("JJJO");
	});

	it("simpleMinutes should return JJJJ when given 4", function() {
		let result = berlin_clock.simpleMinutes(4);

		expect(result).toBe("JJJJ");
	});

	it("simpleMinutes should return OOOO when given 5", function() {
		let result = berlin_clock.simpleMinutes(5);

		expect(result).toBe("OOOO");
	});

	it("simpleMinutes should return JOOO when given 6", function() {
		let result = berlin_clock.simpleMinutes(6);

		expect(result).toBe("JOOO");
	});

	// Test cases for fiveMinutesBlocks function
	it("fiveMinutesBlocks should return OOOOOOOOOOO when given 0", function() {
		let result = berlin_clock.fiveMinutesBlocks(0);

		expect(result).toBe("OOOOOOOOOOO");
	});

	it("fiveMinutesBlocks should return OOOOOOOOOOO when given 1", function() {
		let result = berlin_clock.fiveMinutesBlocks(1);

		expect(result).toBe("OOOOOOOOOOO");
	});

	it("fiveMinutesBlocks should return JOOOOOOOOOO when given 5", function() {
		let result = berlin_clock.fiveMinutesBlocks(5);

		expect(result).toBe("JOOOOOOOOOO");
	});

	it("fiveMinutesBlocks should return JOOOOOOOOOO when given 6", function() {
		let result = berlin_clock.fiveMinutesBlocks(6);

		expect(result).toBe("JOOOOOOOOOO");
	});

	it("fiveMinutesBlocks should return JJOOOOOOOOO when given 10", function() {
		let result = berlin_clock.fiveMinutesBlocks(10);

		expect(result).toBe("JJOOOOOOOOO");
	});

	it("fiveMinutesBlocks should return JJOOOOOOOOO when given 11", function() {
		let result = berlin_clock.fiveMinutesBlocks(11);

		expect(result).toBe("JJOOOOOOOOO");
	});

	it("fiveMinutesBlocks should return JJOOOOOOOOO when given 11", function() {
		let result = berlin_clock.fiveMinutesBlocks(11);

		expect(result).toBe("JJOOOOOOOOO");
	});

	it("fiveMinutesBlocks should return JJROOOOOOOO when given 15", function() {
		let result = berlin_clock.fiveMinutesBlocks(15);

		expect(result).toBe("JJROOOOOOOO");
	});

	it("fiveMinutesBlocks should return JJROOOOOOOO when given 16", function() {
		let result = berlin_clock.fiveMinutesBlocks(16);

		expect(result).toBe("JJROOOOOOOO");
	});

	it("fiveMinutesBlocks should return JJRJOOOOOOO when given 20", function() {
		let result = berlin_clock.fiveMinutesBlocks(20);

		expect(result).toBe("JJRJOOOOOOO");
	});

	it("fiveMinutesBlocks should return JJRJOOOOOOO when given 21", function() {
		let result = berlin_clock.fiveMinutesBlocks(21);

		expect(result).toBe("JJRJOOOOOOO");
	});

	it("fiveMinutesBlocks should return JJRJJOOOOOO when given 25", function() {
		let result = berlin_clock.fiveMinutesBlocks(25);

		expect(result).toBe("JJRJJOOOOOO");
	});

	it("fiveMinutesBlocks should return JJRJJOOOOOO when given 26", function() {
		let result = berlin_clock.fiveMinutesBlocks(26);

		expect(result).toBe("JJRJJOOOOOO");
	});

	it("fiveMinutesBlocks should return JJRJJROOOOO when given 30", function() {
		let result = berlin_clock.fiveMinutesBlocks(30);

		expect(result).toBe("JJRJJROOOOO");
	});

	it("fiveMinutesBlocks should return JJRJJROOOOO when given 31", function() {
		let result = berlin_clock.fiveMinutesBlocks(31);

		expect(result).toBe("JJRJJROOOOO");
	});

	it("fiveMinutesBlocks should return JJRJJROOOOO when given 35", function() {
		let result = berlin_clock.fiveMinutesBlocks(35);

		expect(result).toBe("JJRJJRJOOOO");
	});

	it("fiveMinutesBlocks should return JJRJJROOOOO when given 36", function() {
		let result = berlin_clock.fiveMinutesBlocks(36);

		expect(result).toBe("JJRJJRJOOOO");
	});

	it("fiveMinutesBlocks should return JJRJJRJJOOO when given 40", function() {
		let result = berlin_clock.fiveMinutesBlocks(40);

		expect(result).toBe("JJRJJRJJOOO");
	});

	it("fiveMinutesBlocks should return JJRJJRJJOOO when given 41", function() {
		let result = berlin_clock.fiveMinutesBlocks(41);

		expect(result).toBe("JJRJJRJJOOO");
	});

	it("fiveMinutesBlocks should return JJRJJRJJROO when given 45", function() {
		let result = berlin_clock.fiveMinutesBlocks(45);

		expect(result).toBe("JJRJJRJJROO");
	});

	it("fiveMinutesBlocks should return JJRJJRJJROO when given 46", function() {
		let result = berlin_clock.fiveMinutesBlocks(46);

		expect(result).toBe("JJRJJRJJROO");
	});

	it("fiveMinutesBlocks should return JJRJJRJJRJO when given 50", function() {
		let result = berlin_clock.fiveMinutesBlocks(50);

		expect(result).toBe("JJRJJRJJRJO");
	});

	it("fiveMinutesBlocks should return JJRJJRJJRJO when given 51", function() {
		let result = berlin_clock.fiveMinutesBlocks(51);

		expect(result).toBe("JJRJJRJJRJO");
	});

	it("fiveMinutesBlocks should return JJRJJRJJRJJ when given 55", function() {
		let result = berlin_clock.fiveMinutesBlocks(55);

		expect(result).toBe("JJRJJRJJRJJ");
	});

	it("fiveMinutesBlocks should return JJRJJRJJRJJ when given 56", function() {
		let result = berlin_clock.fiveMinutesBlocks(56);

		expect(result).toBe("JJRJJRJJRJJ");
	});

	// Test cases for simpleHours function
	it("simpleHours should return OOOO when given 0", function() {
		let result = berlin_clock.simpleHours(0);

		expect(result).toBe("OOOO");
	});

	it("simpleHours should return ROOO when given 1", function() {
		let result = berlin_clock.simpleHours(1);

		expect(result).toBe("ROOO");
	});

	it("simpleHours should return RROO when given 2", function() {
		let result = berlin_clock.simpleHours(2);

		expect(result).toBe("RROO");
	});

	it("simpleHours should return RRRO when given 3", function() {
		let result = berlin_clock.simpleHours(3);

		expect(result).toBe("RRRO");
	});

	it("simpleHours should return RRRR when given 4", function() {
		let result = berlin_clock.simpleHours(4);

		expect(result).toBe("RRRR");
	});

	it("simpleHours should return OOOO when given 5", function() {
		let result = berlin_clock.simpleHours(5);

		expect(result).toBe("OOOO");
	});

	// Test cases for fiveHoursBlocks function
	it("fiveHoursBlocks should return OOOO when given 0", function() {
		let result = berlin_clock.fiveHoursBlocks(0);

		expect(result).toBe("OOOO");
	});

	it("fiveHoursBlocks should return ROOO when given 5", function() {
		let result = berlin_clock.fiveHoursBlocks(5);

		expect(result).toBe("ROOO");
	});

	it("fiveHoursBlocks should return RROO when given 10", function() {
		let result = berlin_clock.fiveHoursBlocks(10);

		expect(result).toBe("RROO");
	});

	it("fiveHoursBlocks should return RRRO when given 15", function() {
		let result = berlin_clock.fiveHoursBlocks(15);
		expect(result).toBe("RRRO");
	});

	it("fiveHoursBlocks should return RRRR when given 20", function() {
		let result = berlin_clock.fiveHoursBlocks(20);
		expect(result).toBe("RRRR");
	});

	it("fiveHoursBlocks should return OOOO when given 25", function() {
		let result = berlin_clock.fiveHoursBlocks(25);
		expect(result).toBe("OOOO");
	});
});
