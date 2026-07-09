class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0
        let right  = nums.length-1
        while (right >= left){
        let half = Math.floor((left +right)/2)
        console.log(half)
        if(nums[half] === target){
            return half
        }
       else if(nums[half] > target){
            right  = half-1
        }
        else{
            left = half+1
        }
    }

    return -1
    }
}
