

class Heap{

constructor(comparator){
this.data = []
this.comparator = comparator
}
up(idx){
       while (idx > 0) {
            let parent = Math.floor((idx - 1) / 2);
            if (this.comparator(this.data[parent], this.data[idx])) break;
            [this.data[parent], this.data[idx]] = [this.data[idx], this.data[parent]];
            idx = parent;
        }
    

}

down(idx){
       let size = this.data.length;
        while (true) {
            let best = idx;
            let left = 2 * idx + 1;
            let right = 2 * idx + 2;
            if (left  < size && !this.comparator(this.data[best], this.data[left]))  best = left;
            if (right < size && !this.comparator(this.data[best], this.data[right])) best = right;
            if (best === idx) break;
            [this.data[idx], this.data[best]] = [this.data[best], this.data[idx]];
            idx = best;
        }
    }



push(val){
    this.data.push(val)
    this.up(this.data.length-1)

} 

pop(){
 let val = this.data[0]
 let last = this.data.pop()
 if(this.data.length > 0){
    this.data[0] = last 
 this.down(0)
 }
 return val
}

size(){
    return this.data.length
}

peak(){
return this.data[0]
}

}
class MedianFinder {
    constructor() {
        this.fmax= new Heap((a, b) => a > b);  
        this.lmin = new Heap((a, b) => a < b);  
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
   addNum(num) {
        // decide which half the newcomer belongs in (keeps ordering: lower <= upper)
        if (this.lmin.size() === 0 || num > this.lmin.peak()) {
            this.lmin.push(num);
        } else {
            this.fmax.push(num);
        }
   if(this.lmin.size() > this.fmax.size()+1){
     this.fmax.push(this.lmin.pop())
   }
   else if(this.fmax.size() > this.lmin.size()+1){
    this.lmin.push(this.fmax.pop())
   }
   }
    /**
     * @return {number}
     */
    findMedian() {
     if(this.lmin.size() > this.fmax.size()){
        return this.lmin.peak()
     }
     if(this.fmax.size() > this.lmin.size()){
        return this.fmax.peak()
     }
     else{ return (this.lmin.peak() + this.fmax.peak())/2
     
     }


    }
}
