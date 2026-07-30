class Heap {
    constructor(compare) {
        this.data = [];
        this.compare = compare;             
    }
    size() { return this.data.length; }
    peek() { return this.data[0]; }
 
    push(val) {
        this.data.push(val);
        this.up(this.data.length - 1);
    }
 
    pop() {
        let top = this.data[0];
        let last = this.data.pop();
        if (this.data.length > 0) {
            this.data[0] = last;
            this.down(0);
        }
        return top;
    }
 
    up(idx) {
        while (idx > 0) {
            let parent = Math.floor((idx - 1) / 2);
            if (this.compare(this.data[parent], this.data[idx])) break;
            [this.data[parent], this.data[idx]] = [this.data[idx], this.data[parent]];
            idx = parent;
        }
    }
 
    down(idx) {
        let size = this.data.length;
        while (true) {
            let best = idx;
            let left = 2 * idx + 1;
            let right = 2 * idx + 2;
            if (left  < size && !this.compare(this.data[best], this.data[left]))  best = left;
            if (right < size && !this.compare(this.data[best], this.data[right])) best = right;
            if (best === idx) break;
            [this.data[idx], this.data[best]] = [this.data[best], this.data[idx]];
            idx = best;
        }
    }
}



class Twitter {
      constructor() {
        this.tweets = {};       
        this.following = {};    
        this.time = 0;           
    }
    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        if (!this.tweets[userId]) this.tweets[userId] = [];
        this.tweets[userId].push([this.time++, tweetId]);   

    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId){ 
        
        let heap = new Heap((a, b) => a[0] > b[0]);

        let sources = new Set();
        sources.add(userId);
        if (this.following[userId]) {
            for (let f of this.following[userId]) sources.add(f);
        }
        for (let ownerId of sources) {
            let arr = this.tweets[ownerId];
            if (arr && arr.length > 0) {
                let i = arr.length - 1;                       // newest is at the end
                heap.push([arr[i][0], arr[i][1], ownerId, i]);
            }
        }
            let res = [];
        while (res.length < 10 && heap.size() > 0) {
            let [ts, tweetId, ownerId, i] = heap.pop();
            res.push(tweetId);
            if (i > 0) {                                       // owner has an older tweet
                let arr = this.tweets[ownerId];
                let j = i - 1;
                heap.push([arr[j][0], arr[j][1], ownerId, j]);
            }
        }
        return res;
    }
    

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId){
        if (!this.following[followerId]) this.following[followerId] = new Set();
        this.following[followerId].add(followeeId);
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId){
    if (this.following[followerId]) {
            this.following[followerId].delete(followeeId);
        }
    }
}


