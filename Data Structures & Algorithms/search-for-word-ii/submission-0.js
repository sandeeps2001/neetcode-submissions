class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {
        let root = {}
        for(let w of words){
            let node = root
            for (let c of w ){
                if(!node[c])node[c] = {}
                node = node[c]  
            }
            node.word = w
        }
        const rows = board.length, cols = board[0].length;
        const res = []
      let dfs = (r,c, node)=>{
        if(r<0 || c<0 || r>=rows || c>=cols)return 
        let ch = board[r][c]
        if(ch == '#' || !node[ch])return 
        node = node[ch]
        if(node.word){
            res.push(node.word)
            node.word = null
        }

        const temp = board[r][c]
         board[r][c] = '#'
            dfs(r + 1, c, node);        
            dfs(r - 1, c, node);
            dfs(r, c + 1, node);
            dfs(r, c - 1, node);

            board[r][c] = temp

      }
         for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                dfs(r, c, root);
            }
        }
        return res;
    }
    }

