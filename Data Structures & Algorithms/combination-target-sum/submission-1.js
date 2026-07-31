class Solution {
    
    dfs(nums ,target ,curr ,total,i){
        if( total === target){
             this.res.push([...curr])
             return
        }

    for(let j =i ;j<nums.length ; j++){
       if(total + nums[j] > target )return 
        curr.push(nums[j])
        let a = total + nums[j]
       this.dfs(nums,target,curr, a ,j)
       curr.pop()
    }

    }
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        this.res= []
          nums.sort((a, b) => a - b);  
         this.dfs(nums,target,[],0,0)
         return this.res
    }

}
