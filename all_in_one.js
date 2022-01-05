// Close chat button on bottom right side. 
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
function setTabIndex() {
    const email = document.getElementById("userEmail");
    const phoneNumber = document.getElementById("inpTelNumber");

    email.setAttribute("tabindex", 1);
    phoneNumber.setAttribute("tabindex", 2);
}

// Focus automatically on seach field.
function autoFocusSearch() {
    const search = document.getElementById("edtSearch");

    if (!window.location.href.includes("Order")) {
        search.select();
    }
}

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

// Call functions
try { handleChatButton() } catch (e) { console.error(e) }
try { setTabIndex() } catch (e) { console.error(e) }
try { autoFocusSearch() } catch (e) { console.error(e) }
//try { setWorkerCode() } catch (e) { console.error(e) }

// Call events
document.onkeydown = handleOrderNumber;