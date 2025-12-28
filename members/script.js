document.addEventListener("DOMContentLoaded", () => {
    const filters = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.member-card');

    filters.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update Active Button
            filters.forEach(f => f.classList.remove('active'));
            btn.classList.add('active');

            // Filter Cards
            const category = btn.getAttribute('data-filter');
            
            cards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.classList.remove('hide');
                } else {
                    card.classList.add('hide');
                }
            });
        });
    });
});
