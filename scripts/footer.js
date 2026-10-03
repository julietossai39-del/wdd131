document.addEventListener("DOMContentLoaded", () => {
    const currentYear = document.getElementById("currentyear");
    const lastModified = document.getElementById("lastModified");

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    if (lastModified instanceof HTMLTimeElement) {
        const modifiedDate = new Date(document.lastModified);
        lastModified.textContent = new Intl.DateTimeFormat("en", {
            year: "numeric",
            month: "long",
            day: "numeric"
        }).format(modifiedDate);
        lastModified.dateTime = modifiedDate.toISOString();
    }
});
