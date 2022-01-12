
function openNav() {
    document.querySelector('.button-nav-back').innerHTML = `
    <button id="button-nav" onclick="closeNav()">
    <i class="fas fa-bars"></i>
    </button>
    `;
    document.querySelector('.navbar-back').classList.add('open-nav');
}
function closeNav() {
    document.querySelector('.button-nav-back').innerHTML = `
    <button id="button-nav" onclick="openNav()">
    <i class="fas fa-align-left"></i>
    </button>
    `;
    document.querySelector('.navbar-back').classList.remove('open-nav');
}