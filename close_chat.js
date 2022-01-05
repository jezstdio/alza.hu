// Close chat button on bottom right side.
// We all know the chat button on the right side of the page, at the bottom which automatically opens on every time. If you hate it like me, this script is for you.
// Every time you visit or refresh the website, this script will automatically close it.
// If the chat button won't be open automatically on the visit, the script will end itself after 2 seconds.

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
