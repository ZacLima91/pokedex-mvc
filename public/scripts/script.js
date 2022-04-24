const header = document.querySelector("header");
const menu = document.querySelector("nav")

// // const position = 0;
// // addEventListener("scroll", function () {
// //   if (position != scrollY) {
// //     header.style.backgroundColor = "blue";
// //   } else {
// //     header.style.backgroundColor = "yellow";
// //   }
// // });

// const title = document.querySelector("#iconeMenu");
// const icone = title.querySelector("img");

const iconeMenu = document.querySelector('#iconeMenu')
let cont = 0
iconeMenu.addEventListener('click', function(){
    cont++
    if(cont == 1){
        menu.setAttribute('id', 'active')
    }else{
        menu.removeAttribute('id')
        cont = 0
    }
    
})

    
