var createChessBoard = function (size) {
    if (isNaN(size) || (size % 40) !== 0 ) {
        alert('Вы либо ввели некорректное число, либо число не кратное 40. Отрисована стандартная доска');
        size = 160;
    }
    var chessBoard = $('<div></div>');
    chessBoard.attr('id', 'chessBoard');
    chessBoard.css({
       'width': size + 'px',
       'height': size + 'px'
    });
    $('body').prepend(chessBoard);
    var divColor;
    var divsCount = Math.pow((size / 20), 2);
    console.log(divsCount);
    for (var i = 0; i < divsCount; i++) {
        divColor = (parseInt((i / (size / 20)) + i) % 2 === 0) ? 'black' : 'white';
        $("#chessBoard").append($("<div></div>").css('background', divColor));
    }
};