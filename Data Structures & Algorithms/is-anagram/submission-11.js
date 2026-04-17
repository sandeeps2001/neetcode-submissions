class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
    if (s.length != t.length) return false 
    let hash = {}
    for(let i of s){
        hash[i] = (hash[i]||0)+1
    }
    for(let j of t){
        if(!hash[j])return false
        hash[j]= (hash[j]||0)-1
    }
    for(let key in hash){
        if (hash[key] != 0)return false
    }
    return true 

}
}