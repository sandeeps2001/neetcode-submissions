class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        
        let counts = {};
        for (let t of tasks) counts[t] = (counts[t] || 0) + 1;
        this.heap = [];
        for (let c of Object.values(counts)) this.push(c);

        let time = 0;
        let queue = [];   
       
        while (this.heap.length > 0 || queue.length > 0) {
            time++;  
       
            if (this.heap.length > 0) {
                let count = this.pop() - 1;         
                if (count > 0) {
                    queue.push([count, time + n]);   
                }
            }
           

            if (queue.length > 0 && queue[0][1] === time) {
                let front = queue.shift();
                this.push(front[0]);                 
            }
        }
 
        return time;
    }
 
 
    push(val) {
        this.heap.push(val);
        this.up(this.heap.length - 1);
    }
 
    pop() {
        let top = this.heap[0];
        let last = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.down(0);
        }
        return top;
    }
 
    up(idx) {
        while (idx > 0) {
            let parent = Math.floor((idx - 1) / 2);
            if (this.heap[parent] > this.heap[idx]) break;   // max-heap: parent bigger -> stop
            [this.heap[parent], this.heap[idx]] = [this.heap[idx], this.heap[parent]];
            idx = parent;
        }
    }
 
    down(idx) {
        let size = this.heap.length;
        while (true) {
            let largest = idx;
            let left = 2 * idx + 1;
            let right = 2 * idx + 2;
            if (left  < size && this.heap[left]  > this.heap[largest]) largest = left;
            if (right < size && this.heap[right] > this.heap[largest]) largest = right;
            if (largest === idx) break;
            [this.heap[idx], this.heap[largest]] = [this.heap[largest], this.heap[idx]];
            idx = largest;
        }
    }

}
