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
    const checkboxes = document.querySelectorAll("type=['checkbox']");
    const radios = document.querySelectorAll("type=['radio']");
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
    checkboxes.forEach(checkbox => checkbox.addEventListener("click", e => setTimeout(marginRoulette, 2000)))
    radios.forEach(checkbox => radio.addEventListener("click", e => setTimeout(marginRoulette, 2000)))
  }
  
  try { setTimeout(marginRoulette, 2000) } catch(e) { console.log(e) };
