const burgerBtn = document.getElementById("burger-button");
const backgroundToFade = document.getElementById("background");
const body = document.getElementById("body");

//new burger button logic
//I'm not sure that this is really any more efficient
function setStateBB(state) {
    if (state === "burger-click") {
        burgerBtn.classList.toggle("burger-burger-clicked", true);
        backgroundToFade.classList.toggle("body-burger-clicked", true);
        body.classList.toggle("body-shifted", true);
        burgerBtn.classList.toggle("burger-default", false);
        backgroundToFade.classList.toggle("default-background", false);
        body.classList.toggle("default-body", false);
    } else if (state === "unclicked") {
        burgerBtn.classList.toggle("burger-default", true);
        backgroundToFade.classList.toggle("default-background", true);
        body.classList.toggle("default-body", true);
        burgerBtn.classList.toggle("burger-burger-clicked", false);
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
//old burger button logic
// burgerBtn.addEventListener("click", (event) => {
//     event.stopPropagation();
//     if (backgroundToFade.classList.contains("default-background")) {
//         backgroundToFade.classList.add("body-burger-clicked");
//         backgroundToFade.classList.remove("default-background");
//         body.classList.add("body-shifted");
//         body.classList.remove("body-default");
//         burgerBtn.classList.add("burger-burger-clicked");
//         burgerBtn.classList.remove("burger-default");
//     }
// });

// backgroundToFade.addEventListener( "click", (event) => {
//     event.stopPropagation();
//     if (backgroundToFade.classList.contains("body-burger-clicked")) {
//         backgroundToFade.classList.add("default-background");
//         backgroundToFade.classList.remove("body-burger-clicked");
//         body.classList.add("body-default");
//         body.classList.remove("body-shifted");
//         burgerBtn.classList.add("burger-default");
//         burgerBtn.classList.remove("burger-burger-clicked");
//     }
// });

//cookie accept button
const accept = document.getElementById("accept-cookie");
const cookieAll = document.getElementById("cookie-cont");


function getCookie(name) {
    return document.cookie
        .split("; ")
        .map(c => c.trim())
        .find(row => row.startsWith(name + "="))
        ?.split("=")[1];
}

const accepted = getCookie("cookie_accepted");

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
const triggerPoint = 231;

window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;
    const scrollingDown = currentScroll > lastScroll;
    if (currentScroll === 0) {
        setState("default");
    } else if (currentScroll >= triggerPoint) {
        setState(scrollingDown ? "hidden" : "sticky");
    }
    lastScroll = currentScroll;
});

function setState(state) {
    header.classList.remove("header-hidden", "true-header", "header-default");
    spacer.classList.toggle("spacer-display", state === "hidden");

    if (state === "hidden") {
        header.classList.add("header-hidden");
    } else if (state === "sticky") {
        header.classList.add("true-header");
    } else {
        header.classList.add("header-default");
    }

}

//old logic for sticky scroll

// window.addEventListener("scroll", () => {
//     const currentScroll = window.scrollY;
//     const scrollingDown = currentScroll > lastScroll;
//     if (currentScroll > lastScroll && window.scrollY >= 231) {
//         header.classList.add("header-hidden");
//         header.classList.remove("true-header", "header-default");
//         spacer.classList.add("spacer-display");
//     } else if (window.scrollY >= 231) {
//         header.classList.add("true-header");
//         header.classList.remove("header-hidden", "header-default");
//         spacer.classList.remove("spacer-display");
//     } else if (window.scrollY === 0) {
//         header.classList.add("header-default");
//         header.classList.remove("header-hidden", "true-header");
//         spacer.classList.remove("spacer-display");
//     }
//     lastScroll = currentScroll;
// });