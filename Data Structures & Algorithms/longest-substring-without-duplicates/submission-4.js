class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if(s.length==1)return 1
        let l = 0;
        let r = 1;
        let m = 0;
        let h = {};
        h[s[l]] = 1;
        while(r < s.length){
            while(h[s[r]]){
                h[s[l]] = 0;
                l++;
            }
            m = Math.max(m , r-l+1)
            h[s[r]] = 1;
            r++;
        }
        return m;
    }
}

