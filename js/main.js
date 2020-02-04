let btn = document.getElementsByClassName('btn')
console.log(btn)
let modal = document.getElementById("my_modal")

let span = document.getElementsByClassName("close")[0];

let arr = [...btn]
console.log(arr)

arr.forEach(e => {
  e.onclick = function () {
    modal.style.display = "block";
  }
})

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none"
  }
}



$(function () {
  $(".slider_inner,.news__slider-inner").slick({
    nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
    infinite: false,
  })


  $("select").styler()
})

let menuBtn = document.getElementsByClassName("header__btn-menu");
let menuItems = document.getElementById("nav__elements")


menuBtn[0].addEventListener("click", () => {
  (menuItems.classList.value == "open") ? menuItems.classList.remove("open") : menuItems.classList.add("open")
})