const sizeButton = document.querySelector('.size');
const colorPicker = document.querySelector('#colorpicker')
const clearButton = document.querySelector('.clear');
const gridLinesButton = document.querySelector('.grid-lines');
const pane = document.querySelector('.container');
const eraser = document.querySelector('.eraser');
const defaultColor = "black";
let newElements = [];
let count = pane.childElementCount;


function getSize(){
    let size  = prompt("Declare the size of your board: ", 1) //get size
    parseInt(size,10) // convert it to a number
    if(size<1 || size>100){
        return alert('ERROR');
    }
    return size;
}


function def(arr,i,color){
    arr[i].style.backgroundColor = `${color}`
}

function removeEventListeners(count){
    for(let i = 0;i<count;i++){
        pane.childNodes[i].removeEventListener('mouseover',()=>{def(newElements,i)})
        pane.childNodes[i].removeEventListener('mousedown',()=>{def(newElements,i)})

    }
}

function makePane(){
    while(pane.firstChild){
        pane.removeChild(pane.lastChild)
    }
    colorPicker.value = "#FFFFFF"
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
}   


function changeColor(value){
    count = pane.childElementCount;
    for(let i = 0;i<count;i++){
        pane.childNodes[i].addEventListener('mouseover',()=>{def(newElements,i,value)})
        pane.childNodes[i].addEventListener('mousedown',()=>{def(newElements,i,value)})

    }
}

function clearPane(){
    for(let i = 0;i<count;i++){
        pane.childNodes[i].style.backgroundColor = "white";
    }
}

function toggleLines(){
    for(let i = 0;i<pane.childNodes.length;i++)
    pane.childNodes[i].classList.toggle('grid-lines');
}

function setErasor(){
    let white  = 'white'
    removeEventListeners(count);
    for(let i = 0;i<count;i++){
        pane.childNodes[i].addEventListener('mouseover',()=>{def(newElements,i,white)})
        pane.childNodes[i].addEventListener('mousedown',()=>{def(newElements,i,white)})

    }
}

sizeButton.addEventListener('click', ()=>makePane())
clearButton.addEventListener('click', ()=>clearPane())
gridLinesButton.addEventListener('click', ()=>toggleLines());
eraser.addEventListener('click', ()=>setErasor())
colorPicker.onchange = (e) => changeColor(e.target.value)


