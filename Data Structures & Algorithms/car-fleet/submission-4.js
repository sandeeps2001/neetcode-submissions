class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let hash = {}
        let res = 0
        let indx = []
        let lead = 0
        for(let i = 0 ; i<position.length;i++)indx.push(i)
        indx.sort((a,b) => position[b] - position[a])
        for(let i of indx ){
            let curr = (target - position[i] )/speed[i]
            if(curr <= lead )continue
                lead = curr  
                res++
            }
         
        return res
    }
}
