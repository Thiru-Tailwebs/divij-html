document.querySelectorAll('.cart-button').forEach(button => {
  button.addEventListener('click', function () {
    const target = document.querySelector(this.dataset.target);

    // Close any currently open sections
    document.querySelectorAll('.view-style-section.open').forEach(section => {
      if (section !== target) {
        section.classList.remove('open');
        setTimeout(() => {
          section.style.display = 'none';
        }, 300); // Wait for transition
      }
    });

    // Toggle the clicked section
    if (target.classList.contains('open')) {
      target.classList.remove('open');
      setTimeout(() => {
        target.style.display = 'none';
      }, 300); // Wait for the transition to complete
    } else {
      target.style.display = 'block';
      setTimeout(() => {
        target.classList.add('open');
      }, 10); // Slight delay for smooth transition
    }
  });
});