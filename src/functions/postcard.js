
const postCards = (() => {
    
    // this is an experiment for debugging
    function addFullItem() {
        const utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');
        const newDateCard = document.createElement('div');
        newDateCard.classList.add('date-card');
        const newDateDisplay = document.createElement('div');
        newDateDisplay.classList.add('date-display');
        newDateDisplay.innerText = String(utc);

        document.getElementById('list').appendChild(newDateCard);
        newDateCard.appendChild(newDateDisplay);
        
        const newContainer = document.createElement('div');
        newContainer.classList.add('to-do-container');
        newDateCard.appendChild(newContainer);


        function addItem(){
            const newItem = document.createElement('div');
            newItem.innerHTML = document.getElementById(utc).value;
            newItem.classList.add('to-do-item');
            newItem.onclick = removeItem;
            newContainer.appendChild(newItem);
        }

        /*
        const box = document.createElement('input');
        box.type = 'text';
        box.placeholder = 'Enter new note here';
        box.id = utc;
        
        const addbtn = document.createElement('input');
        addbtn.value = "+";
        addbtn.onclick = addItem;
        addbtn.type = 'button';*/

        const fancyform = document.createElement('div');
        fancyform.classList.add('input-group','mb-3');
        const inputfield = document.createElement('input');
        inputfield.id = utc;    //This is NOT working right
        inputfield.type = 'text';
        inputfield.classList.add('form-control');
        inputfield.placeholder = 'Enter new note...';
        inputfield.ariaDescribedby = "basic-addon2";
        const inputgroupappend = document.createElement('div');
        inputgroupappend.classList.add("input-group-append");
        const clickbtn = document.createElement('button');
        clickbtn.classList.add('btn', 'btn-outline-secondary'); //the bootstrap css isn't working
        clickbtn.type = 'button';
        clickbtn.value = 'button';
        clickbtn.onclick = addItem;

        //newDateCard.appendChild(box);
        //newDateCard.appendChild(addbtn);

        newDateCard.appendChild(fancyform);
        fancyform.appendChild(inputfield);
        fancyform.appendChild(inputgroupappend);
        inputgroupappend.appendChild(clickbtn);
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