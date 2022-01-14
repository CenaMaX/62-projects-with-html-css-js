var input = document.getElementById('inp-todo');
var btn = document.getElementById('btn-todo');
var ul = document.querySelector('ul');
var items = document.getElementsByTagName('li');

function createItem() {
  let li = document.createElement('li');
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = '';

  function setActive() {
    li.classList.toggle('active');
  }
  li.addEventListener('click', setActive);

  let btnElement = document.createElement('button');
  btnElement.appendChild(document.createTextNode('X'));
  li.appendChild(btnElement);
  btnElement.addEventListener('click', deleteLi);
  function deleteLi() {
    li.classList.toggle('delete');
  }
}

function inputLength() {
  return input.value.length;
}

function AddRoutines() {
  if (inputLength() > 0) {
    createItem();
  }
}

function AddRoutinesWithKeypress(event) {
  if (inputLength() > 0 && event.which === 13) {
    createItem();
  }
}

btn.addEventListener('click', AddRoutines);
input.addEventListener('keypress', AddRoutinesWithKeypress);
