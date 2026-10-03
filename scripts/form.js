document.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.getElementById("productName");

    if (!productSelect) {
        return;
    }

    reviewProducts.forEach((product) => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        productSelect.append(option);
    });
});

