class Solution {
dfs(nums , arr , curr ){
    if(curr.length === nums.length){
    this.res.push([...curr])
     return 
}
for(let j = 0 ; j<nums.length ; j++){
    if(arr[j])continue
    arr[j] = true
    curr.push(nums[j])
    this.dfs(nums, arr , curr)
    curr.pop()
    arr[j] = false
}
}


    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
      this.res = []
      this.dfs(nums , new Array(nums.length).fill(false) , [] ) 
      return this.res

    }
}
