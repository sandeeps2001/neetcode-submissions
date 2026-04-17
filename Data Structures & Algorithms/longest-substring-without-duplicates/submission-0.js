class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if(s.length == 1)return 1
        let max = 0;
        let l = 0 ;
        let r = 1;
        let str = {};
        str[s[l]] = 1;
        while(r < s.length){
         while(str[s[r]]){
            str[s[l]] = 0
            l++
         }
         max = Math.max(max,r-l+1);
         str[s[r]] = 1;
         r++;
        }
        return max;
    }
}

