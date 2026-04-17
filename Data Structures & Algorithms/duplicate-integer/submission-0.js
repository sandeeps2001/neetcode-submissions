class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
     hasDuplicate(nums) {
        let hash = {};
        for(let i = 0; i< nums.length; i++ ){
            if(hash[nums[i]])return true
            else hash[nums[i]] = 1
        }
    return false
    }
}
