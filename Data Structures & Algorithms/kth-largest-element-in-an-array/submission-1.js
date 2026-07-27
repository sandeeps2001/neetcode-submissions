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
    let largest = 0
    while(idx<this.k){  
        let left = 2* idx +1
        let right = 2 * idx +2
        if(left < this.k && this.heap[left] < this.heap[largest]) largest = left
        if(right < this.k && this.heap[right] < this.heap[largest]) largest = right 
        if(largest == idx)break
        [this.heap[idx],this.heap[largest]] = [this.heap[largest] ,this.heap[idx]]
        idx = largest
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
