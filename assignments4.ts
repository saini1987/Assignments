// Assignment -4 (Conditional Statements & Loops) 
 
// Bank Transactions 
// Positive value refers Credit and Negative refers Debit Transaction 
// Transactions Amount 
// 1 50000 
// 2 -2000 
// 3 3000 
// 4 -15000 
// 5 -200 
// 6 -300 
// 7 4000 
// 8 -3000 
  
// First Store all the transactions in any data structure of Your Choice from collections, and by using 
// Loops and conditional statements  
// 1. Print total number of credit and debit transactions completed 
// 2. Print the total amount credited and debited in account  
// 3. Print total amount remaining at the end in Bank Account 
// 4. If any transaction limit exceeds +/- 10000 then print the message “Suspicious credit/ debit 
// Transaction with Amount” and also print total number of suspicious transactions

interface transactionInfo {
    transactionId: number,
    amount: number
}
let transactions: transactionInfo[] = [
    { transactionId: 1, amount: 50000 },
    { transactionId: 2, amount: -2000 },    
    { transactionId: 3, amount: 3000 },
    { transactionId: 4, amount: -15000 },
    { transactionId: 5, amount: -200 },
    { transactionId: 6, amount: -300 }, 
    { transactionId: 7, amount: 4000 },
    { transactionId: 8, amount: -3000 }
]

let creditTransactions: number = 0;
let debitTransactions: number = 0;  
let totalCreditAmount: number = 0;
let totalDebitAmount: number = 0;

for (let transaction of transactions) {
    if (transaction.amount > 0) {
        creditTransactions++;
        totalCreditAmount += transaction.amount;
    } else if (transaction.amount < 0) {
        debitTransactions++;
        totalDebitAmount += transaction.amount;
    }
}
//1. Print total number of credit and debit transactions completed
console.log("Total Credit Transactions: " + creditTransactions);
console.log("Total Debit Transactions: " + debitTransactions);

//2. Print the total amount credited and debited in account 
console.log("Total Amount Credited: " + totalCreditAmount);
console.log("Total Amount Debited: " + totalDebitAmount);

//3. Print total amount remaining at the end in Bank Account 
let totalAmount: number = totalCreditAmount + totalDebitAmount;
console.log("Total Amount Remaining in Bank Account: " + totalAmount);  

//4. If any transaction limit exceeds +/- 10000 then print the message “Suspicious credit/ debit Transaction with Amount” and also print total number of suspicious transactions
let suspiciousTransactions: number = 0;
for (let transaction of transactions) {
    if (transaction.amount > 10000 || transaction.amount < -10000) {
        console.log("Suspicious credit/ debit Transaction with Amount: " + transaction.amount);
        suspiciousTransactions++;
    }
}
console.log("Total Number of Suspicious Transactions: " + suspiciousTransactions);