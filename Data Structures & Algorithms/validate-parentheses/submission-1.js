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
                if(!stack.length || hash[stack.pop()] !== c){
                return false
            }
        }
        }
        return stack.length ? false : true;

    }
}



