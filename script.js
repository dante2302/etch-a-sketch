const sizeButton = document.querySelector('.size');
const rainbowButton = document.querySelector('.rainbow');
const colorPicker = document.querySelector('#colorpicker')
const clearButton = document.querySelector('.clear');
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
    for(let i = 0;i<size**2;i++){
        newElements[i] = document.createElement('div');
        newElements[i].classList.add('default');
    }
    for(let i = 0;i<size**2;i++){
        pane.appendChild(newElements[i])
    }
    for(let i = 0;i<size**2;i++){
        newElements[i].addEventListener('dragover',()=>{
            newElements[i].style.backgroundColor = "red"})
        }
}   


function eventListeners(){

}

function clearPane(){
    for(let i =0;i<size;i++){
        newElements[i].classList.add('.default')
    }
}

sizeButton.addEventListener('click', ()=>makePane())
clearButton.addEventListener('click', ()=>clearPane())



