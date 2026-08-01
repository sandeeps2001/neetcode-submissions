class Solution {
dfs(arr , target , total , curr , i){
    if(total === target ){
        this.res.push([...curr])
        return 
        }
    
    

    for(let j=i ; j< arr.length; j++){
        if( j >i && arr[j] === arr[j-1])continue
        if(total + arr[j] > target){
            break
        }
        curr.push(arr[j])
        this.dfs(arr,target,total+arr[j],curr , j+1)
        curr.pop()
    }
}



    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target){
        candidates.sort((a,b) => a-b) 
        this.hash= {}
        this.res = []
        this.dfs(candidates , target , 0,[],0)
        return this.res    
    
    
    }
}
