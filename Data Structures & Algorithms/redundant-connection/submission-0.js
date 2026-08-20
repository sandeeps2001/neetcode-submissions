class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {

        let n = edges.length
        let adj = Array.from({length : n+1}, () => [])

        let haspath = (a,b,visited)=>{
            if(a==b){
                return true 
            }
            visited.add(a)
            for(let next of adj[a]){
                if(!visited.has(next)){
                    if (haspath(next, b, visited)) return true;
                }
            }

        }

        for(let [a,b] of edges){
            if(haspath(a,b,new Set())){
                return [a,b]
            }
            adj[a].push(b)
            adj[b].push(a)
        }
        return []
    }
}
