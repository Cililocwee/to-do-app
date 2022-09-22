import restoration from "./functionality";
import currentProfile from "./globalvariable";

const memorycard = (() => {
    
    const container = document.querySelector('#to-do-container');

    function removeItem() {
        this.parentElement.remove();
        saveList(currentProfile.profilemode); 
    }

    // save- and loadList should take a variable that signals different sections (business, personal, other)
    function saveList(section) {
        const saveItem = JSON.stringify(container.innerHTML);
        // localStorage.setItem('storedList', saveItem);
        localStorage.setItem(section, saveItem);
        console.log(saveItem);
    }

    function loadList(section) {
        if(!localStorage.getItem(section)){
            console.log('nothing in storage');
            return};
        const storedItem = localStorage.getItem(section);
        const loadItem = JSON.parse(storedItem);
        container.innerHTML = loadItem;

        // if(!localStorage.getItem('storedList')){
        //     console.log('I am');
        //     return};
        // const storedItem = localStorage.getItem('storedList');
        // const loadItem = JSON.parse(storedItem);
        // container.innerHTML = loadItem;
        restoration.restoreFunctionality();
    }
    
    return { removeItem, saveList, loadList }
})();

export default memorycard;