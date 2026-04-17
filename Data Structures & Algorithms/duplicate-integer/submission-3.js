class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
     hasDuplicate(nums) {
     let hash = new Set
     for (let i = 0;i<nums.length;i++){
        if (hash.has(nums[i]))return true 
        else hash.add(nums[i]) 
     }
     return false 

    }
}
