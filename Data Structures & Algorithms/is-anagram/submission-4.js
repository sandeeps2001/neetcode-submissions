class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let hash1 = {};
        let hash2 = {};
       if(s.length != t.length)return false
       for(let i=0;i<s.length;i++){
                 hash1[s[i]] = hash1[s[i]]? hash1[s[i]]+1:1
                 hash2[t[i]] = hash2[t[i]]? hash2[t[i]]+1:1
       }
       console.log(hash1 , hash2)
       for(let i of s){
        if((!hash2[i]) || hash1[i]!= hash2[i] )return false
       }
       return true
       
    }
}
