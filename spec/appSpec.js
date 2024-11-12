import { BerlinClock } from '../src/app.js';

describe("Berlin Clock function", function() {
	let berlin_clock = new BerlinClock();

	it("should return even when the seconds are 0", function() {
		let result = berlin_clock.seconds(0);
	
		expect(result).toBe("R");
	});

	it("should return odd when the seconds are 1", function() {
		let result = berlin_clock.seconds(1);
	
		expect(result).toBe("O");
	});
});
