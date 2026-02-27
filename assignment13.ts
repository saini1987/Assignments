
// Assignment (String Operations)
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all
// non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include
// letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.


export class PalindromeService {

    public isPalindrome(value: string): boolean {
        if (!value) {
            throw new Error("Input cannot be empty");
        }

        const normalized = value.toLowerCase().replace(/[^A-Za-z0-9]/g, "");

        for (let i = 0; i < normalized.length / 2; i++) {
            if (normalized[i] !== normalized[normalized.length - 1 - i]) {
                return false;
            }
        }

        return true;
    }
}
let obj = new PalindromeService()
// Example 1:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
console.log(obj.isPalindrome("A man, a plan, a canal: Panama")) 

// Example 2:
// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
console.log(obj.isPalindrome("race a car"))
