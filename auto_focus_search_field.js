// Focus automatically on seach field.
// This script skips every page that it's URL address includes the word "Order". With this, you won't lost focus when you want to insert the costumer's email address.
function autoFocusSearch() {
    const search = document.getElementById("edtSearch");

    if (!window.location.href.includes("Order")) {
        search.select();
    }
}

try { autoFocusSearch() } catch (e) { console.error(e) }
