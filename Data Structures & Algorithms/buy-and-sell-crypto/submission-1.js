class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
       let ptr1 =0 
       let ptr2  = 1
       let profit = 0
       while(ptr2 < prices.length){
        if(prices[ptr1] < prices[ptr2]){
           let lprofit = prices[ptr2] - prices[ptr1]
           profit = Math.max(profit ,lprofit); 
        }
        else{
            ptr1 = ptr2
        }
        ptr2++
       }
       return profit
    }
}
