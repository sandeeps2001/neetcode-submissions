class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        let adj = Array.from({length : numCourses}, ()=>[] )
        let indegree = new Array(numCourses).fill(0)

        for(const [a,b] of prerequisites ){
            adj[b].push(a)
            indegree[a]++
        }
        const q = []
        for(let c = 0 ; c<numCourses ; c++){
            if(indegree[c]===0)q.push(c)
        }
        let taken  = 0 
        while(q.length > 0){
            let c = q.shift()
            taken++
            for(let n of adj[c]){
                indegree[n]--
                if(indegree[n] == 0 )q.push(n)
            }
        }
        return taken === numCourses 
    }
}
