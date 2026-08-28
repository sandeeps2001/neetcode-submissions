class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        let n = nums.length 
        let dp = new Array(n).fill(0)
        dp[0] = nums[0]
        dp[1] = Math.max(nums[0], nums[1])
        for(let i =2 ; i<nums.length ; i++){
            dp[i] = Math.max(dp[i-1] , nums[i] + dp[i-2])
        }
        console.log(dp[n-1])
        return dp[n-1]
    }
}
