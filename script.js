function handleTotalPrice(product, isIncrease) {
    const productQuantity = document.getElementById(product + "-qnt");
    const productQntValueInteger = parseInt(productQuantity.value);
    let qntOfProduct = 0;
    if (isIncrease == true) {
        qntOfProduct = productQntValueInteger + 1;
    }
    if (isIncrease == false && productQntValueInteger > 0) {
        qntOfProduct = productQntValueInteger - 1;
    }
    productQuantity.value = qntOfProduct;
    let productPrice = 0;
    if (product == "phone") {
        productPrice = 1219 * qntOfProduct;
    }
    if (product == "case") {
        productPrice = 59 * qntOfProduct;
    }
    document.getElementById(product + "-total-price").innerText = '$' + productPrice;

    updateTotalCost();
}

function updateTotalCost() {
    const totalPhoneQntString = document.getElementById("phone-qnt");
    const totalPhoneQnt = parseInt(totalPhoneQntString.value);

    const totalCaseQntString = document.getElementById("case-qnt");
    const totalCaseQnt = parseInt(totalCaseQntString.value);

    const subtotal = totalPhoneQnt * 1219 + totalCaseQnt * 59;

    document.getElementById("subtotal").innerText = "$" + subtotal;

    const tax = Math.round(subtotal * 0.1);
    document.getElementById("tax").innerText = "$" + tax;

    const grandTotal = subtotal + tax;
    document.getElementById("grand-total").innerText = "$" + grandTotal;
}