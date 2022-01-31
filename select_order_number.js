// Select order number with keycombo (ctrl + q)
// If you are like me and can't stand the selection of numbers with the mouse on the final page of the order, this script is for you.
// After it successfully run, the script automatically opens the order's page where you can check if the order has been processed and can be payed.
function handleOrderNumber(e) {
    const infoBlock = document.getElementsByClassName("doneInfoBlock")[0];
    const orderNumber = infoBlock.getElementsByTagName("a")[0];

    if (e.ctrlKey && e.keyCode === 81) {
        search.value = orderNumber.textContent;
        navigator.clipboard.writeText(search.value);
        orderNumber.click(); // navigate to the order page to check if it's loaded.
    }
}

document.addEventListener("keydown", e => {
  try { handleOrderNumber(e) } catch (e) { console.log(e) }
});
