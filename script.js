
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

document.getElementById("searchInput").addEventListener("input", function() {
    let searchValue = this.value.toLowerCase();
    let cars = document.querySelectorAll(".car-card");

    cars.forEach(function(car) {
        let carName = car.querySelector("h3").textContent.toLowerCase();

        if (carName.includes(searchValue)) {
            car.style.display = "block";
        } else {
            car.style.display = "none";
        }
    });
});
