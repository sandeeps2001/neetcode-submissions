class Solution {
    dfs(s, i , curr,res){
        if(i == s.length){
            res.push([...curr])
            return
        }
        for(let j = i ; j <s.length ; j++ ){
            const piece = s.substring(i,j+1)
            if(this.palindrome(piece)){
                curr.push(piece)
                this.dfs(s,j+1,curr, res)
                curr.pop()
            } 
        }
    }


    palindrome(str){
        let r = str.length-1
        let l = 0
        while(l < r){
          if(str[l] != str[r])return false
          l++
          r--
        }
        return true
    }
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
    this.res = []
    this.dfs(s,0,[],this.res)
    return this.res

    }
}
