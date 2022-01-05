// Automatically fill promo input with worker's code.
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

try { setWorkerCode() } catch (e) { console.error(e) }