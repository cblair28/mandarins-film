document.addEventListener('DOMContentLoaded', function() {
  const headerToggle = document.querySelector('.Header-toggle');
  const headerEl = document.querySelector('.Header');

  if (headerToggle && headerEl) {
    headerToggle.addEventListener('click', () => {
      headerEl.classList.toggle('is-active');
    });
  }

}, false);