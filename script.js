
window.onload = function() {window.scrollTo(0,0);}
var menulist=document.getElementById("navlist");
var menubar=document.querySelector(".menubar");
menubar.addEventListener("click",()=>{
    menulist.classList.toggle("showhide");
})
menulist.addEventListener("click",()=>{
    menulist.classList.toggle("showhide");
})
var contact_form=document.getElementById("contact_form");
var contact_ovrlay=document.querySelector(".contact_ovrlay");
contact_form.addEventListener("submit",(e)=>{
    e.preventDefault();
    window.location.href="contact.html";
})