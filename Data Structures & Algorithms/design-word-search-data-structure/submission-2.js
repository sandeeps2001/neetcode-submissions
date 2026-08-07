class WordDictionary {
    constructor() {
        this.root = {}
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let node  = this.root
        for(let ch of word){
            if(!node[ch])node[ch] ={}
            node = node[ch]
        }
        node.isEnd = true
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
      let dfs = (node, i)=>{
         if(i == word.length )return node.isEnd === true
         let ch = word[i]
         if(ch == '.'){
            for(let s in node){
                if (s === 'isEnd')continue
                if(dfs(node[s] , i+1))return true            
            }
            return false

         }
         else{
            if(!node[ch])return false
            return dfs(node[ch] ,i+1)
         }
      }
      return dfs(this.root ,0)
        
    }
}
