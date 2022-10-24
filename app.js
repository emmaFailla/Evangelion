//Pantalla de Carga
const pantallaCarga = document.querySelector('.pantallaCarga') 
window.onload = function () {
    pantallaCarga.classList.add('pantallaCargaOff')
    setTimeout(()=>{pantallaCarga.classList.add('pantallaCargaNone')},2000)
    if(pantallaCarga.classList.contains('pantallaCargaNone')){
        return console.log('Los elementos cargaron correctamente.')
    }
}
//Pantalla de Carga 




const leftButton = document.querySelector('.leftButton')
const rightButton = document.querySelector('.rightButton')
const personajes = document.querySelectorAll('.personajes')
const nombres = document.querySelectorAll('.nombres')
const videoContainer = document.querySelector('.secondSectionDesktopVideo__container-video')
const videoContainerDos = document.querySelector('.fourthSection__video')
const frase = document.querySelector('.frase')
const adiosEvangelion = document.querySelector('.adiosEvangelion')


let personajePosition = 0
function previous () {
    if(personajePosition == 0) return
    --personajePosition
    move(personajePosition)
    showName(personajePosition)
    showVideo(personajePosition)
    showVideoDos(personajePosition)
}

function next(){
    if(personajePosition == personajes.length - 1) return
    ++personajePosition
    move(personajePosition)
    showName(personajePosition)
    showVideo(personajePosition)
    showVideoDos(personajePosition)

}

function move(personajePosition){
    let translate = personajePosition * -100
    personajes.forEach((personaje)=>{
        personaje.style.transform = `translateX(${translate}%)`
    })
}

function showName (personajePosition){
    for(let nombre of nombres){
        nombre.style.display = "none"
        nombre.style.opacity = "0"
    }

    nombres[personajePosition].style.display="flex"
    nombres[personajePosition].style.opacity = "1"
}

showName(personajePosition)

function showVideo(personajePosition){
    let personajesVideos = ['video/AsukaVideo.mp4','video/reiVideo.mp4','video/Shinji.mp4','video/Mari.mp4','video/kaworu.mp4']
    videoContainer.src = personajesVideos[personajePosition]
}

function showVideoDos(personajePosition){
    let personajesVideosDos = ['video/theEndOfEvangelionEnds.mp4','video/reiSmileRecortado.mp4','video/AplausosRecortada.mp4','video/mariDos.mp4','video/kaworuDos.mp4']
    videoContainerDos.src = personajesVideosDos[personajePosition]
}

frase.addEventListener('mouseover',()=>{
    frase.classList.add('fraseOff')
    setTimeout(()=>{
        adiosEvangelion.classList.add('adiosEvangelionOn')
    },1000)
})

//GSAP
gsap.registerPlugin(ScrollTrigger)
gsap.to(".bodyPicUno",{
scrollTrigger:".bodyPicUno", 
opacity : 0,duration : 5})

gsap.to(".bodyPicDos",{
 scrollTrigger:".bodyPicDos", 
opacity : 0,duration : 5})

gsap.to(".bodyPicTres",{
scrollTrigger:".bodyPicTres", 
opacity : 0,duration : 5})

gsap.to(".bodyPicCuatro",{
 scrollTrigger:".bodyPicCuatro", 
 opacity : 0,duration : 5})

gsap.to(".bodyPicCinco",{
 scrollTrigger:".bodyPicCinco", 
 opacity : 0,duration : 5})

gsap.to(".bodyPicSeis",{
 scrollTrigger:".bodyPicSeis", 
 opacity : 0,duration :5})
                    




