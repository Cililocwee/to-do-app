import './styles/style.css'
import dropdown from './functions/dropdown';
import memorycard from './functions/memorycard';
import ToDoLetConstruction from './functions/todolets';
import currentProfile from './functions/globalvariable';

// [Default] reload all saved nodes
window.onload = memorycard.loadList(currentProfile.profilemode)

// constructs persistent elements in the HTML 
// *********************************************************
// adds todolet creation functionality to the add button
const todoinput = document.querySelector('#to-do-input');
todoinput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        ToDoLetConstruction.putTDTogether();
        todoinput.value = '';
    }
});

// select the todolet button and add functionality
const todoletbutton = document.querySelector('.to-do-let-button');
todoletbutton.onclick = ToDoLetConstruction.putTDTogether;
todoletbutton.addEventListener('click', () => {
    todoinput.value = ''
    memorycard.saveList(currentProfile.profilemode);
})
// ***********************************************************

// adds functionality to the dropdown menu
const dropbtn = document.querySelector('.dropbtn');
dropbtn.onclick = dropdown.myFunction;


// [Default] reload all saved nodes
// window.onload = memorycard.loadList(currentProfile.profilemode)
window.onload = memorycard.loadList('personal');



// adds multiple profiles
// selectable through dropdown menu
const personalView = document.querySelector('#personal-list');
personalView.addEventListener('click', () => {
    // save the current list
    console.log(`Saving to: ${currentProfile.profilemode}`);
    memorycard.saveList(currentProfile.profilemode)
    // change to personal
    currentProfile.ProfileMode = 'personal';
    // load personal
    console.log(`Loading: ${currentProfile.profilemode}`);
    memorycard.loadList('personal');
    // update the dropdown display
    dropdown.DropDownUpdate();
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
    // update the dropdown display
    dropdown.DropDownUpdate();
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
    // update the dropdown display
    dropdown.DropDownUpdate();
});