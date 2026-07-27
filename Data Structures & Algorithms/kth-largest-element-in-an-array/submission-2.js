class Solution {
    add(val){
        if(this.heap.length < this.k){
            this.heap.push(val)
            this.up(this.heap.length-1)
        }
        else if(this.heap[0] < val){
              this.heap[0] = val
              this.down(0)
        }

    }

    up(idx){
        while (idx > 0){
            let parent = Math.floor((idx-1)/2)
            if(this.heap[idx] > this.heap[parent])break
            [this.heap[idx],this.heap[parent]] = [this.heap[parent], this.heap[idx]]
            idx = parent
        }

    }

    down(idx){
    let smallest = 0
    while(idx<this.k){  
        let left = 2* idx +1
        let right = 2 * idx +2
        if(left < this.k && this.heap[left] < this.heap[smallest]) smallest = left
        if(right < this.k && this.heap[right] < this.heap[smallest]) smallest = right 
        if(smallest == idx)break
        [this.heap[idx],this.heap[smallest]] = [this.heap[smallest] ,this.heap[idx]]
        idx = smallest
     }
    }
    /**
     * 
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
     this.heap = []
     this.k = k
     for(let n of nums)this.add(n)
     return this.heap[0]

    }
}
