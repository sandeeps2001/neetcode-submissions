class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let hash = {
         '}': '{',
         ']': '[',
         ')': '('
        }
        let stack = []
        for (let i of s ){
            if(hash[i]){
              if(!(hash[i] === stack.pop()))return false
            }
            else{
                stack.push(i)
            }
            }
            return stack.length ? false : true
        }
    }
