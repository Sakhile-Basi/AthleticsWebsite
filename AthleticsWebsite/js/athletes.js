  document.addEventListener('DOMContentLoaded', () => {
            // Mobile hamburger navigation toggle (matching your CSS: .menu-toggle.open & .main-nav.active)
            const menuToggle = document.getElementById('menuToggle');
            const mainNav = document.getElementById('mainNav');

            if (menuToggle && mainNav) {
                menuToggle.addEventListener('click', () => {
                    menuToggle.classList.toggle('open');
                    mainNav.classList.toggle('active');
                });

                // Close menu when clicking outside
                document.addEventListener('click', (e) => {
                    if (!menuToggle.contains(e.target) && !mainNav.contains(e.target) && mainNav.classList.contains('active')) {
                        menuToggle.classList.remove('open');
                        mainNav.classList.remove('active');
                    }
                });
            }

            // Athlete search and filter logic
            const searchInput = document.getElementById('athleteSearch');
            const filterButtons = document.querySelectorAll('.filter-btn');
            const athleteCards = document.querySelectorAll('.athlete-card');
            const noResults = document.getElementById('noResults');

            let currentFilter = 'all';
            let searchQuery = '';

            function updateCards() {
                let visibleCount = 0;

                athleteCards.forEach(card => {
                    const name = card.getAttribute('data-name') || '';
                    const events = card.getAttribute('data-events') || '';
                    const cardText = card.textContent.toLowerCase();

                    const matchesFilter = (currentFilter === 'all') || events.includes(currentFilter);
                    const matchesSearch = !searchQuery || cardText.includes(searchQuery);

                    if (matchesFilter && matchesSearch) {
                        card.style.display = 'flex';
                        visibleCount++;
                    } else {
                        card.style.display = 'none';
                    }
                });

                if (noResults) {
                    noResults.style.display = visibleCount === 0 ? 'block' : 'none';
                }
            }

            // Filter button click events
            filterButtons.forEach(btn => {
                btn.addEventListener('click', () => {
                    filterButtons.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    currentFilter = btn.getAttribute('data-filter');
                    updateCards();
                });
            });

            // Live search input event
            if (searchInput) {
                searchInput.addEventListener('input', (e) => {
                    searchQuery = e.target.value.trim().toLowerCase();
                    updateCards();
                });
            }
        });