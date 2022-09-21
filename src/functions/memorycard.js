const memorycard = (() => {
    
    const container = document.querySelector('#to-do-container');

    function removeItem() {
        this.parentElement.remove();
        saveList(); 
    }

    function saveList() {
        const saveItem = JSON.stringify(container.innerHTML);
        localStorage.setItem('storedList', saveItem);
    }

    function loadList() {
        if(!localStorage.getItem('storedList')){
            console.log('I am');
            return};
        const storedItem = localStorage.getItem('storedList');
        const loadItem = JSON.parse(storedItem);
        container.innerHTML = loadItem;
        const removebuttonlist = document.querySelectorAll('.remove-button');
        for(let i = 0; i < removebuttonlist.length; i++){
            removebuttonlist[i].onclick = removeItem;
        }
        console.log(localStorage)
    }
    return { removeItem, saveList, loadList }
})();

export default memorycard;