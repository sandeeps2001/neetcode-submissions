class Solution {
search(mat,target,left,right){
   if(left > right){
      return false
   }
   let mid = Math.floor((left+right)/2)
   if(mat[mid] == target)return true
   else if(mat[mid] > target){
      return this.search(mat ,target,left,mid-1)
   }
   else{
      return this.search(mat,target,mid+1,right)
   }
}
    


    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {

      let start = 0
      let end = matrix.length-1
      let mend = matrix[0].length-1
      while(start <= end){
          let mid = Math.floor((end+start)/2)
          if(matrix[mid][0]<= target && matrix[mid][mend] >= target ){
            return this.search(matrix[mid],target,0,mend)
          }
          else if(matrix[mid][0]>target){
            end = mid-1
          }
          else {
            start = mid+1
          }
      }
      return false
    }
}
