var TicTacToe = function (playerChar) {
    this.board = [['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', '']];
    this.currentPlayerChar = playerChar;
}

TicTacToe.prototype = {
    newGame: function () {
                for(var i =0; i < 3; i++)
                {
                    for(var j = 0; j < 3; j++)
                    {
                        this.board[i][j] = '';
                    }
                }
    },

    insert: function (x, y, character) {
        if (this.board[x][y] == '') {
            this.board[x][y] = character;
        }
    },

    IsWinningCondition: function () {
        return this.IsCellValueSameForRow(0) || this.IsCellValueSameForRow(1) || this.IsCellValueSameForRow(2) ||
                this.IsCellValueSameForColumn(0) || this.IsCellValueSameForColumn(1) || this.IsCellValueSameForColumn(2) ||
                this.IsCellValueSameDiagnolly();
    },

    IsCellValueSameForRow: function (row) {
        return (this.board[row][0] != '' && this.board[row][0] == this.board[row][1] && this.board[row][1] == this.board[row][2]);
    },

    IsCellValueSameForColumn: function (col) {
        return (this.board[0][col] != '' && this.board[0][col] == this.board[1][col] && this.board[1][col] == this.board[2][col]);
    },

    IsCellValueSameDiagnolly : function(){
        return (this.board[0][0] != '' && this.board[0][0] == this.board[1][1] && this.board[1][1] == this.board[2][2]) ||
                (this.board[0][2] != '' && this.board[0][2] == this.board[1][1] && this.board[1][1] == this.board[2][0]);
    },
    IsGameOver: function () {
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                if (this.board[i][j] == '')
                    return false;
            }
        }
        return true;
    },
    setCurrentPlayerCharacter: function (playerChar) {
        this.currentPlayerChar = playerChar;
    },
    getCurrentPlayerCharacter: function () {
        return this.currentPlayerChar;
    }
    
}

