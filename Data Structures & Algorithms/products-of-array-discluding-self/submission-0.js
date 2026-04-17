class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let n = nums.length;
      let prefix = new Array(n);
      let suffix = new Array(n);  
      let res = new Array(n);
        prefix[0] = 1;
        suffix[n - 1] = 1;
        for(let i = 1 ;i<nums.length;i++){
          prefix[i] = nums[i-1]* prefix[i-1];
        }
        
        for(let i = nums.length-2 ;i>=0;i--){
            suffix[i] = nums[i+1]* suffix[i+1];
        }
        for(let i = 0 ; i<n ; i++){
            res[i] = prefix[i] * suffix[i];
        }
        return res
    }
}
