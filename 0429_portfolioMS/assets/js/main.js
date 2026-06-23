// let test1 = "連線成功"; // 文字一定要加引號 ""
// console.log(test1);


// SHOW MENU
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* if (條件) {
    條件成立要做的事
    } */

// 加上SHOW MENU
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

// 移除SHOW MENU
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

// link移除SHOW MENU
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
    // 因為是在已經打開的狀態下點擊選單按鈕，所以選單按鈕要自動關閉，而不是添加show-menu
}
navLink.forEach(n => n.addEventListener('click',linkAction))
// n 箭頭函式 每一個 navLink 裡的元素
// n.addEventListener('click', linkAction)  幫「這一個元素」加上 click 事件
/* 相當於
navLink.forEach(function(n) {
    n.addEventListener('click', linkAction)
})
    */




/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
// 找到所有 有id標籤的section 
const sections = document.querySelectorAll('section[id]')

// 定義偵測函數
function scrollActive() {
    // pageYOffset 網頁Y軸往下滑動的位置
    const scrollY = window.pageYOffset
    // 動態取得導覽列的高度，而不是寫死 58
    const headerHeight = document.querySelector('.header').offsetHeight

    // 逐一比對每個區塊的位置
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - headerHeight,
              sectionId = current.getAttribute('id')

              if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {

                // 給nav__menu裡的a加上active-link
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
            }else{
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
            }
    })
}
// 給scroll 滑動時 加上function 事件
window.addEventListener('scroll', scrollActive)





// 初始化swiper 設定.home__swiper
let homeSwiper = new Swiper('.home-swiper', {
    spaceBetween: 30, /* 每張 slide 間距 30px */
    loop: true, /** 無限輪播 */

    pagination: {
        el: ".swiper-pagination", /** 點點放在哪個 HTML 容器 */
        clickable: true,  /** 點點可以點 */
    },
    // 如果點點還是不出來，嘗試加上這個觀察者模式
    // observer: true,
    // observeParents: true,
});




// form 提示文字是窗開關
let inputs = document.querySelectorAll('.contact__input');
let warning = document.querySelector('.form__warning');

inputs.forEach( input => {
    input.addEventListener('focus', () => {
        warning.style.display = 'block';
    });

    input.addEventListener('blur', () => {
        warning.style.display = 'none';
    });
});