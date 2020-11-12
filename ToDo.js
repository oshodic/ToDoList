const form = document.querySelector('form');
const newItem = document.querySelector('input[type="text"')
const ol = document.querySelector('ol');



form.addEventListener('submit', function(e) {
  e.preventDefault();


  let newToDo = document.createElement('li');
  let newBtn = document.createElement('button');
  
  newToDo.innerText = newItem.value;
  newBtn.innerText = 'X';
  newToDo.appendChild(newBtn);
  ol.appendChild(newToDo);
  newItem.value = '';

localStorage.setItem(newToDo,newBtn)


});



 ol.addEventListener('click', function(e){


  if (e.target.tagName === 'BUTTON') {
    e.target.parentElement.remove();
  };

  if (e.target.tagName === 'LI') {
    //e.target.className = 'strike'
    e.target.classList.toggle('strike');
  }


});







