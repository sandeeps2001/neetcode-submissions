class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!this.keyStore.has(key)) {
      this.keyStore.set(key, []);
    }
    this.keyStore.get(key).push([value, timestamp]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
      let res = ""
      let val = this.keyStore.get(key) || []
      let l = 0
      let r = val.length-1
      while(l <= r){
        let m = Math.floor((l+r)/2)
        if(val[m][1] <= timestamp){
            res = val[m][0]
            l = m+1
        }
        else{
            r = m-1
        }
      }
      return res
    }
}
