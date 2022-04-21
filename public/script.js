const header = document.querySelector("header");
// const position = 0;
// addEventListener("scroll", function () {
//   if (position != scrollY) {
//     header.style.backgroundColor = "blue";
//   } else {
//     header.style.backgroundColor = "yellow";
//   }
// });

const title = document.querySelector("#iconeMenu");

if (screen.width < 600) {
    const image = new Image(40, 40);
    image.src = "images/menu.png";
    header.appendChild(image);
}
