var myNS = myNS || {};

myNS.TicTacToeMP = function (playerChar) {
    var board = [['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', '']],
        currentPlayerChar = playerChar,
        newGame = function () {
            for (var i = 0; i < 3; i++) {
                for (var j = 0; j < 3; j++) {
                    board[i][j] = '';
                }
            }
        },
       insert = function (x, y, character) {
           if (board[x][y] == '') {
               board[x][y] = character;
           }
       },
       IsWinningCondition = function () {
           return IsCellValueSameForRow(0) || IsCellValueSameForRow(1) || IsCellValueSameForRow(2) ||
                   IsCellValueSameForColumn(0) || IsCellValueSameForColumn(1) || IsCellValueSameForColumn(2) ||
                   IsCellValueSameDiagnolly();
       },
       IsCellValueSameForRow = function (row) {
           return (board[row][0] != '' && board[row][0] == board[row][1] && board[row][1] == board[row][2]);
       },
       IsCellValueSameForColumn = function (col) {
           return (board[0][col] != '' && board[0][col] == board[1][col] && board[1][col] == board[2][col]);
       },
       IsCellValueSameDiagnolly = function () {
           return (board[0][0] != '' && board[0][0] == board[1][1] && board[1][1] == board[2][2]) ||
                   (board[0][2] != '' && board[0][2] == board[1][1] && board[1][1] == board[2][0]);
       },
        IsGameOver = function () {
            for (var i = 0; i < 3; i++) {
                for (var j = 0; j < 3; j++) {
                    if (board[i][j] == '')
                        return false;
                }
            }
            return true;
        },
        setCurrentPlayerCharacter = function (playerChar) {
            currentPlayerChar = playerChar;
        },
        getCurrentPlayerCharacter = function () {
            return currentPlayerChar;
        };

    return {
        newGame: newGame,
        insert: insert,
        IsWinningCondition: IsWinningCondition,
        IsCellValueSameForRow: IsCellValueSameForRow,
        IsCellValueSameForColumn: IsCellValueSameForColumn,
        IsCellValueSameDiagnolly: IsCellValueSameDiagnolly,
        IsGameOver: IsGameOver,
        setCurrentPlayerCharacter: setCurrentPlayerCharacter,
        getCurrentPlayerCharacter: getCurrentPlayerCharacter
    };
}