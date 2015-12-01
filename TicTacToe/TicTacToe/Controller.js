/// <reference path="TicTacToe_prototype_pattern.js" />
/// <reference path="jquery-1.9.1.js" />

$(function () {
    var myNS = myNS || {};
    myNS.ticTacToe = new TicTacToe('X');

    // Initialize a game
    myNS.ticTacToe.newGame();

    $("#newGame").on("click", function () {
        $("div.box").text('');
        myNS.ticTacToe.newGame();
    });

    // Attach Event Handlers to the boxes.
    $("div.box").on("click", function () {
        // Get the box div
        var box = $(this);

        var value = box.text();

        // if an element already exists
        if (value != '' || myNS.ticTacToe.IsGameOver() || myNS.ticTacToe.IsWinningCondition()) {
            alert("Move not possible.")
            return;
        }

        // Get the data-pos attribute
        var pos = parseInt(box.attr("data-pos"));

        var x = Math.floor(pos/3);;
        var y = pos % 3;

        var currChar = myNS.ticTacToe.getCurrentPlayerCharacter();

        myNS.ticTacToe.insert(x, y, currChar);

        box.text(currChar);

        if (myNS.ticTacToe.IsWinningCondition()){
            alert('Player ' + myNS.ticTacToe.getCurrentPlayerCharacter() + ' has won');
        }
        else if (myNS.ticTacToe.IsGameOver()){
            alert('Game Over');
        }
        else {
            if(currChar == 'O')
                myNS.ticTacToe.setCurrentPlayerCharacter('X');
            else
                myNS.ticTacToe.setCurrentPlayerCharacter('O');
        }
    });

});


