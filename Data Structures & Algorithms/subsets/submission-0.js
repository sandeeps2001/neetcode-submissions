class Solution {


    dfs(nums,subset,i){
        if(i >= nums.length){
            this.res.push([...subset])
            return 
        }
        subset.push(nums[i])
        this.dfs(nums,subset , i+1)
        subset.pop()
        this.dfs(nums,subset ,i+1)
    }
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
    this.res = []
    this.dfs(nums,[], 0)
    return this.res

    }
}
