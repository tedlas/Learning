var myNS = myNS || {};

myNS.TicTacToe = function (playerChar) {
    this.board = [['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', '']];
    this.currentPlayerChar = playerChar;
}

myNS.TicTacToe.prototype = {
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

    isWinningCondition: function () {
        return this.isCellValueSameForRow(0) || this.isCellValueSameForRow(1) || this.isCellValueSameForRow(2) ||
                this.isCellValueSameForColumn(0) || this.isCellValueSameForColumn(1) || this.isCellValueSameForColumn(2) ||
                this.isCellValueSameDiagnolly();
    },

    isCellValueSameForRow: function (row) {
        return (this.board[row][0] != '' && this.board[row][0] == this.board[row][1] && this.board[row][1] == this.board[row][2]);
    },

    isCellValueSameForColumn: function (col) {
        return (this.board[0][col] != '' && this.board[0][col] == this.board[1][col] && this.board[1][col] == this.board[2][col]);
    },

    isCellValueSameDiagnolly : function(){
        return (this.board[0][0] != '' && this.board[0][0] == this.board[1][1] && this.board[1][1] == this.board[2][2]) ||
                (this.board[0][2] != '' && this.board[0][2] == this.board[1][1] && this.board[1][1] == this.board[2][0]);
    },
    isGameOver: function () {
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

