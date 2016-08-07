var text = document.getElementById('text');
console.log(text);

text.innerHTML = "I am here";
text.style.color = 'red';
console.log(text.id);

function makeVerySmall() {
    text.style.fontSize = '12px';
    text.style.color = 'red';
    setTimeout(makeSmall, 500);
}
function makeSmall() {
    text.style.fontSize = '22px';
    text.style.color = 'purple';
    setTimeout(makeMiddle, 500);
}

function makeMiddle() {
    text.style.fontSize = '32px';
    text.style.color = 'black';
    setTimeout(makeBig, 500);
}
function makeBig(){
    text.style.fontSize = '42px';
    text.style.color = 'blue';
    setTimeout(makeVerySmall, 500);
}
//makeBig();

function printElement(element) {
    console.log(element);

    for (var i = 0; i < element.childNodes.length; i+=1) {
        printElement(element.childNodes[i]);

    }

}

printElement(text);