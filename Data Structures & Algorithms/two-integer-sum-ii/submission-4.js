class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
twoSum(numbers, target) {
let ind1 = 0;
for(let n of numbers){
    let ind2 = numbers.indexOf(target - n)
    if(ind2>ind1)return [ind1+1,ind2+1] 
    ind1++
}  
}
}
