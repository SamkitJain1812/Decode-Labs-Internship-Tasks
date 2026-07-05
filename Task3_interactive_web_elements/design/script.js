/* ==========================================================
   Project 3 — Interactive Web Elements
   Pure JavaScript · DOM Manipulation
   ========================================================== */

/* ---------- 1. DARK MODE TOGGLE ---------- */
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;
const themeIcon = themeToggle.querySelector('.theme-icon');
const themeLabel = themeToggle.querySelector('.theme-label');

function applyTheme(theme) {
  html.setAttribute('data-theme', theme);
  themeIcon.textContent = theme === 'dark' ? '☀' : '☾';
  themeLabel.textContent = theme === 'dark' ? 'Light' : 'Dark';
  localStorage.setItem('theme', theme);
}

applyTheme(localStorage.getItem('theme') || 'light');

themeToggle.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  applyTheme(current === 'dark' ? 'light' : 'dark');
});

/* ---------- 2. LIVE CLOCK ---------- */
const clockEl = document.getElementById('live-clock');
function tickClock() {
  const now = new Date();
  clockEl.textContent = now.toLocaleTimeString('en-GB');
}
tickClock();
setInterval(tickClock, 1000);

/* ---------- 3. COUNTER ---------- */
let count = parseInt(localStorage.getItem('count') || '0', 10);
const countEl = document.getElementById('count');

function renderCount() {
  countEl.textContent = count;
  localStorage.setItem('count', count);
}
renderCount();

document.getElementById('increment').addEventListener('click', () => {
  count++; renderCount();
});
document.getElementById('decrement').addEventListener('click', () => {
  count--; renderCount();
});
document.getElementById('reset').addEventListener('click', () => {
  count = 0; renderCount();
});

/* ---------- 4. LIVE TEXT INPUT ---------- */
const liveInput = document.getElementById('live-input');
const liveOutput = document.getElementById('live-output');
const charCount = document.getElementById('char-count');

liveInput.addEventListener('input', (e) => {
  const val = e.target.value;
  liveOutput.textContent = val || '—';
  charCount.textContent = val.length;
});

/* ---------- 5. ACCORDION ---------- */
document.querySelectorAll('.acc-head').forEach(head => {
  head.addEventListener('click', () => {
    const item = head.parentElement;
    item.classList.toggle('open');
  });
});

/* ---------- 6. COLOR PICKER ---------- */
const swatches = document.querySelectorAll('.swatch');
const previewBox = document.getElementById('preview-box');

swatches.forEach(sw => {
  sw.addEventListener('click', () => {
    const color = sw.dataset.color;
    previewBox.style.background = color;
    previewBox.style.color = '#ffffff';
    swatches.forEach(s => s.classList.remove('active'));
    sw.classList.add('active');
  });
});

/* ---------- 7. TODO LIST ---------- */
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const todoEmpty = document.getElementById('todo-empty');
const todoCountEl = document.getElementById('todo-count');
const filters = document.querySelectorAll('.todo-filters .filter');

let todos = JSON.parse(localStorage.getItem('todos') || '[]');
let currentFilter = 'all';

function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todos));
}

function renderTodos() {
  todoList.innerHTML = '';
  const filtered = todos.filter(t => {
    if (currentFilter === 'active') return !t.done;
    if (currentFilter === 'done') return t.done;
    return true;
  });

  if (filtered.length === 0) {
    todoEmpty.hidden = false;
    todoEmpty.textContent = todos.length === 0
      ? 'No tasks yet. Add one above.'
      : 'No tasks match this filter.';
  } else {
    todoEmpty.hidden = true;
  }

  filtered.forEach(todo => {
    const li = document.createElement('li');
    li.className = 'todo-item' + (todo.done ? ' done' : '');
    li.innerHTML = `
      <button class="todo-check" aria-label="Toggle complete">
        ${todo.done ? '✓' : ''}
      </button>
      <span class="todo-text"></span>
      <button class="todo-remove" aria-label="Remove">×</button>
    `;
    li.querySelector('.todo-text').textContent = todo.text;

    li.querySelector('.todo-check').addEventListener('click', () => {
      todo.done = !todo.done;
      saveTodos();
      renderTodos();
    });

    li.querySelector('.todo-remove').addEventListener('click', () => {
      todos = todos.filter(t => t.id !== todo.id);
      saveTodos();
      renderTodos();
    });

    todoList.appendChild(li);
  });

  todoCountEl.textContent = todos.length;
}

todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = todoInput.value.trim();
  if (!text) return;
  todos.push({ id: Date.now(), text, done: false });
  saveTodos();
  renderTodos();
  todoInput.value = '';
});

filters.forEach(f => {
  f.addEventListener('click', () => {
    filters.forEach(x => x.classList.remove('active'));
    f.classList.add('active');
    currentFilter = f.dataset.filter;
    renderTodos();
  });
});

renderTodos();

/* ---------- 8. IMAGE GALLERY ---------- */
const galleryData = [
  { cat: 'nature',   src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80' },
  { cat: 'city',     src: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=80' },
  { cat: 'abstract', src: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=600&q=80' },
  { cat: 'nature',   src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&q=80' },
  { cat: 'city',     src: 'https://images.unsplash.com/photo-1444723121867-7a241cacace9?w=600&q=80' },
  { cat: 'abstract', src: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&q=80' },
  { cat: 'nature',   src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&q=80' },
  { cat: 'city',     src: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=600&q=80' },
];

const galleryGrid = document.getElementById('gallery-grid');
const galleryFilters = document.querySelectorAll('#gallery-filters .filter');
let currentCat = 'all';

function renderGallery() {
  galleryGrid.innerHTML = '';
  const items = galleryData.filter(i => currentCat === 'all' || i.cat === currentCat);

  items.forEach(item => {
    const div = document.createElement('div');
    div.className = 'gallery-item';
    div.innerHTML = `
      <img src="${item.src}" alt="${item.cat}" loading="lazy" />
      <span class="cat-tag">${item.cat}</span>
    `;
    div.addEventListener('click', () => openLightbox(item.src));
    galleryGrid.appendChild(div);
  });
}

galleryFilters.forEach(f => {
  f.addEventListener('click', () => {
    galleryFilters.forEach(x => x.classList.remove('active'));
    f.classList.add('active');
    currentCat = f.dataset.cat;
    renderGallery();
  });
});

renderGallery();

/* ---------- 9. LIGHTBOX ---------- */
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.getElementById('lightbox-close');

function openLightbox(src) {
  lightboxImg.src = src;
  lightbox.hidden = false;
}
function closeLightbox() {
  lightbox.hidden = true;
  lightboxImg.src = '';
}
lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !lightbox.hidden) closeLightbox();
});

/* ---------- 10. FORM VALIDATION ---------- */
const contactForm = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const successMsg = document.getElementById('form-success');

function showError(input, msg) {
  input.classList.add('invalid');
  document.querySelector(`.err[data-for="${input.id}"]`).textContent = msg;
}
function clearError(input) {
  input.classList.remove('invalid');
  document.querySelector(`.err[data-for="${input.id}"]`).textContent = '';
}

function validateName() {
  if (nameInput.value.trim().length < 2) {
    showError(nameInput, 'Name must be at least 2 characters');
    return false;
  }
  clearError(nameInput); return true;
}
function validateEmail() {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!re.test(emailInput.value.trim())) {
    showError(emailInput, 'Enter a valid email address');
    return false;
  }
  clearError(emailInput); return true;
}
function validateMessage() {
  if (messageInput.value.trim().length < 10) {
    showError(messageInput, 'Message must be at least 10 characters');
    return false;
  }
  clearError(messageInput); return true;
}

nameInput.addEventListener('input', validateName);
emailInput.addEventListener('input', validateEmail);
messageInput.addEventListener('input', validateMessage);

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const ok = [validateName(), validateEmail(), validateMessage()].every(Boolean);
  if (ok) {
    successMsg.hidden = false;
    contactForm.reset();
    setTimeout(() => { successMsg.hidden = true; }, 4000);
  }
});
