class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = "";
        for (let s of strs) {
            res += String(s.length) + "#" + s;
        }
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = [];
        let i = 0;
        while (i < str.length) {
            let c = "";
            let j = i;
            while (str[j] != "#") {
                j += 1;
            }
            let len = parseInt(str.substring(i, j));
            j = j + 1;
            len = len + j;
            while (j < len) {
                c += str[j];
                j++;
            }
            res.push(c);
            i = j;
        }
        return res;
    }
}
