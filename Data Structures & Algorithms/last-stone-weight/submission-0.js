class Solution {
    buildmaxheap(stones){
       this.heap = []
    for(let n of stones)this.push(n)
    }
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
    this.buildmaxheap(stones)
     while (this.heap.length > 1){
        let x = this.pop()
        let y = this.pop()
        if(x != y)this.push(x - y)  
     }
     return this.heap.length==1 ? this.heap[0] : 0 
    }


    /**
     * @param {number} val
     * @return {number}
     */
    pop() {
        let  top = this.heap[0]  
        let last  = this.heap.pop()
        if(this.heap.length > 0){
            this.heap[0] = last
            this.shiftdown(0)
        }
    return top

    }

    push(val){
    this.heap.push(val)
    this.shiftup(this.heap.length-1)
    }


    shiftup(idx){
        while(idx > 0){
        let parent = Math.floor((idx -1)/2)
        if(this.heap[parent] > this.heap[idx])break
        [this.heap[idx],this.heap[parent]] = [this.heap[parent],this.heap[idx]]
        idx = parent 
        }
    }


    shiftdown(idx){
        while(true){
        let largest = idx
        let left = 2*idx + 1
        let right = 2*idx + 2
        if( this.heap[left] > this.heap[largest])largest =left
        if( this.heap[right]> this.heap[largest])largest = right
        if(largest == idx)break
        [this.heap[largest],this.heap[idx]] = [this.heap[idx],this.heap[largest]]
        idx = largest 
    }
}
}

