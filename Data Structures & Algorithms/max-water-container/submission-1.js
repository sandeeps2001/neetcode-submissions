class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(height){

      let l = 0 ;
      let r = height.length-1;
      let res = 0 
      while(l<r){
        let area = Math.min(height[l],height[r])*(r-l)
        res = Math.max(area,res)
        if(height[l]<=height[r]){
          l++
        }
        else r--
      }
      return res 
}
}