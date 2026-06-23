// let test1 = "連線成功";
// console.log(test1);

const navbar = document.querySelector("[data-navbar]");  /* nav__menu */
const navbarLinks = document.querySelectorAll("[data-nav-link]");  /* nav__link */
const navbarToggler = document.querySelector("[data-nav-toggler]")  /* nav__toggle-btn */

navbarToggler.addEventListener("click", function(){
    navbar.classList.toggle("active");  /* 變換列表 */
    this.classList.toggle("active");  /* 變換開關 */
})

for(let i = 0; i < navbarLinks.length; i++) {  /* 給link加上監聽事件 */
    navbarLinks[i].addEventListener("click", function(){
        navbar.classList.toggle("active");  /* 變換列表 */
        navbarToggler.classList.toggle("active");  /* 變換開關 */
    });
}



