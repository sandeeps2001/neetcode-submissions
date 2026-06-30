class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
      let m = new Map()
      for(let s of s1){
        m.set(s,(m.get(s)||0)+1)
      }
      let need = m.size;
      for(let i = 0 ; i<s2.length;i++){
        let curr= 0
        let count = {}
        for(let j = i ; j<s2.length;j++){
            let c = s2[j]
            count[c] = (count[c]||0)+1
            if(((m.get(c)||0)) < count[c]){
                break
            }
            if((m.get(c)||0) === count[c]){
                curr++
            }
            if(curr === need){
                return true 
            }
        }
      }   
      return false    
        }
}