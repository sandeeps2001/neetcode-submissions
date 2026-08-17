class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
       let adj = Array.from({length : numCourses }, ()=> [])
       let indegree = new Array(numCourses).fill(0)
       for(let [a,b] of prerequisites ){
         adj[b].push(a)
         indegree[a]++
       }
       let q = []
       for(let c= 0 ; c<numCourses ; c++){
        if(indegree[c] == 0)q.push(c)
       }
       let order = []
       while(q.length > 0){
        let courses = q.shift()
        order.push(courses)
        for(let next of adj[courses]){
            indegree[next]--
            if(indegree[next] == 0)q.push(next)
       }
       }
      return order.length == numCourses ? order :[]



    }
}
