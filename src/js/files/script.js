// Подключение функционала "Чертогов Фрилансера"
import { bodyLock, bodyLockToggle, isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


window.onload = function () {
    document.addEventListener("click", documentActions)

    function documentActions(event) {
        const target = event.target;
        if (target.classList.contains("header-bottom-nav__icon")) {
            bodyLockToggle();
            document.documentElement.classList.toggle("menu-open");
        }
    }
 

    const headerBottomOffset = document.querySelector(".header-bottom").offsetTop;

    window.addEventListener("scroll", function (event) {
        const scrolled = Math.round(window.scrollY)
        
        document.documentElement.classList.toggle(
            "_fixed", 
            scrolled > headerBottomOffset
        )
    })
}