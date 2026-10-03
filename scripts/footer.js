window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    const modifiedDate = new Date(document.lastModified);
    const lastModified = document.getElementById("lastModified");
    lastModified.textContent = modifiedDate.toISOString();
    lastModified.dateTime = modifiedDate.toISOString();
});
