(function(){
    const openingBtn = document.querySelector(".sidebar__hamburger");
const closinBtn = document.querySelector(".sidebar__close");
const sidebar = document.querySelector(".sidebar");

openingBtn.addEventListener("click",function(){
sidebar.classList.add('sidebar--opened');
});

closinBtn.addEventListener('click',function(){
    sidebar.classList.remove('sidebar--opened');
});
}()); 
