class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b) => a-b);
        let res = []
        for(let i=0 ; i<nums.length;i++){
            if(nums[i] > 0)break;
            if( i> 0 && nums[i] == nums[i-1])continue;

            let pt1 = i+1;
            let pt2 = nums.length-1;
            while(pt1 < pt2){
                let sum = nums[i] + nums[pt1] + nums[pt2];
                if(sum > 0){
                    pt2--
                } 
                else if(sum < 0){
                    pt1++
                }
                else{
                    res.push([nums[i],nums[pt1],nums[pt2]]);
                    pt1++;
                    pt2--;
                    while(pt1 < pt2 && nums[pt1] === nums[pt1 -1]){
                        pt1++
                    }
                }

            } 

        }
        return res;
    }
}
