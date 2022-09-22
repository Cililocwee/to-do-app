import './styles/style.css'
<<<<<<< HEAD
import dropdown from './functions/dropdown.js';
import memorycard from './functions/memorycard.js';
import ToDoLetFactory from './functions/todolets.js';
import currentProfile from './functions/globalvariable.js';
import DropDownUpdate from './functions/dropdownupdate.js';
=======
import dropdown from './functions/dropdown';
import memorycard from './functions/memorycard';
import ToDoLetFactory from './functions/todolets';
import currentProfile from './functions/globalvariable';
>>>>>>> 90fde26936c20f38c5dfb919b6104db4fb8a9e9c

// [Default] reload all saved nodes
window.onload = memorycard.loadList(currentProfile.profilemode)

// constructs persistent elements in the HTML 
// *********************************************************
// adds todolet creation functionality to the add button
const todoinput = document.querySelector('#to-do-input');
todoinput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        ToDoLetFactory.assembleToDoLet();
        todoinput.value = '';
    }
});

// select the todolet button and add functionality
const todoletbutton = document.querySelector('.to-do-let-button');
todoletbutton.onclick = ToDoLetFactory.assembleToDoLet;
todoletbutton.addEventListener('click', () => {
    todoinput.value = ''
    memorycard.saveList(currentProfile.profilemode);
})
// ***********************************************************

// adds functionality to the dropdown menu
const dropbtn = document.querySelector('.dropbtn');
dropbtn.onclick = dropdown.myFunction;

<<<<<<< HEAD
=======

<<<<<<< HEAD



=======
>>>>>>> bdaefb0c7c9a53b6a9a21d2bce284f1e5ba91b38
// [Default] reload all saved nodes
// window.onload = memorycard.loadList(currentProfile.profilemode)
window.onload = memorycard.loadList('personal');
>>>>>>> 90fde26936c20f38c5dfb919b6104db4fb8a9e9c


// adds multiple profiles
// selectable through dropdown menu
/*const personalView = document.querySelector('#personal-list');
personalView.addEventListener('click', () => {
    // save the current list
    console.log(`Saving to: ${currentProfile.profilemode}`);
    memorycard.saveList(currentProfile.profilemode)
    // change to personal
    currentProfile.ProfileMode = 'personal';
    // load personal
    console.log(`Loading: ${currentProfile.profilemode}`);
    memorycard.loadList('personal');
});

const businessView = document.querySelector('#business-list');
businessView.addEventListener('click', () => {
    // save the current list
    console.log(`Saving to: ${currentProfile.profilemode}`);
    memorycard.saveList(currentProfile.profilemode)
    // change to business
    currentProfile.ProfileMode = 'business';
    // load business
    console.log(`Loading: ${currentProfile.profilemode}`);
    memorycard.loadList('business');

});

const otherView = document.querySelector('#other-list');
otherView.addEventListener('click', () => {
    //save the current list
    console.log(`Saving to: ${currentProfile.profilemode}`);
    memorycard.saveList(currentProfile.profilemode)
    // change to other
    currentProfile.ProfileMode = 'other';
    // load other
    console.log(`Loading: ${currentProfile.profilemode}`);
    memorycard.loadList('other');
<<<<<<< HEAD
    DropDownUpdate.updateText();
});*/
=======
});
>>>>>>> bdaefb0c7c9a53b6a9a21d2bce284f1e5ba91b38
