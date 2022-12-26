// if you type or copy a number begining with 06 or +36, this script will remove it.

function fixPhoneNumber() {
  const input = document.getElementById("inpTelNumber");
  
  input.onkeyup = () => {
    if (input.value.startsWith("+36")) {
      input.value = input.value.replace("+36", "")
    }
    
    if (input.value.startsWith("06")) {
      input.value = input.value.replace("06", "")
    }
  }
}

try { setTimeout(fixPhoneNumber, 2000) } catch(e) { console.log(e) };