let lis = document.querySelectorAll("body > .header ul.Sections li");
let ulOfLinks = document.querySelector("body > .header ul.Sections")

let ind = sessionStorage.getItem("activeTab");

if (ind !== null) {
  ind = parseInt(ind)
    lis.forEach(e => e.classList.remove("active"));
    lis[ind].classList.add("active");
  }
  // Add class Active
lis.forEach(function (li,index) {
  li.onclick = function (e1) {
    lis.forEach(function (e) {
      e.classList.remove("active");
    });
    sessionStorage.setItem("activeTab", index);
    e1.currentTarget.classList.add("active")
  };
});


let  conLinks = document.querySelector("body > .header .con-links img:nth-of-type(1)")
let imgClose=document.querySelector("body > .header .con-links img:nth-of-type(2)")
conLinks.style.transition="0.3s"
ulOfLinks.style.transition="0.3s"
 imgClose.style.transition="0.3s"
conLinks.addEventListener("click",showMenu);
imgClose.addEventListener("click",hideMenus)

function showMenu (){
  conLinks.style.display="none"
  ulOfLinks.style.display="flex"
  imgClose.style.display="block"
  }
function hideMenus(){
  conLinks.style.display="block"
  ulOfLinks.style.display="none"
  imgClose.style.display="none"
}

let winMedia = window.matchMedia("(max-width: 768px)");


winMedia.onchange = function () {
  console.log("العرض الحالي:", window.innerWidth);

  if (!winMedia.matches) {
    showMenu ()
    imgClose.style.display="none"
  }else{
    hideMenus()
  } 
};
// End Home