const burgerBtn = document.getElementById("burger-button");
const burgerBtn2 = document.getElementById("burger-button2");
const backgroundToFade = document.getElementById("background");
const body = document.getElementById("body");

//new burger button logic
//I'm not sure that this is really any more efficient
function setStateBB(state) {
    if (state === "burger-click") {
        burgerBtn.classList.toggle("burger-burger-clicked", true);
        burgerBtn2.classList.toggle("burger-burger-clicked", true);
        backgroundToFade.classList.toggle("body-burger-clicked", true);
        body.classList.toggle("body-shifted", true);
        burgerBtn.classList.toggle("burger-default", false);
        burgerBtn2.classList.toggle("burger-default", false);
        backgroundToFade.classList.toggle("default-background", false);
        body.classList.toggle("default-body", false);
    } else if (state === "unclicked") {
        burgerBtn.classList.toggle("burger-default", true);
        burgerBtn2.classList.toggle("burger-default", true);
        backgroundToFade.classList.toggle("default-background", true);
        body.classList.toggle("default-body", true);
        burgerBtn.classList.toggle("burger-burger-clicked", false);
        burgerBtn2.classList.toggle("burger-burger-clicked", false);
        backgroundToFade.classList.toggle("body-burger-clicked", false);
        body.classList.toggle("body-shifted", false);
    }
}
burgerBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    if (backgroundToFade.classList.contains("default-background")) {
        setStateBB("burger-click");
    }
});

backgroundToFade.addEventListener( "click", (event) => {
    event.stopPropagation();
    if (backgroundToFade.classList.contains("body-burger-clicked")) {
        setStateBB("unclicked");
    }
});
//burger button on second header, two headers for the scrolling effect
burgerBtn2.addEventListener("click", (event) => {
    event.stopPropagation();
    if (backgroundToFade.classList.contains("default-background")) {
        setStateBB("burger-click");
    }
});

//cookie accept button
const accept = document.getElementById("accept-cookie");
const cookieAll = document.getElementById("cookie-cont");

//function to check for cookies already on webpage for user
function getCookie(name) {
    return document.cookie
        .split("; ")
        .map(c => c.trim())
        .find(row => row.startsWith(name + "="))
        ?.split("=")[1];
}

const accepted = getCookie("cookie_accepted");
//if the cookie has not been accepted, the popup will show
//once accepted it adds a expiration date for one week in the future
if (accepted !== "true") {
    cookieAll.style.display ="block";
    accept.addEventListener("click", () => {
        let date = new Date(Date.now() + 604800e3);
        document.cookie = `cookie_accepted=true; expires=${date.toUTCString()}; path=/; SameSite=Lax`;
        cookieAll.style.display ="none";
    });
} else {
    cookieAll.style.display = "none";
}

// jQuery slick carousels

$(document).ready(function () {
  $('.carousel-1').slick({
    dots: true,
    customPaging: function () {
    return '<button type="button"></button>';
  },
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnFocus: false
    });
    $('.carousel-2').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    variableWidth: true,
    slidesToScroll: 1,
    slidesToShow: 8,
    draggable: false,
    pauseOnFocus: false
    });
    $('.carousel-3').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    variableWidth: true,
    slidesToScroll: 1,
    slidesToShow: 8,
    draggable: false,
    pauseOnFocus: false
    });
});

// sticky header when scrolling up

const header = document.getElementById("header-scroll");

let lastScroll = 0;
//trigger point is when the second header kicks in 500px from the top of the page
const triggerPoint = 500;

//checks scroll positions when user scrolls to determine if they're scrolling up or down
window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;
    if (currentScroll === 0) {
        header.classList.add("invisible");
        header.classList.remove("true-header");
    } if (currentScroll >= triggerPoint) {
        if (currentScroll > lastScroll) {
            header.classList.add("header-hidden");
            header.classList.remove("true-header");
            header.classList.remove("invisible");
        } else {
            header.classList.remove("invisible");
            header.classList.add("true-header");
            header.classList.remove("header-hidden");
        }
    }
    lastScroll = currentScroll;
});