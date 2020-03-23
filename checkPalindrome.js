function checkPalindrome(inputString) {
    //checks if a string is a palindrome or not
    const reversedString = inputString.split('').reverse().join('');
    return inputString === reversedString;
}