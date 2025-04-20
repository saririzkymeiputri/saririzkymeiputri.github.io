document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const offset = 80; // Adjust this value based on your header height
        const targetPosition = targetElement.offsetTop - offset;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  const mobileMenuButton = document.querySelector('.mobile-menu-button');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
  
  const phrases = ["Sari Rizky Mei Putri", "Developer", "UI/UX Designer"];
  let currentPhraseIndex = 0;
  let currentCharIndex = 0;
  const typingElement = document.getElementById("typing-animation");

  // Create blinking cursor element
  const cursor = document.createElement('span');
  cursor.className = 'inline-block ml-1 w-2 h-10 bg-yellow-500 align-middle animate-blink';
  typingElement.appendChild(cursor);

  function type() {
    if (currentCharIndex < phrases[currentPhraseIndex].length) {
      typingElement.textContent = "Hi, I'm " + phrases[currentPhraseIndex].substring(0, currentCharIndex + 1);
      typingElement.appendChild(cursor); // Re-append cursor after updating text
      currentCharIndex++;
      setTimeout(type, 100);
    } else {
      setTimeout(deleteText, 1000); // Wait before starting to delete
    }
  }

  function deleteText() {
    if (currentCharIndex > 0) {
      typingElement.textContent = "Hi, I'm " + phrases[currentPhraseIndex].substring(0, currentCharIndex - 1);
      typingElement.appendChild(cursor); // Re-append cursor after updating text
      currentCharIndex--;
      setTimeout(deleteText, 100);
    } else {
      currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length; // Loop back to the first phrase
      currentCharIndex = 0;
      setTimeout(type, 1000); // Start typing the next phrase
    }
  }

  typingElement.textContent = "Hi, I'm " + phrases[currentPhraseIndex];
  typingElement.appendChild(cursor); // Add cursor initially
  setTimeout(type, 1000);

  const musicToggle = document.getElementById('music-toggle');
  const backgroundMusic = document.getElementById('background-music');
  const playIcon = document.getElementById('play-icon');
  const pauseIcon = document.getElementById('pause-icon');

  musicToggle.addEventListener('click', () => {
    if (backgroundMusic.paused) {
      backgroundMusic.play();
      playIcon.classList.add('hidden');
      pauseIcon.classList.remove('hidden');
    } else {
      backgroundMusic.pause();
      pauseIcon.classList.add('hidden');
      playIcon.classList.remove('hidden');
    }
  });