class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let need = 0;

        let m = new Map();
        let resLength = Infinity;
        let res = [];
        let h = new Map();
        let j = 0;
        let have = 0;
        for (let c of t) {
            m.set(c, (m.get(c) || 0) + 1);
            have = m.size;
        }
        for (let i = 0; i < s.length; i++) {
            if (m.has(s[i])) {
                h.set(s[i], (h.get(s[i]) || 0) + 1);
                if (m.get(s[i]) == h.get(s[i])) {
                    need++;
                }
                while (need == have) {
                    if (resLength > i - j + 1) {
                        resLength = i - j + 1;
                        res = [j, i];
                    }
                    if (m.has(s[j])) {
                        h.set(s[j], h.get(s[j]) - 1);
                    }
                    if (h.get(s[j]) < m.get(s[j])) {
                        need--;
                    }
                j++;
            }
        }
        }
        return resLength === Infinity ? "" : s.slice(res[0], res[1] + 1);
    }
}
