const container = document.querySelector('.container');
const sizeButton = document.querySelector('.size');
const rainbowButton = document.querySelector('.rainbow');
const colorPicker = document.querySelector('#colorpicker')
const clearButton = document.querySelector('.clear');
const pane = document.querySelector('.container');
const eraser = document.querySelector('.eraser');
let newElements = []; // declare an array for the


function getSize(){
    let size  = prompt("Declare the size of your board: ", 1)
    parseInt(size,10)
    if(size<1 || size>100){
        return alert('ERROR');
    }
    return size;
}
function makePane(){
    let size = getSize();
    for(let i = 0;i<size;i++){
        newElements[i] = document.createElement('div');
        pane.appendChild(newElements[i]);
    }
}
function clearPane(){
    pane.classList.add('.default')
}

sizeButton.addEventListener('click', ()=>getSize())
clearButton.addEventListener('click', ()=>clearPane())



