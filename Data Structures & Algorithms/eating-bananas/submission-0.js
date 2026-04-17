class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let left = 1
        let right = Math.max(...piles)
        let res = right;
        while(left <= right){
             let hours = 0
              let mid = Math.floor((left + right)/2)
             for(let p of piles){
                hours += Math.ceil(p/mid)
             }
             if(hours <= h){
                res = Math.min(res,mid)
                right = mid-1 
             }
             else{
                left = mid+1
             }
        }
        return res
    }


}
