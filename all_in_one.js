// Automatically fill promo input with worker's code.
// If you want to skip the continuous code acceptation on the website, just change workerCode variable to yours.
// The script will insert your code into the right field and will close the popup afterwards.
// The script will be activated on the cart page every time you visit it.
function setWorkerCode() {
    const promoInput = document.getElementById("txtDiscountCode");
    const sendButton = document.getElementsByClassName("insertItemBtn")[0];
    const workerCode = "59091";

    function acceptWorkerCode() {
        const infoPanel = document.getElementById("infodialog");
        const acceptButton = infoPanel.getElementsByTagName("a")[0];

        acceptButton.click()
    }

    promoInput.value = workerCode;
    sendButton.click();

    setTimeout(acceptWorkerCode, 500);
}

try { setWorkerCode() } catch (e) { console.error(e) }

// Focus automatically on seach field.
// This script skips every page that it's URL address includes the word "Order". With this, you won't lost focus when you want to insert the costumer's email address.
function autoFocusSearch() {
    const search = document.getElementById("edtSearch");

    if (!window.location.href.includes("Order")) { search.select() }
}

try { autoFocusSearch() } catch (e) { console.error(e) }

// Clear filters under searching when you push CTRL + SHIFT + K
function gj_clearFilter(e) {
    const clearFilterButton = document.getElementById("clearFilter");
    
    if (e.ctrlKey && e.shiftKey && e.keyCode === 75) { clearFilterButton.click() }
  }
  
  document.addEventListener("keydown", e => { try { gj_clearFilter(e) } catch (e) { console.log(e) } });

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

        if (currentRepeat === maxRepeats) { clearInterval(repeatInterval) }

        currentRepeat++;
    }

    repeatInterval = setInterval(closeChatButton, 500);
}

try { handleChatButton() } catch (e) { console.error(e) }

// When using tab, jump right to the phone number.
// On the page when you have to give the customer's email address, by default you can't jump right to the phone number input.
// This script sets the tab order, so you can focus the right input with just one tab.
function setTabIndex() {
    const email = document.getElementById("userEmail");
    const phoneNumber = document.getElementById("inpTelNumber");

    email.setAttribute("tabindex", 1);
    phoneNumber.setAttribute("tabindex", 2);
}

function autoFocusSearch() {
    const search = document.getElementById("edtSearch");

    if (!window.location.href.includes("Order")) { search.select() }
}

try { setTabIndex() } catch (e) { console.error(e) }

// it helps you to replace accented characters to english alphabets.
// you can solve character encoding problems easier.
function replaceCharacters(text) {
    const replacable = ["ö", "ü", "ó", "ő", "ú", "é", "á", "ű", "í"];
    const replaceWith = ["o", "u", "o", "o", "u", "e", "a", "u", "i"];
    const newText = text.split("").map(char => {
        const index = replacable.indexOf(char)
      
        if (index > -1) {
            return replaceWith[index]
        }
      
        return char;
        }).join("");
    
    return newText;
}

// helps you to show products' number by default
function marginRoulette() {
    const moreButton = document.getElementsByClassName("button-more")[0];
    const brands = {
      "Mobiltelefonok": ["EVOLVEO", "ASUS", "Ulefone", "Realme", "Oukitel", "POCO", "Doogee", "CAT",  "NOTHING", "Nokia", "ONEPLUS", "Apple Felújított", "Samsung", "Motorola", "Cubot", "Xiaomi", "Honor"],
      "Televíziók": ["Panasonic", "Philips", "THOMSON", "TCL", "JVC"],
      "Okosórák (smart watch)": ["WowME", "CARNEO", "Samsung", "Withings", "HUAWEI", "IMilab", "Fitbit"],
      "Fülhallgatók": ["QCY", "Baseus", "ASUS", "JLAB", "Haylou", "Niceboy", "Soundpeats",  "HiFuture", "Ausdom", "HUAWEI", "Corsair", "Marshall", "EDIFIER", "Razer", "SKULLCANDY", "Honor", "Xiaomi", "BEATS", "Sony", "Sennheiser", "Anker", "LG", "Apple"],
      "Háztartási gép": ["TROTEC", "Bosch", "Hyundai", "ROHNSON", "Klarstein", "HISENSE", "Ayrton", "MIDEA", "Siguro", "NAVON", "Comfee", "Samsung", "INDESIT", "Meliconi", "GUZZANTI", "BEKO", "ETA", "Whirlpool"],
      "Nyomtatók": ["HP", "Canon", "Epson"]
    }
  
    const breadcrumbs = document.getElementsByClassName("breadcrumbs")[0];
    const currentCategory = breadcrumbs.getAttribute("data-ccname").split("|");
    const productList = Array.from(document.getElementsByClassName("browsingitem"));
    let marginList = []
  
    currentCategory.forEach(category => {
      Object.keys(brands).forEach(brand => {
        if (brand.includes(category)) { marginList = brands[category].map(product => product.toLowerCase()) }
      })
    })
  
    productList.forEach(product => {
      const names = Array.from(product.getElementsByClassName("name"));
  
      names.forEach(name => {
        const lowerCaseProduct = replaceCharacters(name.textContent.toLowerCase());
  
        marginList.forEach(margin => {
          const lowerCaseMargin = replaceCharacters(margin.toLowerCase());
  
          if (lowerCaseProduct.includes(lowerCaseMargin)) {
            const productCode = product.getElementsByClassName("codec")[0];
  
            productCode.style.opacity = 0.8;
            productCode.style.color = "#000";
          }
        })
      })
    })
    
    moreButton.addEventListener("click", e => setTimeout(marginRoulette, 2000) )
  }
  
  try { setTimeout(marginRoulette, 2000) } catch(e) { console.log(e) };

// Select order number with keycombo (ctrl + q)
// If you are like me and can't stand the selection of numbers with the mouse on the final page of the order, this script is for you.
// After it successfully run, the script automatically opens the order's page where you can check if the order has been processed and can be payed.
function handleOrderNumber(e) {
    const infoBlock = document.getElementsByClassName("doneInfoBlock")[0];
    const orderNumber = infoBlock.getElementsByTagName("a")[0];

    if (e.ctrlKey && e.keyCode === 81) {
        search.value = orderNumber.textContent;
        navigator.clipboard.writeText(search.value);
        orderNumber.click(); // navigate to the order page to check if it's loaded.
    }
}

document.addEventListener("keydown", e => {
  try { handleOrderNumber(e) } catch (e) { console.log(e) }
});

// This script formats automatically the VAT Number during order.
function vatNumberFormat() {
    const input = document.getElementById("vatParamDic");

    input.onkeyup = e => {
        const value = e.currentTarget.value.replace(/[^\d]/g, '');

        if (value.length < 9) { input.value = value; return false; }
        if (value.length < 10) { input.value = `${value.slice(0, 8)}-${value.slice(8, 9)}`; return false;}
        if (value.length >= 10) { input.value = `${value.slice(0, 8)}-${value.slice(8, 9)}-${value.slice(9, 11)}`; return false;}
  }
}

try { vatNumberFormat() } catch(e) { console.log(e) };