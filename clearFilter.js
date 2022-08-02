// Clear filters under searching when you push CTRL + SHIFT + K
function gj_clearFilter(e) {
  const clearFilterButton = document.getElementById("clearFilter");
  
  if (e.ctrlKey && e.shiftKey && e.keyCode === 75) { clearFilterButton.click() }
}

document.addEventListener("keydown", e => { try { gj_clearFilter(e) } catch (e) { console.log(e) } });
