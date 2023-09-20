const body = document.querySelector("body"),
    nav = document.querySelector("nav"),
    searchToggle = document.querySelector(".searchToggle"),
    sidebarOpen = document.querySelector(".sidebarOpen"),
    siderbarClose = document.querySelector(".siderbarClose"),
    option = document.querySelector('.option'),
    optionDropdown = document.querySelector('.option-dropdown'),
    blackScreen = document.querySelector('.black-screen'),
    clipboardModal = document.querySelector('.clipboard-modal'),
    share = document.querySelector('.button-share');

// toggle search box
searchToggle.addEventListener("click" , () =>{
    searchToggle.classList.toggle("active");
});
 
//  toggle sidebar
sidebarOpen.addEventListener("click" , () =>{
    nav.classList.add("active");
});

// dropdown option toggle
option.addEventListener("click", () =>{
    optionDropdown.classList.toggle('active');
});

share.addEventListener('click', () =>{
    blackScreen.classList.add('active');
    clipboardModal.classList.add('active');
});

body.addEventListener("click" , e =>{
    let clickedElm = e.target;

    if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu") ){
        nav.classList.remove("active");
    }

    if(clickedElm.classList.contains("black-screen") || clickedElm.classList.contains("clipboard-close") ||  clickedElm.classList.contains("clipboard-modal")){
        blackScreen.classList.remove('active');
        clipboardModal.classList.remove('active');
    }
});

