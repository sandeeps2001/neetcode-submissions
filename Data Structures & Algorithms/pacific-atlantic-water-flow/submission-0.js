class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
     let rows = heights.length
     let cols = heights[0].length
     let res = []
     let pacific = Array.from({length : rows} ,()=> new Array(cols).fill(false))
    let atlantic = Array.from({length : rows} ,()=> new Array(cols).fill(false))
     



     const dfs=(r,c,ocean,prev)=>{
        if(r<0 || c<0 || r>=rows || c>= cols)return 
        if(ocean[r][c])return
        if(heights[r][c] < prev)return
        ocean[r][c] = true 
        dfs(r+1,c,ocean,heights[r][c])
        dfs(r-1,c,ocean,heights[r][c])
     dfs(r,c+1,ocean,heights[r][c])
     dfs(r,c-1,ocean,heights[r][c])
     }
   for(let c=0 ; c<cols ; c++){
    dfs(0 ,c,atlantic ,-Infinity  )
    dfs(rows-1,c,pacific , -Infinity)
    }

      for(let r = 0 ;r<rows ; r++){
        dfs(r,0,atlantic,-Infinity)
        dfs(r, cols-1 ,pacific,-Infinity )
      }



        for(let r = 0 ; r<rows ; r++){
            for(let c = 0 ;  c<cols ; c++){
                if(pacific[r][c] && atlantic[r][c])res.push([r,c])
            }
        }
        return res
    }
}
