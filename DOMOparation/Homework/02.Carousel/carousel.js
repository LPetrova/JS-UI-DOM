function generateRandomNumber(to, from) {
    if (!from) {

        from = 0;
    }
    if (!to) {
        to = 100;
    }

    return Math.floor(Math.random() * (to - from) + from);
}

function generateColor() {
    var randomRed = generateRandomNumber(255);
    var randomGreen = generateRandomNumber(255);
    var randomBlue = generateRandomNumber(255);

    return 'rgb(' + randomRed + ',' + randomGreen + ',' + randomBlue + ')';
}

function generateDiv() {
    var width = 10;
    var height = 10;

    var leftPos = 50;
    var topPos = 50;

    var borderRadius = 10;
    var borderWidth = 2;

    var div = document.createElement('div');
    var strong = document.createElement('strong');
    var strongContent = document.createTextNode('DIV');

    //strong.appendChild(strongContent);
    div.appendChild(strong);

    div.style.position = 'absolute';
    div.style.left = leftPos + 'px';
    div.style.top = topPos + 'px';
    div.style.margin = 250 + 'px';
    div.style.width = width + 'px';
    div.style.height = height + 'px';
    div.style.backgroundColor = generateColor();
    div.style.border = borderWidth + 'px solid ' + generateColor();
    div.style.borderRadius = borderRadius + 'px';

    document.body.appendChild(div);
}


var i = 0;

for(i = 0; i < 50; i++) {
    generateDiv();
}

var allDivs = document.querySelectorAll('div');
var angle = 0;
var radius = 50;

function animateDiv () {
    for(i = 0; i < 50; i++) {
        allDivs[i].style.left = Math.cos(angle + 2 * Math.PI / allDivs.length * i) / radius * 1000 + 'px';
        allDivs[i].style.top = Math.sin(angle + 2 * Math.PI / allDivs.length * i) / radius * 1000+ 'px';

    }

    angle = angle + 0.1;

    setTimeout(animateDiv, 40);
}

animateDiv();
