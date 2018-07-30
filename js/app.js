'use strict'
//const mainContainer= document.getElementById("container-collage");

function dragStart(event) {
    event.dataTransfer.setData('text', event.target.id);
    console.log("io");
}

function dragOver(event) {
    console.log('drag');
    
}

function allowDrop(event) {
    event.preventDefault();
}


function drop(event) {
    event.preventDefault();
    let dropped = event.dataTransfer.getData('text');
    if(event.currentTarget.childNodes.length <= 0) {
    event.target.appendChild(document.getElementById(dropped));
    
    } else{
        return false;
    }

    //console.log(dropped);
    /*event.target.id.appendChild(dropped);
    console.log(droped);*/
    //let container = document.getElementById(dropped);
    //let newImage = document.createElement('img');
    //newImage.src= dropped.src;
    
}
