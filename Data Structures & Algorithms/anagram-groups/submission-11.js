class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let hash = {}
        for (let c of strs){
            let temp = c.split('').sort().join('')
            if(!hash[temp])hash[temp]=[]
            hash[temp].push(c)
        }
        return Object.values(hash)
    
}
}
