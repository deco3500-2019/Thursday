const assignValue = (inputId) => {
    //Seb: we get the input Id and give it the value from local storage in msg
    document.getElementById(inputId).value = window.localStorage.getItem('msg');
}

assignValue('newInput');