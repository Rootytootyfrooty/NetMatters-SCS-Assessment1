document.addEventListener("DOMContentLoaded", () => {
    const fields = [
        document.getElementById('name'),
        document.getElementById('email'),
        document.getElementById('message'),
        document.getElementById('number')
    ];
    //checks to see if the field is empty or not
    function isEmpty(field) {
        if (field.value === "") {
            field.classList.add("error");
        } else {
            field.classList.remove("error");
        }
    }

    //loops over the required input fields
    function validateText() {
        for (let i = 0; i < fields.length; i++) {
            isEmpty(fields[i]);
        }
    }

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(String(email.value).toLowerCase())) {
            email.classList.remove("error");
        } else {
            email.classList.add("error");
        }
    }

    function validateNumber(number) {
        const re = /^\(?0( *\d\)?){9,10}$/;
        if (re.test(String(number.value))) {
            number.classList.remove("error");
        } else {
            email.classList.add("error");
        }
    }
    const submitBtn = document.getElementById('enquiry-button');
    
    submitBtn.addEventListener("click", event => {
        
        validateText();
        validateEmail(document.getElementById('email'));
        validateNumber(document.getElementById('number'));
        window.location.href = "/contact-us#contact-form";
    });
});


//accordion logic

const accordionBtn = document.getElementById("accord-title");

const accordionText = document.getElementById("accord-text");

accordionBtn.addEventListener("click", () => {
    accordionText.classList.toggle("accord-body-hide");
    accordionText.classList.toggle("accord-body-default");
});

//checkbox logic

const checkbox = document.getElementById('form-bottom1');

checkbox.addEventListener("click", () => {
    checkbox.classList.toggle("checkmark-here");
    checkbox.classList.toggle("checkmark-gone");
});


