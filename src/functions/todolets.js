import { format } from "date-fns";
import memorycard from "./memorycard";
import currentProfile from "./globalvariable";

const ToDoLetConstruction = (() => {

    function makeTDForm() {
        // create the todolet form
        const newToDoLet = document.createElement('div');
        newToDoLet.classList.add('to-do-item');
        return newToDoLet;
    };
    function makeTDP() {
        const todoinput = document.querySelector('#to-do-input');
        const newToDoLetP = document.createElement('p');
        newToDoLetP.innerText = todoinput.value;
        return newToDoLetP;
    };
    function makeDateLet() {
        // date and formatting (short form)
        let currentdate = format(new Date(), 'MM/dd/yyyy');
        let currenttime = format(new Date(), 'h:mmaaaa');

        // create the new datelet (current date/time)
        const newDateLet = document.createElement('div');
        newDateLet.classList.add('datelet');
        newDateLet.innerText = `Posted: ${currentdate} at ${currenttime}`;
        return newDateLet;
    };
    function makeDueLet() {
        // create the new duelet (due date/time)
        const newDueLet = document.createElement('div');
        newDueLet.classList.add('duelet');
        const duetime = document.querySelector('#datetimeinput').value;
        if (duetime != "") {
            newDueLet.innerText = `Due: ${duetime}`;
        } else {
            newDueLet.innerText = 'No due date'
        }
        return newDueLet;
    };
    function makeRemoveButton() {
        // create the remove button
        const removebutton = document.createElement('h4');
        removebutton.innerText = 'x'
        removebutton.classList.add('remove-button');
        removebutton.onclick = memorycard.removeItem;
        return removebutton;
    };
    function getRadioValue() {
        // get value from radio buttons
        var radioButtonGroup = document.getElementsByName('optradio');
        var checkedRadio = Array.from(radioButtonGroup).find((radio) => radio.checked);
        return checkedRadio.value;
    }

    function putTDTogether() {
        const todoinput = document.querySelector('#to-do-input');
        // length limiter
        if (todoinput.value.length < 1) { return };
        // selecting the todocontainer
        const toDoContainer = document.querySelector('.to-do-container');
        // initialize each piece
        const form = makeTDForm();
        const todoP = makeTDP();
        const datelet = makeDateLet();
        const duelet = makeDueLet();
        const removebutton = makeRemoveButton();

        // append the pieces to make the whole todolet
        toDoContainer.appendChild(form);
        form.append(todoP, datelet, duelet, removebutton);

        // assign priority based on selection
        form.classList.add(`${getRadioValue()}`)

        // Add a "checked" symbol when clicking on a list item
        form.addEventListener('click', (ev) => {
            form.classList.toggle('checked');
            memorycard.saveList(currentProfile.profilemode);
        }, false);

        memorycard.saveList(currentProfile.profilemode);
     }

     return { putTDTogether };
})();

const ToDoLetFactory = (() => {

    // selecting the todocontainer
    const toDoContainer = document.querySelector('.to-do-container');

    // date and formatting (short form)
    let currentdate = format(new Date(), 'MM/dd/yyyy');
    let currettime = format(new Date(), 'h:mmaaaa');

    function assembleToDoLet() {
        const todoinput = document.querySelector('#to-do-input');

        // length limiter
        if (todoinput.value.length < 1) { return };

        // create the todolet form
        const newToDoLet = document.createElement('div');
        // newToDoLet.innerHTML = `<p>${todoinput.value}</p>`;
        const newToDoLetP = document.createElement('p');
        newToDoLetP.innerText = todoinput.value;
        newToDoLet.classList.add('to-do-item');
        newToDoLetP.contentEditable = true;

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

        // creates an edit button
        const editButton = document.createElement('h4');
        editButton.innerText = 'e';
        editButton.classList.add('edit-button');
        // editButton.onclick = alert('I am an edit button');

        // get value from radio buttons
        function displayRadioValue() {
            var radioButtonGroup = document.getElementsByName('optradio');
            var checkedRadio = Array.from(radioButtonGroup).find((radio) => radio.checked);
            return checkedRadio.value;
        }

        // **NOTES: This right here is ACTIVELY attaching 
        // as a consequence of calling this function
        toDoContainer.appendChild(newToDoLet);
        newToDoLet.append(newToDoLetP, newDateLet, newDueLet, removebutton);

        // assign priority based on selection
        newToDoLet.classList.add(`${displayRadioValue()}`)

        // Add a "checked" symbol when clicking on a list item
        newToDoLet.addEventListener('click', (ev) => {
            newToDoLet.classList.toggle('checked');
            memorycard.saveList(currentProfile.profilemode);
        }, false);

        memorycard.saveList(currentProfile.profilemode);
    }

    return { assembleToDoLet }
})();

export default ToDoLetConstruction;