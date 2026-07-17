class LRUCache {

    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity
        this.h =  new Map()
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(this.h.has(key)){
            let val = this.h.get(key)
            this.h.delete(key)
            this.h.set(key,val)
            return val
        }
        return -1

    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.h.has(key))this.h.delete(key)
        this.h.set(key,value)
        if(this.h.size > this.capacity){
        let lrukey = this.h.keys().next().value
        this.h.delete(lrukey)
        }
    }
}
