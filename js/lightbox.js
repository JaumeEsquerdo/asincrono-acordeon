'use strict'

//constantes y variables

const imgList = document.querySelectorAll(`.Img`)
const lightbox = document.querySelector(`.Lightbox`)
const grande = document.querySelector('.Grande')
const closeBtn = document.querySelector('.Close')

//cuando hago click en .img
    //.lightbox se le ADD la clase isActive
    //.grande se le añade el atributo src de la imagen


    //recorre cada img
    imgList.forEach((eachImg,i)=>{
        //se le añade el evento click a cada i(cada img)
        imgList[i].addEventListener('click', ()=>{

            lightbox.classList.add('isActive')
            grande.src = imgList[i].src
        })
    })

    // cuando hago click en close
        // a la clase lightbox se le quita la clase isActive
    
    closeBtn.addEventListener('click', ()=>{
        lightbox.classList.remove('isActive')
    })