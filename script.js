const sizeButton = document.querySelector('.size');
const rainbowButton = document.querySelector('.rainbow');
const colorPicker = document.querySelector('#colorpicker')
const clearButton = document.querySelector('.clear');
const gridLinesButton = document.querySelector('.grid-lines');
const pane = document.querySelector('.container');
const eraser = document.querySelector('.eraser');

const defaultColor = "black"
let newElements = []

function getSize(){
    let size  = prompt("Declare the size of your board: ", 1) //get size
    parseInt(size,10) // convert it to a number
    if(size<1 || size>100){
        return alert('ERROR');
    }
    return size;
}


function makePane(){
    while(pane.firstChild){
        pane.removeChild(pane.lastChild)
    }
    let size = getSize(); 
    pane.style.gridTemplateColumns = `repeat(${size}, auto)`;
    pane.style.gridTemplateRows = `repeat(${size}, auto)`;
    for(let i = 0;i<size*size;i++){
        newElements[i] = document.createElement('div');
        newElements[i].classList.add('default');
    }// create new divs
    for(let i = 0;i<size*size;i++){
        pane.appendChild(newElements[i])
    }// append new divs
    for(let i = 0;i<size*size;i++){
        newElements[i].addEventListener('mouseover',()=>{def(newElements,i,defaultColor)})
        newElements[i].addEventListener('mousedown',()=>{def(newElements,i,defaultColor)})
    }// add event listeners to new divs
}   
function def(arr,i,color){
    arr[i].style.backgroundColor = `${color}`
}

function clearPane(){
    let count = pane.childElementCount
    for(let i = 0;i<count;i++){
        pane.childNodes[i].style.backgroundColor = "white";
    }
}

function toggleLines(){
    for(let i = 0;i<pane.childNodes.length;i++)
    pane.childNodes[i].classList.toggle('grid-lines');
}


// function setErasor(){
//     for(let i = 0;i<pane.childElementCount;i++){
//         pane.childNodes[i].addEventListener('click', (e)=>)
//     }
// }

sizeButton.addEventListener('click', ()=>makePane())
clearButton.addEventListener('click', ()=>clearPane())
gridLinesButton.addEventListener('click', ()=>toggleLines());
eraser.addEventListener('click', ()=>setErasor())
colorPicker.onchange = (e) => changeColor(e.target.value)
function changeColor(value){
    count = pane.childElementCount;
    for(let i = 0;i<count;i++){
        pane.childNodes[i].removeEventListener('mouseover',()=>{def(newElements,i,defaultColor)})
        pane.childNodes[i].removeEventListener('mousedown',()=>{def(newElements,i,defaultColor)})

    }
    for(let i = 0;i<count;i++){
        pane.childNodes[i].addEventListener('mouseover',()=>{def(newElements,i,value)})
        pane.childNodes[i].addEventListener('mousedown',()=>{def(newElements,i,value)})

    }
}
changeColor("#001524")