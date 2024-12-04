'use strict'

//constantes y variables

const imgList = document.querySelectorAll(`.Img`)
const lightbox = document.querySelector(`.Lightbox`)
const grande = document.querySelector('.Grande')
const closeBtn = document.querySelector('.Close')

//asignar variables a las funciones para guardarlas y poder reutilizarlas
const closeBtnHandler = () => lightbox.classList.remove('isActive')
const imgListHandler = (i) => {
    lightbox.classList.add('isActive')
    grande.src = imgList[i].src

}

//cuando hago click en .img
    //.lightbox se le ADD la clase isActive
    //.grande se le añade el atributo src de la imagen


    //recorre cada img
    imgList.forEach((eachImg,i)=>{
        //se le añade el evento click a cada i(cada img)
        imgList[i].addEventListener('pointerdown', ()=>{

            imgListHandler(i);
        })
    })

    // cuando hago click en close
        // a la clase lightbox se le quita la clase isActive
    
    closeBtn.addEventListener('pointerdown', closeBtnHandler)//poner pointerdown en vez de click para que funcione con el dedo y cond lapices el click