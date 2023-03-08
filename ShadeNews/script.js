// Login Elements
const signInButton = document.querySelectorAll('.sign-in');
const loginSection = document.querySelector('.login-section')
const loginPanel = document.querySelector('.login-panel')
const arrow = document.querySelector(".login-panel i");

// Register Elements
const signUpButton = document.querySelectorAll('.sign-up');
const registerSection = document.querySelector(".register-section");
const registerPanel = document.querySelector(".register-panel");
const arrowRegister = document.querySelector(".register-panel i");

// Logout Elements
const logoutButton = document.querySelectorAll('.logout');
const logoutSection = document.querySelector('.logout-section');
const logoutPanel = document.querySelector('.logout-panel');
// Logout Buttons
const approve = document.getElementById('approve');
const decline = document.getElementById('decline');

// Profile Elements
const profileImage = document.querySelector('.avatar');

const remember = document.querySelector('.remember');

// Responsive Elements

const burgerMenu = document.querySelector('.burger-nav');
const aside = document.querySelector('.responsive-menu');

if (burgerMenu) {

    burgerMenu.addEventListener('click', () => {
        aside.classList.toggle('open');
    })

    window.addEventListener('scroll', () => {
        aside.classList.remove('open');
    })
}

// Login
if (signInButton) {

    // Appear Login
    signInButton.forEach(x => {
        x.addEventListener('click', (e) => {
            loginSection.classList.add('dark');
            loginPanel.classList.add('active');
        })
    })

    // Remove Login
    arrow.addEventListener('click', () => {
        loginSection.classList.remove('dark');
        loginPanel.classList.remove('active');
    })
}


// Register
if (signUpButton) {

    // Appear Register
    signUpButton.forEach(x => {
        x.addEventListener('click', () => {
            registerSection.classList.add('dark');
            registerPanel.classList.add('active');
        })
    })

    // Remove Register
    arrowRegister.addEventListener('click', () => {
        registerSection.classList.remove('dark');
        registerPanel.classList.remove('active');
    })
}


// Logout
if (logoutButton) {

    // Appear Logout
    logoutButton.forEach(x => {
        x.addEventListener('click', () => {
            logoutSection.classList.add('dark');
            logoutPanel.classList.add('active');
        })
    })

    approve.addEventListener('click', () => {
        logoutSection.classList.remove('dark');
        logoutPanel.classList.remove('active');
    })

    decline.addEventListener('click', () => {
        logoutSection.classList.remove('dark');
        logoutPanel.classList.remove('active');
    })
}

if (remember) {
    remember.addEventListener('click', (e) => {
        e.currentTarget.classList.toggle('active');
    })
}

if (profileImage) {
    profileImage.addEventListener('mouseenter', (e) => {
        e.currentTarget.classList.add('active');
    })

    profileImage.addEventListener('mouseleave', (e) => {
        e.currentTarget.classList.remove('active');
    })

}

// Style Switcher

const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(e, color) {
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    })
}
