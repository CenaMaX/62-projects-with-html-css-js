const note_container = document.querySelector('.note-container');
const addNote = document.getElementById('add');

const notes = JSON.parse(localStorage.getItem('notes'));

if (notes) {
  notes.forEach((note) => addNewNote(note));
}

// Event Listener
addNote.addEventListener('click', () => addNewNote());

function addNewNote(text = '') {
  const note = document.createElement('div');
  note.classList.add('note');
  note.innerHTML = `
    <div class="note-head">
        <a title="Edit" id="edit" class="btn btn-edit"><i class="fas fa-edit"></i></a>
        <a title="Delete" id="delete" class="btn btn-delete"><i class="fas fa-trash"></i></a>
    </div>

    <div class="note-note-main">
        <div id="note-text" class="note-text ${text ? '' : 'hidden'}"></div>
        <textarea id="textarea" class="textarea ${
          text ? 'hidden' : ''
        }"></textarea>
    </div>
    `;

  const deleteNote = note.querySelector('.btn-delete');
  const editNote = note.querySelector('.btn-edit');
  const noteData = note.querySelector('.note-text');
  const textarea = note.querySelector('.textarea');

  textarea.value = text;
  noteData.innerHTML = text;

  deleteNote.addEventListener('click', () => {
    note.remove();

    updateLocalStorage();
  });

  editNote.addEventListener('click', () => {
    noteData.classList.toggle('hidden');
    textarea.classList.toggle('hidden');
  });

  textarea.addEventListener('input', (e) => {
    noteData.innerHTML = e.target.value;

    updateLocalStorage();
  });

  note_container.appendChild(note);
}

function updateLocalStorage() {
  const noteText = document.querySelectorAll('.textarea');

  const notes = [];

  noteText.forEach((note) => notes.push(note.value));

  localStorage.setItem('notes', JSON.stringify(notes));
}
