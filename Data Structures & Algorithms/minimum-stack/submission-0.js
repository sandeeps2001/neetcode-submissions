class MinStack {
    constructor() {
        this.min = Infinity;
        this.stack = []

    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if(this.stack.length === 0){
            this.stack.push(0);
            this.min = val
        }
        else{
            this.stack.push(val - this.min )
            if(val < this.min) this.min = val

        }
        }

    /**
     * @return {void}
     */
    pop() {
        let pop = this.stack.pop()
        if(pop<0)this.min -= pop
        
    }

    /**
     * @return {number}
     */
    top() {
     let top = this.stack[this.stack.length-1]
     if(top>0)return this.min + top
     else return this.min
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.min
    }
}
