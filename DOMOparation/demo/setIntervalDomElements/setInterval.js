var wrapper = document.getElementById('wrapper');
var counter = 0;

function addElement(){
    var newElement = document.createElement('div');//create element
    counter += 1;
    if(counter === 1){
        newElement.innerHTML = counter + ' second'
    } else {
        newElement.innerHTML = counter + ' seconds';
        newElement.id = 'added_div_' + counter;
    }

    wrapper.appendChild(newElement); //add create element
}

setInterval(addElement, 1000);