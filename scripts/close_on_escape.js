// it closes the modal when you on the delivery selection page
function closeOnEscape() {
    const closeButton = document.getElementsByClassName("MuiButtonBase-root")[0];
    
    closeButton.click();
}
  
document.addEventListener("keyup", e => {
    try {
        e.key === "Escape" && closeOnEscape(e);
    } catch (e) {
        console.log(e);
    }
});