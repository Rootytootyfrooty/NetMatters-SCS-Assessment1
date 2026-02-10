const burgerBtn = document.getElementById("burger-button");
const backgroundToFade = document.getElementById("background");
const body = document.getElementById("body");

burgerBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    if (backgroundToFade.classList.contains("default-background")) {
        backgroundToFade.classList.add("body-burger-clicked");
        backgroundToFade.classList.remove("default-background");
        body.classList.add("body-shifted");
        body.classList.remove("body-default");
        burgerBtn.classList.add("burger-burger-clicked");
        burgerBtn.classList.remove("burger-default");
    }
});

backgroundToFade.addEventListener( "click", (event) => {
    event.stopPropagation();
    if (backgroundToFade.classList.contains("body-burger-clicked")) {
        backgroundToFade.classList.add("default-background");
        backgroundToFade.classList.remove("body-burger-clicked");
        body.classList.add("body-default");
        body.classList.remove("body-shifted");
        burgerBtn.classList.add("burger-default");
        burgerBtn.classList.remove("burger-burger-clicked");
    }
});
//cookie accept button
const accept = document.getElementById("accept-cookie");
const cookieAll = document.getElementById("cookie-cont");

document.cookie = "cookie_accepted=false";
accept.addEventListener("click", () => {
    document.cookie = "cookie_accepted=true; expires=Mon, 09 Feb 2026 13:30:00 GMT";
    cookieAll.style.display = "none";
});

// jQuery slick carousels

$(document).ready(function () {
  $('.carousel-1').slick({
    dots: true,
    customPaging: function () {
    return '<button type="button"></button>';
  },
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000
    });
    $('.carousel-2').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    variableWidth: true,
    slidesToScroll: 1,
    slidesToShow: 8,
    });
    $('.carousel-3').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    variableWidth: true,
    slidesToScroll: 1,
    slidesToShow: 8,
    });
});

// sticky header when scrolling up
const header = document.getElementById("header-scroll");
const spacer = document.getElementById("spacer");

let lastScroll = 0;

window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;
    if (currentScroll > lastScroll && window.scrollY >= 231) {
        header.classList.add("header-hidden");
        header.classList.remove("true-header");
        header.classList.remove("header-default");
        spacer.classList.add("spacer-display");
    } else if (window.scrollY >= 231) {
        header.classList.add("true-header");
        header.classList.remove("header-hidden");
        header.classList.remove("header-default");
        spacer.classList.remove("spacer-display");
    } else if (window.scrollY === 0) {
        header.classList.add("header-default");
        header.classList.remove("header-hidden");
        header.classList.remove("true-header");
        spacer.classList.remove("spacer-display");
    }
    lastScroll = currentScroll;
});