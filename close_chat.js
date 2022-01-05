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

try { handleChatButton() } catch (e) { console.error(e) }