var myNS = myNS || {};

myNS.TicTacToeMP = function (playerChar) {
    var board = [['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', '']],
        currentPlayerChar = playerChar;

    return {
        newGame: function () {
            for (var i = 0; i < 3; i++) {
                for (var j = 0; j < 3; j++) {
                    board[i][j] = '';
                }
            }
        },
        insert: function (x, y, character) {
            if (board[x][y] == '') {
                board[x][y] = character;
            }
        },
        isCellValueSameForRow: function (row) {
            return (board[row][0] != '' && board[row][0] == board[row][1] && board[row][1] == board[row][2]);
        },
        isCellValueSameForColumn: function (col) {
            return (board[0][col] != '' && board[0][col] == board[1][col] && board[1][col] == board[2][col]);
        },
        isCellValueSameDiagnolly: function () {
            return (board[0][0] != '' && board[0][0] == board[1][1] && board[1][1] == board[2][2]) ||
                    (board[0][2] != '' && board[0][2] == board[1][1] && board[1][1] == board[2][0]);
        },
        isWinningCondition: function () {
            return this.isCellValueSameForRow(0) || this.isCellValueSameForRow(1) || this.isCellValueSameForRow(2) ||
                    this.isCellValueSameForColumn(0) || this.isCellValueSameForColumn(1) || this.isCellValueSameForColumn(2) ||
                    this.isCellValueSameDiagnolly();
        },
        isGameOver: function () {
            for (var i = 0; i < 3; i++) {
                for (var j = 0; j < 3; j++) {
                    if (board[i][j] == '')
                        return false;
                }
            }
            return true;
        },
        setCurrentPlayerCharacter: function (playerChar) {
            currentPlayerChar = playerChar;
        },
        getCurrentPlayerCharacter: function () {
            return currentPlayerChar;
        }
    }
}
