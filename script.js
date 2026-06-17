document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggling
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIconOpen = document.getElementById('menu-icon-open');
  const menuIconClose = document.getElementById('menu-icon-close');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      menuIconOpen.classList.toggle('hidden');
      menuIconClose.classList.toggle('hidden');
    });

    // Close mobile menu on clicking any link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuIconOpen.classList.remove('hidden');
        menuIconClose.classList.add('hidden');
      });
    });
  }

  // 2. Project Card Filtering
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Get target filter category
      const targetFilter = button.getAttribute('data-filter');

      // Update active button state styling
      filterButtons.forEach(btn => {
        btn.className = "filter-btn px-4 py-2 rounded-xl text-xs font-medium transition-all border border-slate-850 bg-slate-900/30 text-slate-400 hover:text-white hover:bg-slate-900/60";
      });
      button.className = "filter-btn px-4 py-2 rounded-xl text-xs font-medium transition-all bg-indigo-600 text-white shadow-lg shadow-indigo-600/10";

      // Filter project cards
      projectCards.forEach(card => {
        const cardTag = card.getAttribute('data-tag');
        if (targetFilter === 'all' || cardTag === targetFilter) {
          card.classList.remove('hidden');
          card.classList.add('flex');
        } else {
          card.classList.add('hidden');
          card.classList.remove('flex');
        }
      });
    });
  });

  // 3. Dynamic Footer Year
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
