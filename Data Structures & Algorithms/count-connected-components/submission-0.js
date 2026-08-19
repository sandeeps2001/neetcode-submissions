class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
         let adj = Array.from({length :n},()=>[])
        for(let[a,b] of edges){
            adj[a].push(b)
            adj[b].push(a)
        }
        let visited = new Set()
        let count = 0
        const dfs=(node)=>{
            visited.add(node)
            for(let c of adj[node]){
                if(!visited.has(c))dfs(c)
            }  
        }
        for(let i = 0 ; i <n ; i++){
            if(!visited.has(i)){
                count++
                dfs(i)
            }
        }
        return count

    }
}
