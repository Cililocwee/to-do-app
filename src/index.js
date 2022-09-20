import './styles/style.css'
import dropdown from './functions/dropdown';
import memorycard from './functions/memorycard';

// selecting the viewbox
const viewBox = document.querySelector('.view-box')

// whole date-card (the whole card)
const dateCardDiv = document.createElement('div');
dateCardDiv.classList.add('date-card');

// current date display
const dateDisplay = document.createElement('div');
dateDisplay.classList.add('date-display');

// date and formatting (short form)
var utc = new Date().toJSON().slice(0, 10).replace(/-/g, '-');
dateDisplay.innerText = utc;

// todo container
const toDoContainer = document.createElement('div');
toDoContainer.classList.add('to-do-container');
toDoContainer.id = 'to-do-container';

// example posts
const toDoItem1 = document.createElement('div');
toDoItem1.classList.add('to-do-item');
toDoItem1.innerHTML = "<p>This is the text in the first div.</p>";
const toDoItem2 = document.createElement('div');
toDoItem2.classList.add('to-do-item');
toDoItem2.innerHTML = "<p>And this is more text, but in a different div.</p>"
const toDoItem3 = document.createElement('div');
toDoItem3.classList.add('to-do-item');
toDoItem3.innerHTML = "<p>I, too, am a div, my dear fellows.</p>"

// creates the input field for the todolets
const todoinput = document.createElement('input');
todoinput.type = 'text';
todoinput.placeholder = 'Enter new note here';
todoinput.id = 'to-do-input';
todoinput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        makeToDolet();
        todoinput.value = '';
    }
});

// creates the button that adds a new todolet
const todoletbutton = document.createElement('button');
todoletbutton.id = 'to-do-let-button';
todoletbutton.classList.add('button-87')
todoletbutton.type = 'button';
todoletbutton.value = "add";
todoletbutton.onclick = makeToDolet;
todoletbutton.addEventListener('click', () => {
    todoinput.value = '';
})

// creates the timedate input element
const datetimeinput = document.createElement('input');
datetimeinput.id = 'datetimeinput';
datetimeinput.name = 'datetimeinput';
datetimeinput.type = 'datetime-local';
datetimeinput.required = true;

// (FUNC) creates a new todolet with value from input box and posts it
function makeToDolet() {
    if (todoinput.value.length < 1) { return };
    // create the todolet form
    const newToDoLet = document.createElement('div');
    newToDoLet.innerHTML = `<p>${todoinput.value}</p>`;
    newToDoLet.classList.add('to-do-item');
    //newToDoLet.onclick = memorycard.removeItem;
    // create the new datelet (current date/time)
    const newDateLet = document.createElement('div');
    newDateLet.classList.add('datelet');
    newDateLet.innerText = utc;
    // create the new duelet (due date/time)
    const newDueLet = document.createElement('div');
    newDueLet.classList.add('duelet');
    newDueLet.innerText = `Due: ${document.querySelector('#datetimeinput').value}`;

    // remove button
    const removebutton = document.createElement('h4');
    removebutton.innerText = 'x'
    removebutton.classList.add('remove-button');
    removebutton.onclick = memorycard.removeItem;

    // **NOTES: This right here is ACTIVELY attaching 
    // as a consequence of calling this function
    toDoContainer.appendChild(newToDoLet);
    newToDoLet.append(newDateLet, newDueLet, removebutton);
}

// constructing the page below the header
viewBox.appendChild(dateCardDiv);
dateCardDiv.append(dateDisplay,
    todoinput,
    datetimeinput,
    todoletbutton,
    toDoContainer);
//toDoContainer.append(toDoItem1,
//    toDoItem2,
//    toDoItem3);

// adds functionality to the dropdown menu
const dropbtn = document.querySelector('.dropbtn');
dropbtn.onclick = dropdown.myFunction;

