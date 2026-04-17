class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        let hash = {
            '{': '}',
            '[': ']',
            '(': ')'
        }
        for (let c of s) {
            if (hash[c]) {
                stack.push(c)
            }
            else {
                if (stack.length) {
                    let key = stack.pop()
                    if (hash[key] === c) continue
                }
                return false

            }
        }
        return stack.length ? false : true;

    }
}


