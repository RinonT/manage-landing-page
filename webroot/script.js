const showMenuBtn = document.querySelector(".show_menu");
const hideMenuBtn = document.querySelector(".hide_menu");
const navMenu = document.querySelector(".header_menu");
 
function hideMenu() { 
    navMenu.classList.remove("display_menu");
    showMenuBtn.style.display = "flex";
    hideMenuBtn.style.display = "none";
}

function showMenu() { 
    navMenu.classList.add("display_menu");
    showMenuBtn.style.display = "none";
    hideMenuBtn.style.display = "flex";
}

showMenuBtn.addEventListener("click", showMenu);
hideMenuBtn.addEventListener("click", hideMenu)