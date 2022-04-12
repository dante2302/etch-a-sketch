const sizeButton = document.querySelector('.size');
const rainbowButton = document.querySelector('.rainbow');
const colorPicker = document.querySelector('#colorpicker')
const clearButton = document.querySelector('.clear');
const gridLinesButton = document.querySelector('.grid-lines');
const pane = document.querySelector('.container');
const eraser = document.querySelector('.eraser');

function getSize(){
    let size  = prompt("Declare the size of your board: ", 1) //get size
    parseInt(size,10) // convert it to a number
    if(size<1 || size>100){
        return alert('ERROR');
    }
    return size;
}

function makePane(){
    let size = getSize(); 
    pane.style.gridTemplateColumns = `repeat(${size}, auto)`;
    pane.style.gridTemplateRows = `repeat(${size}, auto)`;
    let newElements = []; // declare an array for the new divs
    for(let i = 0;i<size*size;i++){
        newElements[i] = document.createElement('div');
        newElements[i].classList.add('default');
    }// create new divs
    for(let i = 0;i<size*size;i++){
        pane.appendChild(newElements[i])
    }// append new divs
    for(let i = 0;i<size*size;i++){
        newElements[i].addEventListener('dragover',()=>{

            newElements[i].style.backgroundColor = "red"})
    }// add event listeners to new divs
}   
function clearPane(){
    let count = pane.childElementCount;
    while(pane.firstChild){
        pane.removeChild(pane.lastChild)
    }
    makePane();
}
function toggleLines(){
    pane.children.classList.toggle('grid-lines');
}
function eventListeners(){

}

sizeButton.addEventListener('click', ()=>makePane())
clearButton.addEventListener('click', ()=>clearPane())
gridLinesButton.addEventListener('click', ()=>toggleLines());



