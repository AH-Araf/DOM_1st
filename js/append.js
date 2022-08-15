/* ------------- Add li on Ul------------ */

//1. Where to add
const placesList = document.getElementById('places-list');

//2. What to be added
const li = document.createElement('li');
li.innerText = 'Nusrat Jahan Dolan';

//3. Add the child
placesList.appendChild(li);




/* ------------- Add section on main------------ */

//1. Where to add
const mainContainer = document.getElementById('main-container');

//2. What to be added
const section = document.createElement('section');
const h1= document.createElement('h1');
h1.innerText= 'My Food List';
section.appendChild(h1);

const ul= document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'biriyani'
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'vaat'
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'ice-cream'
ul.appendChild(li3);


//3. Add the child
mainContainer.appendChild(section);
mainContainer.appendChild(ul);



//set innerHTML directly
const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1> My Dress section </h1>
<ul>
    <li> T-Shirt </li>
    <li> Shirt </li>
    <li> Boxer </li>
</ul>
`
mainContainer.appendChild(sectionDress);