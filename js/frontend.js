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