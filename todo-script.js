// H4 Javascript Logic

// Array menyimpan banyak data
let todos = [];
let todoIdCounter = 0;

// Function dengan parameter
function addTodo() {
  // Ambil input dari user
  let todoInput = document.getElementById('todoInput');
  let todoText = todoInput.value.trim();

  // Conditional Validasi Input
  if (todoText === '') {
    alert('⚠️ Please Enter Your Task!');
    return;
  }

  // Object data terstruktur
  let newTodo = {
    id: todoIdCounter++,
    text: todoText,
    completed: false,
    createdAt: new Date().toLocaleString(),
  };

  // Push data ke array
  todos.push(newTodo);

  // Kosongkan input
  todoInput.value = '';

  // Tampilkan semua todos
  displayTodos();
  updateStats();

  // Log untuk debugging
  console.log('New Todo Added:', newTodo);
  console.log('Total Todos:', todos);
}

// Function menampilkan semua todos
function displayTodos() {
  let todoList = document.getElementById('todoList');
  let emptyState = document.getElementById('emptyState');

  // Conditional cek apakah ada todo
  if (todos.length === 0) {
    todoList.innerHTML = '';
    emptyState.classList.add('show');
    return;
  }

  emptyState.classList.remove('show');

  // Loop Tampilkan semua todo
  let html = '';

  for (let i = 0; i < todos.length; i++) {
    let todo = todos[i];

    // Conditional tentukan kelas completed
    let completedClass = todo.completed ? 'completed' : '';
    let checkedAttribute = todo.completed ? 'checked' : '';

    html += `
            <li class="todo-item">
                <input 
                    type="checkbox"
                    class="todo-checkbox"
                    ${checkedAttribute}
                    onchange="toggleCompleted(${todo.id})"
                >
                <span class="todo-text ${completedClass}">${todo.text}</span>
                <button class="btn-delete" onclick="deleteTodo(${todo.id})">
                    <i class="fa fa-trash"></i> Delete
                </button>
            </li>
        `;
  }

  todoList.innerHTML = html;
}

// Function toggle completed
function toggleCompleted(id) {
  // Loop cari todo berdasarkan id
  for (let i = 0; i < todos.length; i++) {
    // Cek id yang cocok
    if (todos[i].id === id) {
      // Toggle completed
      todos[i].completed = !todos[i].completed;
      break;
    }
  }

  displayTodos();
  updateStats();
  console.log('Toggle Completed for Todo ID:', id);
}

// Function delete
function deleteTodo(id) {
  // Conditional Konfirmasi delete
  if (!confirm('Are you sure you want to delete this task?')) {
    return;
  }

  // Loop cari index todo
  let indexToDelete = -1;

  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id === id) {
      indexToDelete = i;
      break;
    }
  }

  // Hapus data
  if (indexToDelete !== -1) {
    todos.splice(indexToDelete, 1);
  }

  displayTodos();
  updateStats();

  console.log('Deleted Todo ID:', id);
  console.log('Remaining Todos:', todos);
}

// Function Update statistik
function updateStats() {
  let totalTasks = todos.length;
  let completedTasks = 0;

  // Loop hitung completed tasks
  for (let i = 0; i < todos.length; i++) {
    // Cek completed
    if (todos[i].completed) {
      completedTasks++;
    }
  }

  let remainingTasks = totalTasks - completedTasks;

  // Update tampilan
  document.getElementById('totalTasks').textContent = totalTasks;
  document.getElementById('completedTasks').textContent = completedTasks;
  document.getElementById('remainingTasks').textContent = remainingTasks;
}

// Function untuk handler enter key
function handleEnter(event) {
  // Cek apakah enter di tekan
  if (event.key === 'Enter') {
    addTodo();
  }
}

// Clear all completed
function clearCompleted() {
  // Loop cari todo completed
  for (let i = todos.length - 1; i >= 0; i--) {
    if (todos[i].completed) {
      todos.splice(i, 1);
    }
  }

  displayTodos();
  updateStats();
  console.log('Cleared Completed Todos:', todos);
}

// Pesan selamat datang
console.log('===== TODO LIST APP =====');
console.log('📝 Belajar JavaScript Logic - Hari 4');
console.log('Fitur: Array, Loop, Conditional, Object, Function');

// Init: tampilkan empty state
displayTodos();
updateStats();
