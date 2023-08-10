let header = document.querySelector("header");
let footer = document.querySelector("footer");
let main = document.querySelector("main");
let change = document.querySelector(".change");

function dark(){
    header.style.backgroundColor = 'black';
    main.style.backgroundColor = 'gray';
    footer.style.backgroundColor = 'black';
    change.innerHTML = 'Light';
}

function light(){
    header.style.backgroundColor = '';
    main.style.backgroundColor = '';
    footer.style.backgroundColor = '';
    change.innerHTML = 'Dark';
}

function switcher(){
    if(change.innerHTML === '' || change.innerHTML === 'Dark'){
        dark();
    } else {
        light();
    }
}


change.addEventListener('click',switcher);