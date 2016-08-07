function iterateList(listId) {
    var trainerList = document.getElementById('listId');
    var parent = trainerList.parentNode;
    console.log("parent of traiter-List: " +
    parent.nodeName + " with id: " + parent.id);
    
    var children = trainerList.childNodes;
    console.log("elements in trainer-list: " + children.length);

    for (var i = 0; i < children.length; i++) {
        var subItem = children[i].innerHTML.trim();
        console.log(subItem.nodeName + " content: " +
        subItem.innerHTML);
        
    }
}