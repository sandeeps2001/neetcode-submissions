class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let n = nums.length;
    let left  = new Array(n).fill(1)
    for(let i = 1 ; i<n ; i++){
       left[i] = left[i-1] * nums[i-1] 
    }
    let right = 1;
    for(let i = n-1 ; i>=0 ; i--){
        left[i] = left[i] * right
        right = right * nums[i]
    }
    return left
    }
}
