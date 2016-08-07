function solve() {
    function traverseElement(element, indent) {
        var child = element.firstChild,
            content;

        if(element.nodeName === "#text"){
            content = element.textContent.trim();
            if (content){
                console.log(indent + content)
            }
        } else {
            console.log(indent + "start of : " + element.nodeName);
            while (child) {
                traverseElement(child, indent + "--");
                child = child.nextSibling;
            }
           console.log(indent + "end of : " + element.nodeName);
        }
    }
    traverseElement(document,"");
}
solve();