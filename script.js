const container = document.querySelector('.container');
const rainbowButton = document.querySelector('.rainbow');
const clearButton = document.querySelector('.clear');
const eraser = document.querySelector('.eraser');


function getSize(){
    let size  = prompt("Declare the size of your board: ", 1)
    if(size>100){
        return alert('ERROR')
    }
    return size;
}