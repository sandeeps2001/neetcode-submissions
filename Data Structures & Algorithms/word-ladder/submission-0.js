class Solution {
    /**
     * @param {string} beginWord
     * @param {string} endWord
     * @param {string[]} wordList
     * @return {number}
     */
    ladderLength(beginWord, endWord, wordList) {
     let wordset = new Set(wordList)
     if (!wordset.has(endWord)) return 0;  
     
     let q = [[beginWord,1]]
     let visited = new Set([beginWord])
     while(q.length > 0){
        
        let [word , steps] = q.shift()
        
        if(word === endWord) return steps;
        for(let i =0 ; i<word.length ; i++){
            for(let ch = 97 ; ch<=122 ; ch++){
                const next = word.slice(0,i) + String.fromCharCode(ch)+word.slice(i+1)
                if(wordset.has(next) && !visited.has(next)){
                visited.add(next)
                q.push([next,steps+1]);
                }
            }
        }


     }
     return 0
    }
}
