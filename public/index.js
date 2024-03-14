document.getElementById('burger-menu').addEventListener('click', function () {
  const mobileMenu = document.getElementById('mobile-menu');
  mobileMenu.classList.toggle('hidden');
});

const checkbox = document.querySelector('#toggle');
const html = document.querySelector('html');

const toggleDarkMode = function () {
  checkbox.checked ? html.classList.add('dark') : html.classList.remove('dark');
};

toggleDarkMode();
checkbox.addEventListener('click', toggleDarkMode);
