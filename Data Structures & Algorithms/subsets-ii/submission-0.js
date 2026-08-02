class Solution {

    dfs(nums , curr , i){
     this.res.push([...curr])
     for(let j = i ; j<nums.length ; j++){
        if(j >i && nums[j] == nums[j-1])continue
        curr.push(nums[j])
        this.dfs(nums,curr,j+1)
        curr.pop()
     }
    }
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        this.res = []
         nums.sort((a,b) => a-b)
         this.dfs(nums , [] , 0 )
         return this.res
    }
}
