const DateCard = () => {

    // makes the cardlet
    const makePost = (memo) => {
        // create the div and add class
        const toDoItem = document.createElement('div');
        toDoItem.classList.add('to-do-item');
        // put the memo in the cardlet
        toDoItem.innerText = memo;
    }

    // posts the cardlet
    const postPost = (cardlet) => {
        // select where to put it
        const toDoContainer = document.querySelector('to-do-container');
        // append the cardlet
        toDoContainer.appendChild(cardlet);
    }

    return { makePost, postPost }

}

export default DateCard;