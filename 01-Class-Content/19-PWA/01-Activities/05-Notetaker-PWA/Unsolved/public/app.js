const actionBtn = document.getElementById('action-button');
const makeNote = document.getElementById('make-new');
const results = document.getElementById('results');

function getResults() {
  clearTodos();
  fetch('/api/all')
    .then(function(response) {
      if (response.status !== 200) {
        console.log(
          'Looks like there was a problem. Status Code: ' + response.status
        );
        return;
      }
      response.json().then(function(data) {
        newTodoSnippet(data);
      });
    })
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });
}

function newTodoSnippet(res) {
  for (let i = 0; i < res.length; i++) {
    let data_id = res[i]['_id'];
    let title = res[i]['title'];
    let todoList = document.getElementById('results');
    snippet = `
      <p class="data-entry">
      <span class="dataTitle" data-id=${data_id}>${title}</span>
      </p>`;
    todoList.insertAdjacentHTML('beforeend', snippet);
  }
}

function clearTodos() {
  const todoList = document.getElementById('results');
  todoList.innerHTML = '';
}

function resetTitleAndNote() {
  const note = document.getElementById('note');
  note.value = '';
  const title = document.getElementById('title');
  title.value = '';
}

function updateTitleAndNote(data) {
  const note = document.getElementById('note');
  note.value = data.note;
  const title = document.getElementById('title');
  title.value = data.title;
}

getResults();

actionBtn.addEventListener('click', function(e) {
  if (e.target.matches('#make-new')) {
    element = e.target;
    data_id = element.getAttribute('data-id');
    fetch('/api/submit', {
      method: 'post',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: document.getElementById('title').value,
        note: document.getElementById('note').value,
        createdAt: Date.now()
      })
    })
      .then(res => res.json())
      .then(res => newTodoSnippet([res]));
    resetTitleAndNote();
  }
});
