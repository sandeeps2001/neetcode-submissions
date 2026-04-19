class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let hash = {}
        for (let c of strs){
            let freq = new Array(26).fill(0)
            for (let str of c){
                freq[str.charCodeAt(0)-97]++
                }
            let key = freq.join(',')
            if(!hash[key])hash[key]=[]
            hash[key].push(c)
        }
        return Object.values(hash)
    
}
}
