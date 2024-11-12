import { BerlinClock } from '../src/app.js';

describe("Berlin Clock function", function() {
	let berlin_clock = new BerlinClock();

	// Test cases for simples_minutes function
	it("simples_minutes should return OOOO when given 0", function() {
		let result = berlin_clock.simples_minutes(0);

		expect(result).toBe("OOOO");
	});

	it("simples_minutes should return JOOO when given 1", function() {
		let result = berlin_clock.simples_minutes(1);

		expect(result).toBe("JOOO");
	});

	it("simples_minutes should return JJOO when given 2", function() {
		let result = berlin_clock.simples_minutes(2);

		expect(result).toBe("JJOO");
	});

	it("simples_minutes should return JJJO when given 3", function() {
		let result = berlin_clock.simples_minutes(3);

		expect(result).toBe("JJJO");
	});

	it("simples_minutes should return JJJJ when given 4", function() {
		let result = berlin_clock.simples_minutes(4);

		expect(result).toBe("JJJJ");
	});

	it("simples_minutes should return OOOO when given 5", function() {
		let result = berlin_clock.simples_minutes(5);

		expect(result).toBe("OOOO");
	});

	it("simples_minutes should return JOOO when given 6", function() {
		let result = berlin_clock.simples_minutes(6);

		expect(result).toBe("JOOO");
	});

	// Test cases for five_minutes_blocks function
	it("five_minutes_blocks should return OOOOOOOOOOO when given 0", function() {
		let result = berlin_clock.five_minutes_blocks(0);

		expect(result).toBe("OOOOOOOOOOO");
	});

	it("five_minutes_blocks should return OOOOOOOOOOO when given 1", function() {
		let result = berlin_clock.five_minutes_blocks(1);

		expect(result).toBe("OOOOOOOOOOO");
	});

	it("five_minutes_blocks should return JOOOOOOOOOO when given 5", function() {
		let result = berlin_clock.five_minutes_blocks(5);

		expect(result).toBe("JOOOOOOOOOO");
	});

	it("five_minutes_blocks should return JOOOOOOOOOO when given 6", function() {
		let result = berlin_clock.five_minutes_blocks(6);

		expect(result).toBe("JOOOOOOOOOO");
	});

	it("five_minutes_blocks should return JJOOOOOOOOO when given 10", function() {
		let result = berlin_clock.five_minutes_blocks(10);

		expect(result).toBe("JJOOOOOOOOO");
	});

	it("five_minutes_blocks should return JJOOOOOOOOO when given 11", function() {
		let result = berlin_clock.five_minutes_blocks(11);

		expect(result).toBe("JJOOOOOOOOO");
	});

	it("five_minutes_blocks should return JJOOOOOOOOO when given 11", function() {
		let result = berlin_clock.five_minutes_blocks(11);

		expect(result).toBe("JJOOOOOOOOO");
	});

	it("five_minutes_blocks should return JJROOOOOOOO when given 15", function() {
		let result = berlin_clock.five_minutes_blocks(15);

		expect(result).toBe("JJROOOOOOOO");
	});

	it("five_minutes_blocks should return JJROOOOOOOO when given 16", function() {
		let result = berlin_clock.five_minutes_blocks(16);

		expect(result).toBe("JJROOOOOOOO");
	});

	it("five_minutes_blocks should return JJRJOOOOOOO when given 20", function() {
		let result = berlin_clock.five_minutes_blocks(20);

		expect(result).toBe("JJRJOOOOOOO");
	});

	it("five_minutes_blocks should return JJRJOOOOOOO when given 21", function() {
		let result = berlin_clock.five_minutes_blocks(21);

		expect(result).toBe("JJRJOOOOOOO");
	});

	it("five_minutes_blocks should return JJRJJOOOOOO when given 25", function() {
		let result = berlin_clock.five_minutes_blocks(25);

		expect(result).toBe("JJRJJOOOOOO");
	});

	it("five_minutes_blocks should return JJRJJOOOOOO when given 26", function() {
		let result = berlin_clock.five_minutes_blocks(26);

		expect(result).toBe("JJRJJOOOOOO");
	});

	it("five_minutes_blocks should return JJRJJROOOOO when given 30", function() {
		let result = berlin_clock.five_minutes_blocks(30);

		expect(result).toBe("JJRJJROOOOO");
	});

	it("five_minutes_blocks should return JJRJJROOOOO when given 31", function() {
		let result = berlin_clock.five_minutes_blocks(31);

		expect(result).toBe("JJRJJROOOOO");
	});

	it("five_minutes_blocks should return JJRJJROOOOO when given 35", function() {
		let result = berlin_clock.five_minutes_blocks(35);

		expect(result).toBe("JJRJJRJOOOO");
	});

	it("five_minutes_blocks should return JJRJJROOOOO when given 36", function() {
		let result = berlin_clock.five_minutes_blocks(36);

		expect(result).toBe("JJRJJRJOOOO");
	});

	it("five_minutes_blocks should return JJRJJRJJOOO when given 40", function() {
		let result = berlin_clock.five_minutes_blocks(40);

		expect(result).toBe("JJRJJRJJOOO");
	});

	it("five_minutes_blocks should return JJRJJRJJOOO when given 41", function() {
		let result = berlin_clock.five_minutes_blocks(41);

		expect(result).toBe("JJRJJRJJOOO");
	});

	it("five_minutes_blocks should return JJRJJRJJROO when given 45", function() {
		let result = berlin_clock.five_minutes_blocks(45);

		expect(result).toBe("JJRJJRJJROO");
	});

	it("five_minutes_blocks should return JJRJJRJJROO when given 46", function() {
		let result = berlin_clock.five_minutes_blocks(46);

		expect(result).toBe("JJRJJRJJROO");
	});

	it("five_minutes_blocks should return JJRJJRJJRJO when given 50", function() {
		let result = berlin_clock.five_minutes_blocks(50);

		expect(result).toBe("JJRJJRJJRJO");
	});

	it("five_minutes_blocks should return JJRJJRJJRJO when given 51", function() {
		let result = berlin_clock.five_minutes_blocks(51);

		expect(result).toBe("JJRJJRJJRJO");
	});

});
