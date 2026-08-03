class Solution {
    dfs(r, c, i, board, word) {
        if (i === word.length) return true;
        if (
            r < 0 ||
            c < 0 ||
            r >= this.rows ||
            c >= this.cols ||
            board[r][c] !== word[i] ||
            board[r][c] === "#"
        ) {
            return false;
        }
        board[r][c] = "#";
        const res =
            this.dfs(r + 1, c, i + 1,board ,word) ||
            this.dfs(r - 1, c, i + 1,board,word) ||
            this.dfs(r, c + 1, i + 1,board, word) ||
            this.dfs(r, c - 1, i + 1, board , word);
        board[r][c] = word[i];
        return res;
    }

    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        this.rows = board.length;
        this.cols = board[0].length;
        for (let r = 0; r < this.rows; r++) {
            for (let c = 0; c < this.cols; c++) {
                if (this.dfs(r, c, 0, board, word)) return true;
            }
        }
        return false;
    }
}
