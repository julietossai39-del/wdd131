window.addEventListener('DOMContentLoaded', () => {
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = document.lastModified;
});

document.addEventListener("DOMContentLoaded", () => {
    const parameters = new URLSearchParams(window.location.search);
    const product = reviewProducts.find((item) => item.id === parameters.get("productName"));
    const rating = Number(parameters.get("stars"));
    const installationDate = parameters.get("installationDate");
    const parsedInstallationDate = installationDate ? new Date(`${installationDate}T00:00:00`) : null;
    const validInstallationDate = parsedInstallationDate && !Number.isNaN(parsedInstallationDate.getTime());

    if (!product || !Number.isInteger(rating) || rating < 1 || rating > 5 || !validInstallationDate) {
        document.getElementById("review-heading").textContent = "No valid review was submitted";
        document.querySelector(".review-result").classList.add("review-invalid");
        document.querySelector(".review-count").hidden = true;
        document.querySelector(".review-result dl").hidden = true;
        return;
    }

    const previousCount = Number.parseInt(localStorage.getItem("reviewCount") ?? "0", 10);
    const reviewCount = Number.isSafeInteger(previousCount) && previousCount >= 0 ? previousCount + 1 : 1;
    localStorage.setItem("reviewCount", String(reviewCount));

    const featureNames = {
        "Feature 1": "Durability",
        "Feature 2": "Ease of Use",
        "Feature 3": "Performance",
        "Feature 4": "Design"
    };
    const selectedFeatures = parameters.getAll("features").map((feature) => featureNames[feature]).filter(Boolean);

    document.getElementById("reviewCount").textContent = String(reviewCount);
    document.getElementById("productName").textContent = `${product.name} (average rating: ${product.averageRating.toFixed(1)})`;
    document.getElementById("rating").textContent = `${rating} ${rating === 1 ? "star" : "stars"}`;
    document.getElementById("installationDate").textContent = new Intl.DateTimeFormat("en", {
        year: "numeric",
        month: "long",
        day: "numeric"
    }).format(parsedInstallationDate);
    document.getElementById("featureList").textContent = selectedFeatures.length ? selectedFeatures.join(", ") : "None selected";
    document.getElementById("comments").textContent = parameters.get("comments") || "No written review";
    document.getElementById("recommend").textContent = parameters.get("recommend") || "Not provided";
});
