// After you added your employee code, you can close the info window with the enter button.
function closeCodePanel(e) {
    e.preventDefault();
    
    const accept_panel = document.getElementById("infodialog");
    const accept_button = accept_panel.getElementsByTagName("a")[0];
    
    console.log(accept_panel);
    
    accept_button.click();
  }
  
  document.addEventListener("keydown", e => {
      try {
          e.key === "Enter" && closeCodePanel(e);
      } catch (e) {
          console.log(e);
      }
  });