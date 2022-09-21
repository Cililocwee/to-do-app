import restoration from "./functionality";

const memorycard = (() => {
    
    const container = document.querySelector('#to-do-container');

    function removeItem() {
        this.parentElement.remove();
        saveList(); 
    }

    // save- and loadList should take a variable that signals different sections (business, personal, other)
    function saveList(section) {
        const saveItem = JSON.stringify(container.innerHTML);
        localStorage.setItem('storedList', saveItem);
        console.log(saveItem);
    }

    function loadList(section) {
        if(!localStorage.getItem('storedList')){
            console.log('I am');
            return};
        const storedItem = localStorage.getItem('storedList');
        const loadItem = JSON.parse(storedItem);
        container.innerHTML = loadItem;
        // const removebuttonlist = document.querySelectorAll('.remove-button');
        // for(let i = 0; i < removebuttonlist.length; i++){
        //     removebuttonlist[i].onclick = removeItem;
        // }
        // console.log(localStorage)
        restoration.restoreFunctionality();
    }
    
    return { removeItem, saveList, loadList }
})();

export default memorycard;