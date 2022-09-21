import './styles/style.css'
import dropdown from './functions/dropdown';
import memorycard from './functions/memorycard';
import ToDoLetFactory from './functions/todolets';


// constructs persistent elements in the HTML 
// *********************************************************
// adds todolet creation functionality to the add button
const todoinput = document.querySelector('#to-do-input');
todoinput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
       ToDoLetFactory.makeToDolet();
        todoinput.value = '';
    }
});

// select the todolet button and add functionality
const todoletbutton = document.querySelector('.to-do-let-button');
todoletbutton.onclick = ToDoLetFactory.makeToDolet;
todoletbutton.addEventListener('click', () => {
    todoinput.value = ''
    memorycard.saveList;
})
// ***********************************************************

// adds functionality to the dropdown menu
const dropbtn = document.querySelector('.dropbtn');
dropbtn.onclick = dropdown.myFunction;


// reload all saved nodes
window.onload = memorycard.loadList

// adds multiple profiles
const personalView = document.querySelector('#personal-list');
personalView.addEventListener('click', () =>{console.log('personal');});

const businessView = document.querySelector('#business-list');
businessView.addEventListener('click', () =>{console.log('business');});

const otherView = document.querySelector('#other-list');
otherView.addEventListener('click', () =>{console.log('other');});