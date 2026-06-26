class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */

    characterReplacement(s, k) {
    let l = 0
    let mf = 0
    let m = new Map()  
    let res = 0 
    for(let r =0;r<s.length;r++){
         m.set(s[r], (m.get(s[r])||0)+1)
         mf = Math.max(mf,m.get(s[r])) 
        while(r-l+1-mf > k){
            m.set(s[l], m.get(s[l])-1);
            l++
        }
        res = Math.max(res,r-l+1);
    }
    return res;
}
}