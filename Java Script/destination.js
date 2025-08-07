let lis2 = document.querySelectorAll(".menu-sections li");
let ulOfLinks2 = document.querySelector(".menu-sections");

let ind2 = parseInt(sessionStorage.getItem("activeTab2"), 10);

if (!isNaN(ind2) && ind2 >= 0 && ind2 < lis2.length) {
    lis2.forEach(e => e.classList.remove("active"));
    lis2[ind2].classList.add("active");
  }
  // Add class Active
lis2.forEach(function (li,index) {
  li.onclick = function (e1) {
    lis2.forEach(function (e) {
      e.classList.remove("active");
    });
    sessionStorage.setItem("activeTab2", index);
    e1.currentTarget.classList.add("active")
  };
});


const allPlanets = document.querySelectorAll(".menu-sections li a");
const image = document.querySelector(".image img");
const picture = document.querySelector("picture source");
const p = document.querySelector("div.text p");
const h1 = document.querySelector("div.text h1");
const distance = document.querySelector("div.text-box .box:nth-of-type(1) div");
const duration = document.querySelector("div.text-box .box:nth-of-type(2) div");

// first definition the name of the planet 
allPlanets.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const name = this.textContent.trim(); 
    const nameImg = name.toLowerCase();   // to use it at changing the photo
    sessionStorage.setItem("planetName", name); // save the name of planet
    changeContent(name, nameImg); // call the function
  });
});

function changeContent(Name, nameImg) {
  const newImageSrc = `assets/destination/image-${nameImg}.png`;
  image.src = newImageSrc;
  image.alt = `${Name}`;
  picture.srcset = `assets/destination/image-${nameImg}.webp`;

  image.onload = () => console.log("تم تحميل الصورة بنجاح");
  image.onerror = () => console.error("فشل تحميل الصورة من:", newImageSrc);

  h1.textContent = `${Name}`;

 // change the info
  switch(Name){
    case "Titan":
      p.textContent = `The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.`;
      distance.textContent = "1.6 bil. km";
      duration.textContent = "7 years";
    break;
    case "Mars":
      p.textContent ="Don’t forget to pack your hiking boots. You’ll need them totackle Olympus Mons, the tallest planetary mountain in oursolar system. It’s two and a half times the size of Everest!"
      distance.textContent ="225 mil. km";
      duration.textContent = "9 months"
    break;
    case"Moon":
    p.textContent ="See our planet as you’ve never seen it before. A perfectrelaxing trip away to help regain perspective and come backrefreshed. While you’re there, take in some history by visitingthe Luna 2 and Apollo 11 landing sites."
    distance.textContent ="384,400 km"
    duration.textContent="3 days"
    break;
    case "Europa":
      p.textContent ="The smallest of the four Galilean moons orbiting Jupiter,Europa is a winter lover’s dream. With an icy surface, it’sperfect for a bit of ice skating, curling, hockey, or simplerelaxation in your snug wintery cabin."
      distance.textContent="628 mil. km"
      duration.textContent="3 years"
    break;
  }
  
}

window.addEventListener("DOMContentLoaded", () => {
  const storedName = sessionStorage.getItem("planetName");
  if (storedName) {
    changeContent(storedName, storedName.toLowerCase());
  }
});
