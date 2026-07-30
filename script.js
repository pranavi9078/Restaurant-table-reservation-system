const form = document.getElementById("reservationForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const guests = document.getElementById("guests").value;

    if (
        name === "" ||
        email === "" ||
        phone === "" ||
        date === "" ||
        time === ""
    ) {
        message.style.color = "red";
        message.innerHTML = "Please fill all the fields.";
        return;
    }

    message.style.color = "green";
    message.innerHTML = `
        <h3>🎉 Reservation Successful!</h3>
        <p>Thank you, <b>${name}</b>.</p>
        <p>Your table for <b>${guests}</b> guest(s) has been reserved.</p>
        <p>Date: <b>${date}</b></p>
        <p>Time: <b>${time}</b></p>
        <p>We look forward to serving you!</p>
    `;

    form.reset();
});