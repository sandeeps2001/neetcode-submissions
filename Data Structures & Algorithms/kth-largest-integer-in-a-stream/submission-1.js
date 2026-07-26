class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.k = k
    this.heap = []
    for(let n of nums)this.add(n)
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
    if(this.heap.length < this.k){
     this.push(val)
    }
    else if(val > this.heap[0]){
        this.heap[0] = val 
        this.shiftdown(0)
    }
    return this.heap[0]

    }

    push(val){
    this.heap.push(val)
    this.shiftup(this.heap.length-1)
    }


    shiftup(idx){
        while(idx>0){
        let parent = Math.floor((idx -1)/2)
        if(this.heap[parent] < this.heap[idx])break
        [this.heap[idx],this.heap[parent]] = [this.heap[parent],this.heap[idx]]
        idx = parent 
        }
    }


    shiftdown(idx){
        let k = this.heap.length
        while(idx < k){
        let smallest = idx
        let left = 2*idx + 1
        let right = 2*idx + 2
        if(idx < k && this.heap[left] < this.heap[smallest])smallest =left
        if(idx < k && this.heap[right]< this.heap[smallest])smallest = right
        if(smallest == idx)break
        [this.heap[smallest],this.heap[idx]] = [this.heap[idx],this.heap[smallest]]
        idx = smallest 
    }
}
}