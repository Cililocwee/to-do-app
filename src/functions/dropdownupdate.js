import currentProfile from "./globalvariable";

const DropDownUpdate = (() =>{
    const dropdowntext = document.querySelector('#dropdown-text');

    const updateText = (text) => {
        dropdowntext.innerHTML = currentProfile.profilemode;
    }

    return { updateText }
})();

export default DropDownUpdate;
