let lis3 = document.querySelectorAll(".bullets li");
let h2 = document.querySelector(".text .parent h2");
let h1 = document.querySelector(".text .parent h1");
let info = document.querySelector(".text .parent p");
let image = document.querySelector(".box-image source");
let img = document.querySelector(".box-image img");
let nameOfMember;

if (window.sessionStorage.getItem("Crew Member")){
    nameOfMember = window.sessionStorage.getItem("Crew Member");
    Switch()

}

let ind3 = sessionStorage.getItem("activeTab3");
if (ind3 !== null) {
  lis3.forEach((e) => e.classList.remove("active"));
  lis3[ind3].classList.add("active");
}

lis3.forEach(function (li, index) {
  li.onclick = function (e1) {
    lis3.forEach(function (e) {
      e.classList.remove("active");
    });
    sessionStorage.setItem("activeTab3", index);
    e1.currentTarget.classList.add("active");
    nameOfMember =this.dataset.name
    console.log(nameOfMember)
    window.sessionStorage.setItem("Crew Member",nameOfMember)
    Switch()
  };
});
function Switch (){
    switch(nameOfMember){
        case "Commander":
        h2.textContent ="Commander ";
        h1.textContent="Douglas Hurley";
        info.textContent="Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.";
    
        image.srcset="assets/crew/image-douglas-hurley.webp"
        img.src="assets/crew/image-douglas-hurley.png"    
        break;
        case "Mission Specialist":
        h2.textContent ="";
        h1.textContent="MARK SHUTTLEWORTH";
        info.textContent="Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.";
        image.srcset="assets/crew/image-mark-shuttleworth.webp"
        img.src="assets/crew/image-mark-shuttleworth.png"
        break;
        case "PILOT":
        h2.textContent ="PILOT";
        h1.textContent="Victor Glover";
        info.textContent="Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ";
        image.srcset="assets/crew/image-victor-glover.webp"
        img.src="assets/crew/image-victor-glover.png"
        break;
        case "Flight Engineer":
        h2.textContent ="Flight Engineer";
        h1.textContent="Anousheh Ansari";
        info.textContent="Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ";
    
        image.srcset="assets/crew/image-anousheh-ansari.webp"
        img.src="assets/crew/image-anousheh-ansari.png"
        break;
    
    }
}
