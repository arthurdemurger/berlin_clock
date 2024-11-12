import { BerlinClock } from '../src/app.js';

describe("Berlin Clock function", function() {
	let berlin_clock = new BerlinClock();

	it("should return even when the seconds are 0", function() {
		let result = berlin_clock.seconds(0);
	
		expect(result).toBe("R");
	});
});
