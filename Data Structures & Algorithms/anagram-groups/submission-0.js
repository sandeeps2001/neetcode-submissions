class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let ans = {}
        for(let s of strs){
            let k = s.split('').sort().join('')
            if(!ans[k])ans[k]=[]
        ans[k].push(s)
        }
        return Object.values(ans);
    }
}
