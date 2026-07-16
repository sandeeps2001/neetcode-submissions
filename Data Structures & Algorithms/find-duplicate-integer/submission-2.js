class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {

    for(let i = 0 ;i<nums.length;i++){
    let idx = Math.abs(nums[i])-1
    if(nums[idx]<0)return idx+1
    nums[idx] = nums[idx]*-1    
    }


    }
}
