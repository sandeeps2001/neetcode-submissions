class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
     let hash ={}
     for(let i = 0 ; i < nums.length ; i++ ){
     let complement = target - nums[i]
     if(complement in hash) return [ hash[complement] , i]
     hash[nums[i]] = i
     }


}
}