class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let res = [];
        let hash = {};
        let ans = []
        for (let c of nums) {
            hash[c] = (hash[c] || 0) + 1;
        }
        for (let key in hash) {
            let freq = hash[key];
            if (!res[freq]) res[freq] = [];
            res[freq].push(key);
        }
      for(let i = nums.length ; i >=1 ; i--){
        if(res[i]){
        for(let j of res[i]){
            ans.push(j)
            if(ans.length == k) return ans 
        } 
      }
    }
}
}
