class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let p = 0;
        let p1 = s.length - 1;
        while (p < p1) {
            while (p < p1 && !this.isAlphaNumericChar(s[p])) p++;
            while (p < p1 && !this.isAlphaNumericChar(s[p1])) p1--;
            if (s[p].toLowerCase() !== s[p1].toLowerCase()) return false
        p++;
        p1--;

    }
        return true
}

isAlphaNumericChar(ch) {
    return (
        (ch >= 'a' && ch <= 'z') ||
        (ch >= 'A' && ch <= 'Z') ||
        (ch >= '0' && ch <= '9')
    );
}
}