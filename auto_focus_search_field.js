// Focus automatically on seach field.
function autoFocusSearch() {
    const search = document.getElementById("edtSearch");

    if (!window.location.href.includes("Order")) {
        search.select();
    }
}

try { autoFocusSearch() } catch (e) { console.error(e) }