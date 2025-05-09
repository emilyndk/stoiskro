document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.accordion-toggle').forEach((toggle) => {
        toggle.addEventListener('click', () => {
            const accordion = toggle.closest('.accordion');
            const content = accordion.querySelector('.accordion-content');
            const icon = accordion.querySelector('.accordion-icon');
            
            const isOpen = content.style.maxHeight && content.style.maxHeight !== '0px';
            
            if (isOpen) {
                content.style.maxHeight = '0px';
                content.style.opacity = '0';
                icon.style.transform = 'rotate(0deg)';
            } else {
                content.style.maxHeight = '500px'; // Brug en fast max-height for at teste
                content.style.opacity = '1';
                icon.style.transform = 'rotate(180deg)';
            }
        });
    });
});
