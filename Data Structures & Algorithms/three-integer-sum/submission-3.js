class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);
        let res = [];
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > 0) break;
            if (i > 0 && nums[i] == nums[i - 1]) continue;
            let ptr1 = i+1;
            let ptr2 = nums.length - 1;
            while (ptr2 > ptr1) {
                let sum = nums[i] + nums[ptr1] + nums[ptr2];
                if (sum > 0) {
                    ptr2--;
                } else if (sum < 0) {
                    ptr1++;
                } else {
                    res.push([nums[i], nums[ptr1], nums[ptr2]]);
                    ptr1++;
                    ptr2--;
                    while (ptr2 > ptr1 && nums[ptr1] === nums[ptr1-1]) {
                        ptr1++;
                    }
                }
            }
        }
        return res;
    }
}
