import { BerlinClock } from '../src/app.js';

describe("Berlin Clock function", function() {
	let berlin_clock = new BerlinClock();

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

	it("five_minutes_blocks should return OOOOOOOOOOO when given 0", function() {
		let result = berlin_clock.five_minutes_blocks(0);

		expect(result).toBe("OOOOOOOOOOO");
	});

	it("five_minutes_blocks should return OOOOOOOOOOO when given 1", function() {
		let result = berlin_clock.five_minutes_blocks(1);

		expect(result).toBe("OOOOOOOOOOO");
	});


	it("simples_hours should return OOOO when given 0", function() {
		let result = berlin_clock.simples_hours(0);

		expect(result).toBe("OOOO");
	});

	it("simples_hours should return ROOO when given 1", function() {
		let result = berlin_clock.simples_hours(1);

		expect(result).toBe("ROOO");
	});

	it("simples_hours should return RROO when given 2", function() {
		let result = berlin_clock.simples_hours(2);

		expect(result).toBe("RROO");
	});

	it("simples_hours should return RRRO when given 3", function() {
		let result = berlin_clock.simples_hours(3);

		expect(result).toBe("RRRO");
	});
});