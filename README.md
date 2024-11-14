# Berlin Clock

This project implements a Berlin Clock (or "Mengenlehreuhr"), a unique and visually distinctive method to display time. Instead of using numbers or hands, the Berlin Clock represents hours, minutes, and seconds through illuminated blocks.

## Structure of the Clock

1. **Seconds Row**: The first row consists of a single lamp that blinks every two seconds. If the second is even, the lamp is lit; if it's odd, the lamp is off.

2. **5-Hour Row**: The second row contains 4 lamps, each representing 5 hours. If a lamp is lit, it indicates a 5-hour block. For example, if two lamps are lit, it represents 10 hours.

3. **1-Hour Row**: The third row also has 4 lamps, each representing 1 hour. It displays the remaining hours after the ones indicated in the 5-hour row.

4. **5-Minute Row**: The fourth row has 11 lamps, each representing 5 minutes. The lamps follow a specific pattern: every third lamp (representing each quarter hour) is often lit in red, while the others are lit in yellow.

5. **1-Minute Row**: The fifth row contains 4 lamps, each representing 1 minute. It shows the remaining minutes after the ones indicated in the 5-minute row.

### Example of Reading the Clock

For a given time, let's say **13:17:01** (1:17:01 PM):

- **Seconds Row**: The lamp is off (01 second is odd).
- **5-Hour Row**: Two lamps are lit, representing 10 hours.
- **1-Hour Row**: Three lamps are lit, representing an additional 3 hours, for a total of 10 + 3 = 13 hours.
- **5-Minute Row**: Three yellow lamps and one red lamp are lit, representing the first 15 minutes plus an additional 5 minutes (total = 15 minutes).
- **1-Minute Row**: Two lamps are lit, representing an additional 2 minutes (total = 17 minutes).

This configuration thus represents the time 13:17:01.

## Authors

**Group 01**
- Demurger Arthur
- Faiella Filippo
- Hanse Julie
