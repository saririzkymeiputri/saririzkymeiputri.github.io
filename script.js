document.addEventListener("DOMContentLoaded", function () {
  const text = "Hi, I'm Sari Rizky Mei Putri\nWeb Developer & UI/UX Designer";
  const typedText = document.getElementById("typed-text");
  let index = 0;

  function typeWriter() {
    if (index < text.length) {
      typedText.textContent += text.charAt(index);
      index++;
      setTimeout(typeWriter, 70);
    }
  }

  typeWriter();
});

// Animasi daun jatuh
function createLeaf() {
  const leaf = document.createElement('div');
  leaf.classList.add('leaf');

  leaf.style.left = Math.random() * 100 + 'vw';

  const size = Math.random() * 20 + 10;
  leaf.style.width = size + 'px';
  leaf.style.height = size + 'px';
  leaf.style.animationDuration = Math.random() * 5 + 5 + 's';

  document.body.appendChild(leaf);

  setTimeout(() => {
    leaf.remove();
  }, 10000);
}

setInterval(createLeaf, 300);

// Fungsi reload jika sudah di contact.html
function reloadIfAlreadyThere(e) {
  const targetUrl = e.currentTarget.getAttribute('href');
  const currentPath = window.location.pathname;

  if (currentPath.endsWith(targetUrl)) {
    e.preventDefault();
    window.location.reload(); // paksa reload halaman
  }
}
