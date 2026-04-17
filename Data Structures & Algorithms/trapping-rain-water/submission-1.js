class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        if(!height || height.length==0){
            return 0;
        }
        let l = 0 ;
        let r = height.length -1;
        let leftmax = height[l];
        let rightmax = height[r];
        let res = 0;
        while(l<r){
            if(leftmax < rightmax){
                l++
                leftmax = Math.max(leftmax , height[l])
                res += leftmax - height[l]  
            }
            else{
                r--
                rightmax = Math.max(rightmax,height[r])
                res += rightmax - height[r]
            }
        }
        return res;    
    }
}
