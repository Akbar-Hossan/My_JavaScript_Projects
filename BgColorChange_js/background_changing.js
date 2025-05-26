const body =document.getElementById('body');

function setColor(name){
    body.style.backgroundColor=name;

}

function randomColor(){

    const red =Math.round(Math.random()*255);
    const green = Math.round(Math.random()*255);
    const blue = Math.round(Math.random()*255);

let color =`rgb(${red}, ${green}, ${blue})`;

    setColor(color);
}
