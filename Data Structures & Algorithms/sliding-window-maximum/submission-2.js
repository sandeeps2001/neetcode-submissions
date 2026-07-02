class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let q = []
        let out = []
        let l = 0
        for(let r = 0 ; r<nums.length ; r++){

         while(q.length && nums[q[q.length-1]] < nums[r]){
            q.pop()
         }
         q.push(r)
         if(l > q[0]){
            q.shift()
         }
         if(r - l+1 >= k ){
            out.push(nums[q[0]])
            l++
         }


}
return out
    }
}