class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let hash = {}
       for(let s of nums){
        hash[s] = (hash[s]|| 0) + 1;
       }
        let entries = Object.entries(hash);


    entries.sort((a, b) => b[1] - a[1]);

    return entries.slice(0, k).map(entry => entry[0]);
    }
}
