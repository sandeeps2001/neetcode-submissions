class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
    let array1 = 0
    let array2 = 0
    let curr = 0
    let prev =0
    let total = nums1.length + nums2.length
    let mid = Math.floor(total/2)
    for(let i= 0 ; i<=mid ; i++ ){
        prev = curr
        if(array2 >=nums2.length || (array1<nums1.length && nums1[array1] <= nums2[array2])){
               curr = nums1[array1++]
        }
        else{
            curr = nums2[array2++]
        }
        
    }      
    return total%2===0?(curr+prev)/2:curr

    }


}
