const toggleMode = document.getElementById('toggleMode');
toggleMode.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    toggleMode.textContent = '☀️ Light Mode';
  } else {
    toggleMode.textContent = '🌙 Dark Mode';
  }
});
