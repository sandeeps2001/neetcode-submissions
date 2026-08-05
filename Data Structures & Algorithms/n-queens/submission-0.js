class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
        let res = [];
        let cols = new Set();
        let diagonal1 = new Set();
        let diagonal2 = new Set();
        let board = Array.from({ length: n }).map(x => new Array(n).fill("."));

        const dfs = (r) => {
            if (r == n) {
                res.push(board.map(x => x.join("")));
                return;
            }
            for (let c = 0; c < n; c++) {
                if(cols.has(c) || diagonal1.has(r - c) || diagonal2.has(r + c)) continue;

                board[r][c] = 'Q';

                cols.add(c);
                diagonal1.add(r - c);
                diagonal2.add(r + c);
                dfs(r + 1);

                board[r][c] = '.';
                cols.delete(c);
                diagonal1.delete(r - c);
                diagonal2.delete(r + c);
            }
        };
        dfs(0)
        return res
    }
}
