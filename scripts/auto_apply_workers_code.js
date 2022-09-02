// Automatically fill promo input with worker's code.
// If you want to skip the continuous code acceptation on the website, just change workerCode variable to yours.
// The script will insert your code into the right field and will close the popup afterwards.
// The script will be activated on the cart page every time you visit it.
function setWorkerCode() {
    const promoInput = document.getElementById("txtDiscountCode");
    const sendButton = document.getElementsByClassName("insertItemBtn")[0];
    const workerCode = "59091";

    function acceptWorkerCode() {
        const infoPanel = document.getElementById("infodialog");
        const acceptButton = infoPanel.getElementsByTagName("a")[0];

        acceptButton.click()
    }

    promoInput.value = workerCode;
    sendButton.click();

    setTimeout(acceptWorkerCode, 500);
}

//try { setWorkerCode() } catch (e) { console.error(e) }
