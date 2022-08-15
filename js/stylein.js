const sections  = document.querySelectorAll('section');
for(const a of sections){
    a.style.border= '2px solid blue';
    a.style.marginBottom= '5px';
    a.style.borderRadius= '10px';
    a.style.backgroundColor='lightgray';
}

const newA = document.getElementById('one');
    newA.style.backgroundColor='yellow';
    newA.classList.remove('text-center'); //remove style css, can be changed style css by js
