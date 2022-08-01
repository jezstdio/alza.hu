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

function handleOrderNumber(e) {
    const infoBlock = document.getElementsByClassName("doneInfoBlock")[0];
    const orderNumber = infoBlock.getElementsByTagName("a")[0];

    if (e.ctrlKey && e.keyCode === 81) {
        search.value = orderNumber.textContent;
        navigator.clipboard.writeText(search.value);
        orderNumber.click();
    }
}

function setTabIndex() {
    const email = document.getElementById("userEmail");
    const phoneNumber = document.getElementById("inpTelNumber");

    email.setAttribute("tabindex", 1);
    phoneNumber.setAttribute("tabindex", 2);
}

function autoFocusSearch() {
    const search = document.getElementById("edtSearch");

    if (!window.location.href.includes("Order")) {
        search.select();
    }
}

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

function vatNumberFormat() {
    const input = document.getElementById("vatParamDic");

    input.onkeyup = e => {
        const value = e.currentTarget.value.replace(/[^\d]/g, '');

        if (value.length < 9) { input.value = value; return false; }
        if (value.length < 10) { input.value = `${value.slice(0, 8)}-${value.slice(8, 9)}`; return false;}
        if (value.length >= 10) { input.value = `${value.slice(0, 8)}-${value.slice(8, 9)}-${value.slice(9, 11)}`; return false;}
    }
}

function gj_clearFilter(e) {
    const clearFilterButton = document.getElementById("clearFilter");
  
    if (e.ctrlKey && e.shiftKey && e.keyCode === 75) {
        clearFilterButton.click();
    }
}

try { handleChatButton() } catch (e) { console.error(e) }
try { setTabIndex() } catch (e) { console.error(e) }
try { autoFocusSearch() } catch (e) { console.error(e) }
try { vatNumberFormat() } catch(e) { console.log(e) };
//try { setWorkerCode() } catch (e) { console.error(e) }

document.addEventListener("keydown", e => {
  try { handleOrderNumber(e) } catch (e) { console.log(e) }
  try { gj_clearFilter(e) } catch (e) { console.log(e) }
});
