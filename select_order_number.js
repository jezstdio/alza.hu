// Select order number with keycombo (ctrl + q)
function handleOrderNumber(e) {
    const infoBlock = document.getElementsByClassName("doneInfoBlock")[0];
    const orderNumber = infoBlock.getElementsByTagName("a")[0];

    if (e.ctrlKey && e.keyCode === 81) {
        search.value = orderNumber.textContent;
        navigator.clipboard.writeText(search.value);
        orderNumber.click(); // navigate to the order page to check if it's loaded.
    }
}

document.onkeydown = handleOrderNumber;