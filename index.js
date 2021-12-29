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

// Call functions
handleChatButton();

// Call events
document.onkeydown = handleOrderNumber;
