class Solution {
    dfs(n ,curr ,open ,close){
          if(curr.length === 2*n){
            this.res.push([...curr].join(''))
            return 
          }
          if(open < n){
            curr.push('(')
            this.dfs(n,curr,open+1,close)
            curr.pop()
          }
          if(close < open){
            curr.push(')')
            this.dfs(n,curr,open,close+1)
            curr.pop()
          }
    }
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        this.res = []
        this.dfs(n,[],0, 0)
        return this.res
    }
}
