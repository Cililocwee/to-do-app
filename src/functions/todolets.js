import { format } from "date-fns";
import memorycard from "./memorycard";
import currentProfile from "./globalvariable";

const ToDoLetFactory = (() => {

    // selecting the todocontainer
    const toDoContainer = document.querySelector('.to-do-container');

    // date and formatting (short form)
    let currentdate = format(new Date(), 'MM/dd/yyyy');
    let currettime = format(new Date(), 'h:mmaaaa');
    console.log(currentdate);

    function makeToDolet() {
        const todoinput = document.querySelector('#to-do-input');

        // length limiter
        if (todoinput.value.length < 1) { return };

        // create the todolet form
        const newToDoLet = document.createElement('div');
        const newToDoLetP = document.createElement('p');
        newToDoLetP.innerText = todoinput.value;
        newToDoLet.classList.add('to-do-item');
        // newToDoLetP.contentEditable = true;

        // create the new datelet (current date/time)
        const newDateLet = document.createElement('div');
        newDateLet.classList.add('datelet');
        newDateLet.innerText = `Posted: ${currentdate} at ${currettime}`;

        // create the new duelet (due date/time)
        const newDueLet = document.createElement('div');
        newDueLet.classList.add('duelet');
        const currentdatetime = document.querySelector('#datetimeinput').value;
        if (currentdatetime != "") {
            newDueLet.innerText = `Due: ${currentdatetime}`;
        } else {
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
        newToDoLet.append(editButton, newToDoLetP, newDateLet, newDueLet, removebutton);

        // assign priority based on selection
        newToDoLet.classList.add(`${displayRadioValue()}`)

        // Add a "checked" symbol when clicking on a list item
        newToDoLet.addEventListener('click', (ev) => {
            newToDoLet.classList.toggle('checked');
            memorycard.saveList(currentProfile.profilemode);
        }, false);

        memorycard.saveList(currentProfile.profilemode);
    }
    
    return { makeToDolet }
})();

export default ToDoLetFactory;