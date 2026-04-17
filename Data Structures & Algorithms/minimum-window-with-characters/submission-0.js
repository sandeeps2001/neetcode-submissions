class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let Tcount = {}
        let window = {}
        let resLength = Infinity;
        let l = 0;
        let res = [0, 0];
        let have = 0
        for (let c of t) {
            Tcount[c] = (Tcount[c] || 0) + 1;
        }
        let need = Object.keys(Tcount).length
        for (let r = 0; r < s.length; r++) {
            window[s[r]] = (window[s[r]] || 0) + 1
            if (Tcount[s[r]] && window[s[r]] === Tcount[s[r]]) {
                have++
            }

            while (have == need) {
                if (r - l + 1 < resLength) {
                    resLength = r - l + 1
                    res = [l, r]
                }
                window[s[l]]--;
                if (Tcount[s[l]] && window[s[l]] < Tcount[s[l]]) {
                    have--
                }
                l++;
            }
        }
        return resLength === Infinity ? "" : s.slice(res[0], res[1] + 1);
    }
}
