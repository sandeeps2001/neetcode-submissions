class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let pt1 = numbers.length-1
        let pt2 = 0
        while(pt1>pt2){
            let sum = numbers[pt1] + numbers[pt2]
             if(sum == target){
                return[pt2+1, pt1+1]
            }
             if(sum < target){
                pt2++
                
            }
            if(sum > target){
                pt1--
            }
        }
    }
}
