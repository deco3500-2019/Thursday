
const handleLocalStorage = () => {
  //Seb: Rather than querySelector it is better to use getElementById of there is only one
  var btnSave = document.getElementById('btnSave');
  var btnClear = document.getElementById('btnClear');
  var btnRestore = document.getElementById('btnRestore');
  var txtMsg = document.getElementById('txtMsg');

  btnSave.addEventListener('click', function() {
    console.log('save');
    
    window.localStorage.setItem('msg', txtMsg.value);
    txtMsg.value = '';
  }, false);
  
  btnClear.addEventListener('click', function() {
    //Seb: if this is clearing the text, should this delete the msg from the local storage??
    txtMsg.value = '';
  }, false);
  
  btnRestore.addEventListener('click', function() {
    console.log('restore');  


    // Seb: no need for a second parameter with getItem.
    var value = window.localStorage.getItem('msg');
    
    txtMsg.value = value;
  }, false);
}

handleLocalStorage();




