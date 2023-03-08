const btnNav = document.querySelector('.btn-nav-resp');
const listNav = document.querySelector('.content-list');
let imgBtn = document.querySelector('.img-btn');

btnNav.addEventListener('click', () => {

    listNav.classList.toggle('active-nav');

    if(imgBtn.src.include('menu')) {
        imgBtn.src ='./assets/croix.svg';
        imgBtn.style.width = "30px";
        imgBtn.style.height = "30px";
    } else {
        imgBtn.src ='./assets/menu.svg';
        imgBtn.style.width = "40px";
        imgBtn.style.height = "40px";
    }
    
})