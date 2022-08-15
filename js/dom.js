//getElementsByTagName
//getElementsById
//getElementsByClassName
//querySelectorAll
//querySelector (Only Show First-One)


console.log('hello from js');
const a= document.getElementsByClassName('araf');
for(const place of a){
    console.log(place.innerText)
}


const c= document.getElementsByClassName('araf');
console.log(c);

const b= document.getElementsByTagName('h1');
console.log(b);

const someLi = document.querySelectorAll('.fruits li');
console.log(someLi);
for(const li of someLi){
    console.log(li.innerText);
}

