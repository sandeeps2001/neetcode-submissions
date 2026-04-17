class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
     let hashset = new Set(nums)
     let longest = 0

    for(let num of nums){
        let length = 1;
     if(!hashset.has(num -1)){
        while(hashset.has(num+length)) {
     length++
     }
     }
     longest = Math.max(longest, length )


    }
return longest
}
}
