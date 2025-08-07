let lis3 = document.querySelectorAll(".bullets li");
let h2 = document.querySelector(".text .parent h2");
let h1 = document.querySelector(".text .parent h1");
let info = document.querySelector(".text .parent p");
let image = document.querySelector(".landscape");
let nameOfSection;
let img = document.querySelector(".portrait");

if (window.sessionStorage.getItem("Technology")){
    nameOfSection = window.sessionStorage.getItem("Technology");
    Switch()

}
let ind3 = parseInt(sessionStorage.getItem("activeTab3"), 10);

if (!isNaN(ind3) && ind3 >= 0 && ind3 < lis3.length) {
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
        nameOfSection = this.dataset.name;
        console.log(nameOfSection);
        window.sessionStorage.setItem("Technology", nameOfSection);
        Switch();
    };
});

function Switch() {
    switch (nameOfSection) {
        case "vehicle":
            h1.textContent = "Launch vehicle";
            info.textContent =
                "A launch vehicle or carrier rocket is a rocket-propelledvehicle used to carry a payload from Earth's surface to space,usually to Earth orbit or beyond. Our WEB-X carrier rocket isthe most powerful in operation. Standing 150 metres tall, it'squite an awe-inspiring sight on the launch pad!";


            image.srcset = "assets/technology/image-launch-vehicle-landscape.jpg";
            img.src = "assets/technology/image-launch-vehicle-portrait.jpg";
            break;
        case "capsule":
            h1.textContent = "Space capsule";
            info.textContent =
                "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.";
            image.srcset = "assets/technology/image-space-capsule-landscape.jpg";
            img.src = "assets/technology/image-space-capsule-portrait.jpg";
            break;
        case "Spaceport":
            h1.textContent = "Spaceport";
            info.textContent =
                "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft,by analogy to the seaport for ships or airport for aircraft. Based in thefamous Cape Canaveral, our spaceport is ideally situated to take advantageof the Earth’s rotation for launch.";
            image.srcset = "assets/technology/image-spaceport-landscape.jpg";
            img.src = "assets/technology/image-spaceport-portrait.jpg";
            break;
    }
}
