class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
            const n = nums.length;
            if (n === 0) return 0;
    if (n === 1) return nums[0];
    if (n === 2) return Math.max(nums[0], nums[1]);
     
        return Math.max(this.helper(nums,0,n-2), this.helper(nums,1,n-1))
    }

    helper(nums,start , end ){
    let prev2  = 0 
    let prev1 = 0 
    for(let i = start ; i<=end ; i++){
       let curr = Math.max(prev1 , nums[i] + prev2 )
       prev2 = prev1
       prev1 = curr 
    }
    return prev1
    }
}
