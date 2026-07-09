class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
  largestRectangleArea(heights) {
 let stack = [];
 let max = 0
 let h = [...heights,0]
 for(let i =0;i<h.length;i++){
    while(stack.length && h[i] < h[stack[stack.length-1]]){
     let height = h[stack.pop()]
     let leftlength = stack.length?stack[stack.length-1]:-1
     let width = i -leftlength -1
     max = Math.max(max , width * height)
    }
    stack.push(i)
  }
  return max
}
}
