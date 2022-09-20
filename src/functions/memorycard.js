const memorycard = (() => {
    
    function removeItem() {
        document.getElementById('to-do-container').removeChild(this);
        saveList();
    }

    function saveList() {
        localStorage.storedList = document.getElementById('list').innerHTML;
    }

    function loadList() {
        document.getElementById('list').innerHTML = localStorage.storedList;
        for (let i = 0; i < list.children.length; i++) {
            list.children[i].onclick = removeItem;
        }
    }
    return { removeItem, saveList, loadList }
})();

export default memorycard;