const btn = document.getElementById('revealBtn');
const wishBox = document.getElementById('wishBox');

btn.addEventListener('click', () => {
  wishBox.classList.add('show');
});
