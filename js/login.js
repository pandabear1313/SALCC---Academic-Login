function login() {
    var email = document.querySelector("#user").value;
    var password = document.querySelector("#pass").value;

    console.log("Email:", email);
    console.log("Password:", password);

    const Email = "shervin@gmail.com";
    const Password = "123456";

    if (email == Email && password == Password) {
        window.location.href = "./buteer.html";
    } else {
        alert("Wrong Email or Password");
    }
}
