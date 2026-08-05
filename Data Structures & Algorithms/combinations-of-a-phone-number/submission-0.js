class Solution {
    dfs(i,str,digitToChar,digits){
        if(str.length === digits.length){
          this.res.push(str)
          return
        }
        for(let s of digitToChar[digits[i]]){
            this.dfs(i+1 , str + s, digitToChar,digits)
        }
    }
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {

        this.res = []
        this.l = digits.length
        if(this.l === 0 )return this.res
         const digitToChar = {
            2: 'abc',
            3: 'def',
            4: 'ghi',
            5: 'jkl',
            6: 'mno',
            7: 'qprs',
            8: 'tuv',
            9: 'wxyz',
        };
        this.dfs(0,'',digitToChar,digits)
        return this.res
    }
}
