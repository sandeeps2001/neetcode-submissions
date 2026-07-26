class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
     let hash ={}
     for(let i = 0 ; i<nums.length ; i++){
        hash[nums[i]] = i
     }
     for(let i = 0 ; i < nums.length ; i++ ){
     if(hash[target - nums[i]] != undefined && i!= hash[target - nums[i]])return [i , hash[target- nums[i]]]
     }


}
}