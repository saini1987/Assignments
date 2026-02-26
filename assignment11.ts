//Implement pow(x, n), which calculates x raised to the power n (i.e., xn).
// Example 1:
// Input: x = 2.00000, n = 10
// Output: 1024.00000

class Power {
    base: number;
    exponent: number;

    constructor(base: number, exponent: number) {
        this.base = base;
        this.exponent = exponent;
    }

    calculatePower(): number {
        if (this.exponent === 0) return 1;
        if (this.exponent < 0) {
            this.exponent = -this.exponent;
            this.base = 1 / this.base;
        }
        let result = 1;
        for (let i = 0; i < this.exponent; i++) {
            result *= this.base;
        }
        return result;
    }
}

let power = new Power(2, 10);
console.log(power.calculatePower());

// Example 2:
// Input: x = 2.10000, n = 3
// Output: 9.26100

power = new Power(2.1, 3);
console.log(power.calculatePower());


// Example 3:
// Input: x = 2.00000, n = -2
// Output: 0.25000
// Explanation: 2-2 = 1/22 = 1/4 = 0.25
power = new Power(2, -2);
console.log(power.calculatePower());
