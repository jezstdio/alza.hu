// Automatically fill promo input with worker's code.
// If you want to skip the continuous code acceptation on the website, just change workerCode variable to yours.
// The script will insert your code into the right field and will close the popup afterwards.
// The script will be activated on the cart page every time you visit it.
function setWorkerCode() {
    const promoInput = document.getElementById("txtDiscountCode");
    const workerCode = "";

    promoInput.value = workerCode;
}

try { setWorkerCode() } catch (e) { console.error(e) }
