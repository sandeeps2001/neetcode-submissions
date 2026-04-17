class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
    let prev =0
    let cur =0
    let j = 0
    let i =0
    let total = nums1.length + nums2.length
    let mid = Math.floor((total)/2)
    for(let k = 0;k<=mid;k++){
        prev = cur
        if(j >= nums2.length || (i < nums1.length && nums1[i]<= nums2[j])){
          cur = nums1[i++]
        }
        else{
           cur =  nums2[j++]
        }
    }
    return total%2===0?(prev+cur)/2:cur
    }
}
