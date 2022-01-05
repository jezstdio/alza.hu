// When using tab, jump right to the phone number.
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