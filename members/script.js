document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById('memberSearch');
    const memberCards = document.querySelectorAll('.member-card');

    searchInput.addEventListener('input', (e) => {
        const value = e.target.value.toLowerCase();

        memberCards.forEach(card => {
            // Get name and role from data attributes
            const name = card.getAttribute('data-name').toLowerCase();
            const role = card.getAttribute('data-role').toLowerCase();

            // Check if search value matches name OR role
            if (name.includes(value) || role.includes(value)) {
                card.style.display = "block";
                // Simple re-animation trigger
                card.style.animation = "fadeIn 0.4s ease-out forwards";
            } else {
                card.style.display = "none";
            }
        });
    });
});
