import './styles/style.css'
import postCards from './functions/postcard';


// selecting the viewbox
const viewBox = document.querySelector('.view-box')

// whole date-card (the whole card)
const dateCardDiv = document.createElement('div');
dateCardDiv.classList.add('date-card');

// date display
const dateDisplay = document.createElement('div');
dateDisplay.classList.add('date-display');

var utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');
//document.write(utc);
dateDisplay.innerText = utc;

// todo container
const toDoContainer = document.createElement('div');
toDoContainer.classList.add('to-do-container');

// todo slots
const toDoItem1 = document.createElement('div');
toDoItem1.classList.add('to-do-item');
toDoItem1.innerHTML = "<p>This is the text in the first div.</p>";
const toDoItem2 = document.createElement('div');
toDoItem2.classList.add('to-do-item');
toDoItem2.innerHTML = "<p>And this is more text, but in a different div.</p>"
const toDoItem3 = document.createElement('div');
toDoItem3.classList.add('to-do-item');
toDoItem3.innerHTML = "<p>I, too, am a div, my dear fellows.</p>"


// constructing the page below the header
viewBox.appendChild(dateCardDiv);
dateCardDiv.appendChild(dateDisplay);
dateCardDiv.appendChild(toDoContainer);
toDoContainer.appendChild(toDoItem1);
toDoContainer.appendChild(toDoItem2);
toDoContainer.appendChild(toDoItem3);

const postbtn = document.querySelector('#post-button');
postbtn.onclick = postCards.addFullItem;

//const ncmaker = document.querySelector('#new-card-maker');
//ncmaker.onclick = postCards.addFullItem;
//const postcont = document.querySelector('#post-container');
//postcont.onclick = postCards.addToDoContainer;

