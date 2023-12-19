"use strict";
const opciones = document.querySelector(".opciones");
opciones.style.height = `${innerHeight}px`;
const canvas = document.getElementById("canvas");
canvas.setAttribute("width",`${innerWidth-95.141}px`);
canvas.setAttribute("height",opciones.style.height);
const datos = canvas.getBoundingClientRect();
const context = canvas.getContext("2d");

const borrar = document.querySelector(".borrar");
borrar.addEventListener("click",()=>{
    context.clearRect(0, 0, canvas.width, canvas.height);
});

let pintando=false,color,ancho,posX,posY;
canvas.addEventListener("mousedown",e=>{
    posX=e.clientX-datos.left;
    posY=e.clientY-datos.top;
    pintando=true;
    color=document.getElementById("color").value;
    ancho=document.getElementById("ancho").value;
    context.beginPath();
});
canvas.addEventListener("mousemove",e=>{
    if(pintando){
        pintar(posX,posY,e.clientX-datos.left,e.clientY-datos.top);
        posX=e.clientX-posX.left;
        posY=e.clientY-posY.top;
    }
});
canvas.addEventListener("mouseup",()=>{
    context.closePath();
    pintando=false;
});
const pintar = (x1,y1,x2,y2)=>{
    context.strokeStyle=color;
    context.lineWidth=ancho;
    context.moveTo(x1,y1);
    context.lineTo(x2,y2);
    context.stroke();
};