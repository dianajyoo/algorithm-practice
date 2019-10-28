## Longest Palindrome

Given a string which consists of lowercase or uppercase letters, find the length of the longest palindromes that can be built with those letters.

This is case sensitive, for example "Aa" is not considered a palindrome here.

Note:
Assume the length of given string will not exceed 1,010.

### Examples
```
Input: 'nnaabbb'
Output: 7
Explanation: Longest palindrome is 'nabbban' where there is a single character, b, occurring 
an odd number of times.
```
```
Input: 'nnaaabbbc'
Output: 7
Explanation: Longest palindrome is 'nabbban' where there is a single character, b,
occurring an odd number of times. 
We don't include 'c' because 'b' has a greater odd number of occurrences and 
a valid palindrome can only have one character occurring an odd number of times. 
```
