class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
     let rows = grid.length
     let cols = grid[0].length
     let q = []
     let fresh = 0
     let min = 0
     for(let r = 0 ; r<rows ; r++){
        for(let c = 0; c<cols ; c++){
            if(grid[r][c] == 1)fresh++
            else if(grid[r][c] == 2){
            q.push([r,c])
        }
        }
     }
     if(fresh == 0 )return 0
     
  let match = (r,c)=>{
     if(r<0 || c<0 || r>= rows || c>= cols )return 
      if(grid[r][c]!=1 )return 
      grid[r][c] = 2
      q.push([r,c])
      fresh--
      }
     
    

      while(q.length > 0  && fresh > 0){
        let size = q.length
        for (let i = 0; i < size; i++) {
        let [r,c]  = q.shift()
        match(r+1,c)
        match(r-1,c)
        match(r,c+1)
        match(r,c-1)
      }
      min++
      }
      
     return fresh == 0 ? min : -1
}
}
