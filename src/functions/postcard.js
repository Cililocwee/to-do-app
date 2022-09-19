
const postCards = (() => {
    
    // this is an experiment for debugging
    function addFullItem() {
        const utcShortForm = new Date().toJSON().slice(0,10).replace(/-/g,'/');
        const utcLongForm = new Date().toJSON();
        const newDateCard = document.createElement('div');
        newDateCard.classList.add('date-card');
        const newDateDisplay = document.createElement('div');
        newDateDisplay.classList.add('date-display');
        newDateDisplay.innerText = String(utcShortForm);

        const list = document.querySelector('#list');
        //document.getElementById('list').appendChild(newDateCard);
        list.insertBefore(newDateCard, list.firstChild);
        newDateCard.appendChild(newDateDisplay);
        
        const newContainer = document.createElement('div');
        newContainer.classList.add('to-do-container');
        newDateCard.appendChild(newContainer);


        function addItem(){
            const newItem = document.createElement('div');
            newItem.innerHTML = document.getElementById(utcLongForm).value;
            newItem.classList.add('to-do-item');
            newItem.onclick = removeItem;
            //newContainer.appendChild(newItem);
            newContainer.appendChild(newItem);
        }

        
        const box = document.createElement('input');
        box.type = 'text';
        box.placeholder = 'Enter new note here';
        box.id = utcLongForm;
        box.addEventListener('enter', () => {addItem});
        
        const addbtn = document.createElement('input');
        addbtn.value = "+";
        addbtn.onclick = addItem;
        addbtn.type = 'button';

        newDateCard.appendChild(box);
        newDateCard.appendChild(addbtn);

        saveList();
    }

    // these are pure functions that *work*
    function addDateCard() {
        const newDateCard = document.createElement('div');
        dateCard.classList.add('date-card');
        const newDateDisplay = document.createElement('div');
        newDateDisplay.classList.add('date-display');
        //newContainer.onclick = removeItem;

        document.getElementById('list').appendChild(newDateCard);
        newDateCard.appendChild(newDateDisplay);
        saveList();
    }
    
    function addToDoContainer () {
        const newContainer = document.createElement('div');
        newContainer.classList.add('to-do-container');
        newContainer.onclick = removeItem;
        const addbtn = document.createElement('button');
        addbtn.innerText = '+ add new';
        addbtn.onclick = addItem2;

        document.getElementById('list').appendChild(newContainer);
    }
    
    /*function addItem() {
        const newItem = document.createElement('div');
        newItem.innerHTML = document.getElementById("box").value;
        newItem.classList.add('to-do-item');
        newItem.onclick = removeItem;
        //.appendChild(newItem);
 
        saveList();
    }*/

    function removeItem() {
        document.getElementById('list').removeChild(this);
        saveList();
    }

    function saveList() {
        localStorage.storedList = document.getElementById('list').innerHTML;
    }

    function loadList() {
        document.getElementById('list').innerHTML = localStorage.storedList;
        for(let i = 0; i < list.children.length; i++){
            list.children[i].onclick = removeItem;
        }
    }

    return { addToDoContainer, addFullItem, removeItem, saveList, loadList }
})();

export default postCards;