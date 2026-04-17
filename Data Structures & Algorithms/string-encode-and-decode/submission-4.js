class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
      return strs.length ? strs.join("é") : "0"
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {

        return str === "0" ? [] : str.split("é");
    }
}
