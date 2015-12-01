/// <reference path="TicTacToe_prototype_pattern.js" />
/// <reference path="TicTacToe_module_pattern.js" />
/// <reference path="jquery-1.9.1.js" />

$(function () {
    myNS = myNS || {};
    
    // with prototype pattern
    //ticTacToe = new myNS.TicTacToe('X');

    // with Module pattern
    ticTacToe = new myNS.TicTacToeMP('X'); 

    // Initialize a game
    ticTacToe.newGame();

    $("#newGame").on("click", function () {
        $("div.box").text('');
        ticTacToe.newGame();
    });

    // Attach Event Handlers to the boxes.
    $("div.box").on("click", function () {
        // Get the box div
        var box = $(this);

        var value = box.text();

        // if an element already exists
        if (value != '' || ticTacToe.IsGameOver() || ticTacToe.IsWinningCondition()) {
            alert("Move not possible.")
            return;
        }

        // Get the data-pos attribute
        var pos = parseInt(box.attr("data-pos"));

        var x = Math.floor(pos/3);;
        var y = pos % 3;

        var currChar = ticTacToe.getCurrentPlayerCharacter();

        ticTacToe.insert(x, y, currChar);

        box.text(currChar);

        if (ticTacToe.IsWinningCondition()){
            alert('Player ' + ticTacToe.getCurrentPlayerCharacter() + ' has won');
        }
        else if (ticTacToe.IsGameOver()){
            alert('Game Over');
        }
        else {
            if(currChar == 'O')
                ticTacToe.setCurrentPlayerCharacter('X');
            else
                ticTacToe.setCurrentPlayerCharacter('O');
        }
    });

});


