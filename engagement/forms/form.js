
document.getElementById('signup-form').addEventListener('submit', function(event) {

    event.preventDefault();

    const fullname = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const birthday = document.getElementById('birthday').value;

    if (!fullname || !email) {
        alert("You need a name and email.");
        return;
    }

    const formData = {
        name: fullname,
        email: email,
        password: password,
        birthday: birthday
    };

    console.log(formData);

    const xhr = new XMLHttpRequest();

    xhr.open("GET", "submit.json", true);

    xhr.onreadystatechange = function() {

        if (xhr.readyState === 4 && xhr.status === 200) {

            const message = document.getElementById('message');
            const response = JSON.parse(xhr.responseText);

            message.textContent = response.message;

        } else if (xhr.readyState === 4) {

            alert("Error submitting form.");

        }

    };

    xhr.send();

});
