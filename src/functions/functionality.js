import memorycard from "./memorycard";

const restoration = (() =>{
    const restoreFunctionality = () =>{
        const removebuttonlist = document.querySelectorAll('.remove-button');
            for(let i = 0; i < removebuttonlist.length; i++){
                removebuttonlist[i].onclick = memorycard.removeItem;
                removebuttonlist[i].parentNode.addEventListener('click', (ev) => {
                    removebuttonlist[i].parentNode.classList.toggle('checked');
                    memorycard.saveList();
                }, false);
            
            }
        }
    
return { restoreFunctionality }
    
})();

export default restoration;