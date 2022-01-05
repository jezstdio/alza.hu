// When using tab, jump right to the phone number.
// On the page when you have to give the customer's email address, by default you can't jump right to the phone number input.
// This script sets the tab order, so you can focus the right input with just one tab.
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

try { setTabIndex() } catch (e) { console.error(e) }
