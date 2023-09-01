window.sr = ScrollReveal({reset: true});

sr.reveal('.area-1',{
    rotate: {x: 0, y: 100, z: 0},
    duration: 1500
});

sr.reveal('.myResume',{duration: 1500});

sr.reveal('#skills',{duration: 1500});

sr.reveal('#contact',{duration: 1500});

function typeWriter(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra,i) => {
        setTimeout(function(){
            elemento.innerHTML += letra;
        }, 55*i)
    });
}


const resume = document.querySelector('.resume');
typeWriter(resume);