//enrgister dans une variable les element css 

function drag(evt) {
    //evt.dataTransfer.setData("text", evt.target.id);
    evt.dataTransfer.setData(Element.className, evt.target.id);

}

// passer
function dragover(evt) {
    evt.preventDefault();
}
function drop(evt) {
    evt.preventDefault();
    //var image = evt.dataTransfer.getData("text");
    var boxe  = evt.dataTransfer.getData(Element.className);
    //evt.target.appendChild(document.getElementById(image));
    evt.target.appendChild(document.getElementById(boxe));
    
}