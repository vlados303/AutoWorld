
function showDetails(car) {
    alert("Ai selectat automobilul: " + car);
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Completează toate câmpurile!");
    } else {
        alert("Mulțumim, " + name + "! Mesajul a fost trimis.");
        document.getElementById("contactForm").reset();
    }
});
