class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
    if (s.length != t.length) return false 
    let hash1 = {}
    let hash2 = {}
    for(let i of s){
        hash1[i] = (hash1[i]||0)+1
    }
    for(let j of t){
        hash2[j]= (hash2[j]||0)+1
    }
    for(let key in hash1){
        if (hash1[key] != hash2[key])return false
    }
    return true 

}
}