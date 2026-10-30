const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const regno = document.getElementById("regno").value.trim();
    const email = document.getElementById("email").value.trim();
    const selectedEvent = document.getElementById("event").value;

    if (!name || !regno || !email || !selectedEvent) {
        alert("Please fill in all the fields.");
        return;
    }

    const registration = {
        name: name,
        regno: regno,
        email: email,
        event: selectedEvent
    };

    let registrations = JSON.parse(
        localStorage.getItem("registrations") || "[]"
    );

    registrations.push(registration);

    localStorage.setItem(
        "registrations",
        JSON.stringify(registrations)
    );

    alert("Registration successful! Your details have been saved.");

    form.reset();
});
// Search Events
const eventSearch = document.getElementById("eventSearch");
const searchMessage = document.getElementById("searchMessage");

if (eventSearch && searchMessage) {
    const eventCards = document.querySelectorAll("main .event");

    eventSearch.addEventListener("input", function () {
        const searchText = eventSearch.value.trim().toLowerCase();
        let visibleCount = 0;

        eventCards.forEach(function (card) {
            const eventName = card.querySelector("h3");

            if (eventName && eventName.textContent.toLowerCase().includes(searchText)) {
                card.classList.remove("hidden");
                visibleCount++;
            } else {
                card.classList.add("hidden");
            }
        });

        if (visibleCount === 0) {
            searchMessage.textContent = "No events found. Try another search.";
        } else {
            searchMessage.textContent = visibleCount + " event(s) found.";
        }
    });
}