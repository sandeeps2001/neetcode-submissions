class Solution {

    /**
     * @param {number[]} nums
     * @return {number}
     */
    search(nums, target) {
        let left = 0;
        let right = nums.length - 1;

        while (left < right) {
            let mid = Math.floor((left + right) / 2);

            if (nums[mid] > nums[right]) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        if (target >= nums[0] && target <= nums[left - 1]) {
            return this.binarySearch(nums, target, 0, left - 1)
        }
        else {
            return this.binarySearch(nums, target, left, nums.length - 1)
        }
    }

    binarySearch(nums, target, left, right) {
        while (left <= right) {
            let mid = Math.floor((left + right) / 2)
            if (target === nums[mid]) return mid
            else if (nums[mid] < target) {
                left = mid + 1;
            }
            else right = mid - 1;
        }
        return -1
    }
}