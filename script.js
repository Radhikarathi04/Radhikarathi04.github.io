// Burger menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const leftSide = document.querySelector('.left-side');
    
    if (burgerMenu && leftSide) {
        burgerMenu.addEventListener('click', function() {
            this.classList.toggle('active');
            leftSide.classList.toggle('active');
        });
    }
});
