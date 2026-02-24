export function maxProfit(prices: number[]): number {
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            const profit = prices[j]! - prices[i]!;

            if (profit > maxProfit) {
                maxProfit = profit;
            }
        }
    }

    return maxProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4])); 
console.log(maxProfit([7, 6, 4, 3, 1]));    

