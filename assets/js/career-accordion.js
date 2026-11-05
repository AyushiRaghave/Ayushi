
(() => {
  const root = document.getElementById('career-experience');
  if (!root || root.dataset.accordionReady === 'true') return;
  root.dataset.accordionReady = 'true';

  root.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-career-chapter]');
    if (!button || !root.contains(button)) return;

    const detailId = button.getAttribute('aria-controls');
    const detail = detailId ? document.getElementById(detailId) : null;
    if (!detail) return;

    const willOpen = button.getAttribute('aria-expanded') !== 'true';
    button.setAttribute('aria-expanded', String(willOpen));
    button.classList.toggle('is-open', willOpen);
    detail.hidden = !willOpen;

    const icon = button.querySelector('.career-chapter-icon');
    if (icon) icon.textContent = willOpen ? '−' : '＋';
  });

  // Keep the initial state and icon in sync with the accessible state.
  root.querySelectorAll('button[data-career-chapter]').forEach((button) => {
    const detail = document.getElementById(button.getAttribute('aria-controls'));
    const isOpen = button.getAttribute('aria-expanded') === 'true';
    if (detail) detail.hidden = !isOpen;
    button.classList.toggle('is-open', isOpen);
    const icon = button.querySelector('.career-chapter-icon');
    if (icon) icon.textContent = isOpen ? '−' : '＋';
  });
})();
