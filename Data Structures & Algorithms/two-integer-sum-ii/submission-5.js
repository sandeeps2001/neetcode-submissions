class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
twoSum(numbers, target) {
let ind1 = 0;
let ind2 = numbers.length-1
while(ind2 > ind1){
    let sum = numbers[ind1] + numbers[ind2];
if(sum === target){
return [ind1+1,ind2+1]
}
else if(sum < target){
ind1++
}
else ind2--
}  
}
}
