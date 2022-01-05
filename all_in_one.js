// Close chat button on bottom right side.
// We all know the chat button on the right side of the page, at the bottom which automatically opens on every time. If you hate it like me, this script is for you.
// Every time you visit or refresh the website, this script will automatically close it.
// If the chat button won't be open automatically on the visit, the script will end itself after 2 seconds.
function handleChatButton() {
    const chatButton = document.getElementById("chat-open-button");
    const maxRepeats = 8;
    let currentRepeat = 0;
    let repeatInterval;

    function closeChatButton() {
        if (chatButton.classList.contains("close")) {
            chatButton.click();
            clearInterval(repeatInterval);
        }

        if (currentRepeat === maxRepeats) {
            clearInterval(repeatInterval);
        }

        currentRepeat++;
    }

    repeatInterval = setInterval(closeChatButton, 500);
}

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

// When using tab, jump right to the phone number.
// On the page when you have to give the customer's email address, by default you can't jump right to the phone number input.
// This script sets the tab order, so you can focus the right input with just one tab.
function setTabIndex() {
    const email = document.getElementById("userEmail");
    const phoneNumber = document.getElementById("inpTelNumber");

    email.setAttribute("tabindex", 1);
    phoneNumber.setAttribute("tabindex", 2);
}

// Focus automatically on seach field.
// This script skips every page that it's URL address includes the word "Order". With this, you won't lost focus when you want to insert the costumer's email address.
function autoFocusSearch() {
    const search = document.getElementById("edtSearch");

    if (!window.location.href.includes("Order")) {
        search.select();
    }
}

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

// Call functions
try { handleChatButton() } catch (e) { console.error(e) }
try { setTabIndex() } catch (e) { console.error(e) }
try { autoFocusSearch() } catch (e) { console.error(e) }
//try { setWorkerCode() } catch (e) { console.error(e) }

// Call events
document.onkeydown = handleOrderNumber;