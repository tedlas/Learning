'use strict';

ticTacToeApp.controller("ticTacToeController", function ($scope) {
    $scope.board = [['', '', ''], ['', '', ''], ['', '', '']];
    $scope.currentPlayerChar = 'X';
    $scope.msg = '';
    
    $scope.newGame = function () {
        
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                $scope.board[i][j] = '';
            }
        }

        $scope.msg = '';
    };

    $scope.insert = function (x, y, character) {
        if ($scope.board[x][y] == '') {
            $scope.board[x][y] = character;

            if ($scope.isWinningCondition()) {
                $scope.msg = 'Player ' + $scope.getCurrentPlayerCharacter() + ' has won';
            }
            else if ($scope.isGameOver()) {
                $scope.msg = 'Game Over';
            }
            else {
                if (character == 'O')
                    $scope.setCurrentPlayerCharacter('X');
                else
                    $scope.setCurrentPlayerCharacter('O');
            }

        }
    };

    $scope.isWinningCondition = function () {
        return $scope.isCellValueSameForRow(0) || $scope.isCellValueSameForRow(1) || $scope.isCellValueSameForRow(2) ||
                $scope.isCellValueSameForColumn(0) || $scope.isCellValueSameForColumn(1) || $scope.isCellValueSameForColumn(2) ||
                $scope.isCellValueSameDiagnolly();
    };

    $scope.isCellValueSameForRow = function (row) {
        return ($scope.board[row][0] != '' && $scope.board[row][0] == $scope.board[row][1] && $scope.board[row][1] == $scope.board[row][2]);
    };

    $scope.isCellValueSameForColumn = function (col) {
        return ($scope.board[0][col] != '' && $scope.board[0][col] == $scope.board[1][col] && $scope.board[1][col] == $scope.board[2][col]);
    };

    $scope.isCellValueSameDiagnolly = function () {
        return ($scope.board[0][0] != '' && $scope.board[0][0] == $scope.board[1][1] && $scope.board[1][1] == $scope.board[2][2]) ||
                ($scope.board[0][2] != '' && $scope.board[0][2] == $scope.board[1][1] && $scope.board[1][1] == $scope.board[2][0]);
    };

    $scope.isGameOver = function () {
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                if ($scope.board[i][j] == '')
                    return false;
            }
        }
        return true;
    };

    $scope.setCurrentPlayerCharacter = function (playerChar) {
        $scope.currentPlayerChar = playerChar;
    };

    $scope.getCurrentPlayerCharacter = function () {
        return $scope.currentPlayerChar;
    };

});