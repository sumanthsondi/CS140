
document.getElementById('signup-form').addEventListener('submit', function(event) {

    event.preventDefault();

    const fullname = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const phone = document.getElementById('phone').value.trim();
    const major = document.getElementById('major').value;
    const birthday = document.getElementById('birthday').value;
    const about = document.getElementById('about').value;

    const genderElement = document.querySelector('input[name="gender"]:checked');
    const gender = genderElement ? genderElement.value : "";

    const interests = [];

    if (document.getElementById('coding').checked) {
        interests.push("Coding");
    }

    if (document.getElementById('gaming').checked) {
        interests.push("Gaming");
    }

    if (document.getElementById('design').checked) {
        interests.push("Design");
    }

    const terms = document.getElementById('terms').checked;


    if (fullname === "") {
        alert("Please enter your full name.");
        return;
    }

    if (email === "") {
        alert("Please enter your email.");
        return;
    }

    if (password.length < 8) {
        alert("Your password must be at least 8 characters long.");
        return;
    }

    if (phone.length < 7) {
        alert("Please enter a valid phone number.");
        return;
    }

    if (major === "") {
        alert("Please select your major.");
        return;
    }

    if (!terms) {
        alert("Please agree to the terms and conditions.");
        return;
    }


    const formData = {
        name: fullname,
        email: email,
        password: password,
        phone: phone,
        major: major,
        birthday: birthday,
        about: about,
        gender: gender,
        interests: interests,
        terms: terms
    };


    console.log(formData);


    const xhr = new XMLHttpRequest();

    xhr.open("GET", "submit.json", true);

    xhr.onreadystatechange = function() {

        if (xhr.readyState === 4 && xhr.status === 200) {

            const response = JSON.parse(xhr.responseText);

            const message = document.getElementById('message');
            message.textContent = response.message;

            document.getElementById('signup-form').reset();

        } else if (xhr.readyState === 4) {

            alert("There was an error submitting the form.");

        }
    };

    xhr.send();

});
