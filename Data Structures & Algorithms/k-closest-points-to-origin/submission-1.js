class Solution {
    push(arr){
        let val = arr[0]*arr[0] + arr[1]*arr[1]
        if(this.heap.length < this.k){
            this.heap.push([val ,arr])
            this.up(this.heap.length-1)
        }
        else if(val < this.heap[0][0]){
            this.heap[0] = [val,arr]
            this.down(0)
        }
        
    }

    down(idx){
        let largest = 0
        while(idx < this.k){
            let left  = 2*idx+1  
            let right = 2*idx+2
            if(left < this.k && this.heap[left][0] > this.heap[largest][0]) largest = left
            if(right < this.k && this.heap[right][0] > this.heap[largest][0]) largest = right
            if(largest  === idx)break
            [this.heap[largest],this.heap[idx]] = [this.heap[idx],this.heap[largest]]
            idx = largest
        
        }

    }
    up(idx){
      while(idx>0){
      let parent = Math.floor((idx-1)/2)
      if(this.heap[parent][0] > this.heap[idx][0])break
      [this.heap[parent],this.heap[idx]] = [this.heap[idx],this.heap[parent]]
      idx = parent
    }
    }
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        this.heap = []
    this.k = k
    for(let n of points)this.push(n)
    return this.heap.map(v => v[1])

    }
}
