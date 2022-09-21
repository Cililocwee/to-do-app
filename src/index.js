import './styles/style.css'
import dropdown from './functions/dropdown';
import memorycard from './functions/memorycard';
import { format } from 'date-fns';

//memorycard.loadList();

// date and formatting (short form)
var utc = new Date().toJSON().slice(0, 10).replace(/-/g, '-');
let currentdate = format(new Date(), 'MM/dd/yyyy');
let currettime = format(new Date(), 'h:mmaaaa');
console.log(utc);
console.log(currentdate);

// selecting the todocontainer
const toDoContainer = document.querySelector('.to-do-container');

const todoinput = document.querySelector('#to-do-input');
todoinput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        makeToDolet();
        todoinput.value = '';
    }
});

// select the todolet button and add functionality
const todoletbutton = document.querySelector('.to-do-let-button');
todoletbutton.onclick = makeToDolet;
todoletbutton.addEventListener('click', () => {
    todoinput.value = ''
    memorycard.saveList;
})

// (FUNC) creates a new todolet with value from input box and posts it
function makeToDolet() {
    // length limiter
    if (todoinput.value.length < 1) { return };

    // create the todolet form
    const newToDoLet = document.createElement('div');
    newToDoLet.innerHTML = `<p>${todoinput.value}</p>`;
    newToDoLet.classList.add('to-do-item');

    // create the new datelet (current date/time)
    const newDateLet = document.createElement('div');
    newDateLet.classList.add('datelet');
    newDateLet.innerText = `Posted: ${currentdate} at ${currettime}`;

    // create the new duelet (due date/time)
    const newDueLet = document.createElement('div');
    newDueLet.classList.add('duelet');
    const currentdatetime = document.querySelector('#datetimeinput').value;
    if(currentdatetime != ""){
        newDueLet.innerText = `Due: ${currentdatetime}`;
        }else{
            newDueLet.innerText = 'No due date'
        }

    // create the remove button
    const removebutton = document.createElement('h4');
    removebutton.innerText = 'x'
    removebutton.classList.add('remove-button');
    removebutton.onclick = memorycard.removeItem;

    // get value from radio buttons
    function displayRadioValue() {
        var radioButtonGroup = document.getElementsByName('optradio');
        var checkedRadio = Array.from(radioButtonGroup).find((radio) => radio.checked);
        return checkedRadio.value;
    }

    // **NOTES: This right here is ACTIVELY attaching 
    // as a consequence of calling this function
    toDoContainer.appendChild(newToDoLet);
    newToDoLet.append(newDateLet, newDueLet, removebutton);

    // assign priority based on selection
    newToDoLet.classList.add(`${displayRadioValue()}`)

    // Add a "checked" symbol when clicking on a list item
    newToDoLet.addEventListener('click', (ev) => {
        newToDoLet.classList.toggle('checked');
    }, false);

}

// adds functionality to the dropdown menu
const dropbtn = document.querySelector('.dropbtn');
dropbtn.onclick = dropdown.myFunction;



// sets default datetime for the input (not currently working)
//const datetimeinput = document.querySelector('#datetimeinput');
//datetimeinput.value= format(new Date(), ('yyyy-MM-ddThh:mm'));
