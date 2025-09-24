// ===== GLOBAL VARIABLES =====
const box = document.querySelector('.animated-box');
const toggleBoxBtn = document.getElementById('toggleBoxBtn');
const modal = document.getElementById('modal');
const showModalBtn = document.getElementById('showModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');

/**
 * Toggle a CSS class to start/stop an animation
 * @param {HTMLElement} element - element to toggle
 * @param {string} className - class to add/remove
 * @returns {boolean} true if class was added, false if removed
 */
function toggleAnimation(element, className) {
  const added = element.classList.toggle(className);
  return added;
}

/**
 * Calculate next background color based on a flag
 * Demonstrates parameters + return
 */
function pickBackgroundColor(isActive) {
  return isActive ? '#2ecc71' : '#e67e22';
}

// ===== EVENT HANDLERS =====
toggleBoxBtn.addEventListener('click', () => {
  const active = toggleAnimation(box, 'box-active');
  box.style.background = pickBackgroundColor(active); // apply result
});

showModalBtn.addEventListener('click', () => openModal());
closeModalBtn.addEventListener('click', () => closeModal());

/** Local scope example: only accessible inside */
function openModal() {
  let localMessage = 'Modal opened'; // local variable
  console.log(localMessage);
  modal.classList.add('show');
  modal.classList.remove('hidden');
}

function closeModal() {
  modal.classList.remove('show');
  // wait for transition to end before hiding
  setTimeout(() => modal.classList.add('hidden'), 500);
}
