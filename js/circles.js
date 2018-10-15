var getRandomColor = function () {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

var getRandomCircleSize = function () {
    return Math.floor(Math.random() * 151) + 50
};

var generateCircle = function(size, color) {
    if (size > 200 || size < 50) {
        return console.log('Circle size must be in 50-200px');
    }

    var circle = {
        element: $('<div></div>'),
        size: size,
        color: color
    };

    circle.element.css({
        'width': size + 'px',
        'height': size + 'px',
        'border-radius': '50%',
        'position': 'absolute',
        'background': color
    });

    return circle
};

var drawCircle = function (circle, posX, posY) {
    circle.element.css({
        top: posY + 'px',
        left: posX + 'px'
    });
    return $('body').prepend(circle.element);
};

var drawCircles = function (count) {
    var circle;
    for (var i = 0; i < count; i++) {
        circle = generateCircle(getRandomCircleSize(), getRandomColor());
        var posX = (Math.random() * ($(document).width() - circle.size)).toFixed();
        var posY = (Math.random() * ($(document).height() - circle.size)).toFixed();
        drawCircle(circle, posX, posY);
    }
};
