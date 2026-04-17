class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let stack = [] // height,i 
        let max = 0; // Math.max(max , height *(i-ind))
        for (let i = 0; i < heights.length; i++) {
            let start = i;
            while (stack.length > 0 && stack[stack.length - 1][1] > heights[i]) {
                const [index, height] = stack.pop()
                max = Math.max(max, height * (i - index))
                start = index 
            }
            stack.push([start, heights[i]])
        }

        for (const [i, h] of stack) {
            max = Math.max(max, h * (heights.length - i))
        }
        return max
    }
}
