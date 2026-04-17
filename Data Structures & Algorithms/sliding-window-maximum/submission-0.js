class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let res = [];
        let r = k;
        let l = 0;
        let max = -Infinity;
        for(let s = 0 ; s< k ; s++){
            if(nums[s] > max){
                max = nums[s]
            }
        }
        res.push(max)
        while(r < nums.length){
         if(nums[l] == max && nums[r] < max){
            max = Math.max(...nums.slice(l+1,r+1))
         }
          else if( nums[r] > max){
            max = nums[r]
         }
        
        res.push(max)
        r++
        l++
        }
        return res;

    }
}
