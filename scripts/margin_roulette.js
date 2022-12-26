// helps you to show products' number by default
function marginRoulette() {
    const moreButton = document.getElementsByClassName('button-more')[0];
    const brands = {
      'Mobiltelefonok': ['EVOLVEO', 'Doogee', 'Cubot', 'Honor', 'Motorola', 'iGET', 'Nokia', 'POCO', 'CAT', 'ASUS', 'MYPHONE', 'OPPO', 'Realme', 'ONEPLUS', 'NOTHING', 'Samsung', 'Xiaomi'],
      'Televíziók': ['HISENSE', 'THOMSON', 'Panasonic', 'LG', 'TCL', 'Samsung'],
      'Okosórák (smart watch)': ['Lamax', 'ARMODD', 'Amazfit', 'WowME', 'HUAWEI', 'Samsung', 'Garmin', 'Apple'],
      'Háztartási gép': ['Meliconi', 'Maxxo', 'MIDEA', 'HEINNER', 'Amica', 'LG', 'Bosch', 'Whirlpool', 'Samsung', 'Hyundai', 'CATA', 'INDESIT', 'GORENJE', 'CANDY']
    }
  
    const breadcrumbs = document.getElementsByClassName('breadcrumbs')[0];
    const currentCategory = breadcrumbs.getAttribute('data-ccname').split('|');
    const productList = Array.from(document.getElementsByClassName('browsingitem'));
    const checkboxes = document.querySelectorAll('[type="checkbox"]');
    const radios = document.querySelectorAll('[type="radio"]');
    let marginList = []
  
    currentCategory.forEach(category => {
      Object.keys(brands).forEach(brand => {
        if (brand.includes(category)) { marginList = brands[category].map(product => product.toLowerCase()) }
      })
    })
  
    productList.forEach(product => {
      const names = Array.from(product.getElementsByClassName('name'));
  
      names.forEach(name => {
        const lowerCaseProduct = replaceCharacters(name.textContent.toLowerCase());
  
        marginList.forEach(margin => {
          const lowerCaseMargin = replaceCharacters(margin.toLowerCase());
  
          if (lowerCaseProduct.includes(lowerCaseMargin)) {
            const productCode = product.getElementsByClassName('codec')[0];
  
            productCode.style.opacity = 0.8;
            productCode.style.color = '#000';
          }
        })
      })
    })
    
    moreButton.addEventListener('click', e => setTimeout(marginRoulette, 2000) )
    checkboxes.forEach(checkbox => checkbox.addEventListener('change', e => setTimeout(marginRoulette, 2000)))
    radios.forEach(checkbox => radio.addEventListener('change', e => setTimeout(marginRoulette, 2000)))
  }
  
  //try { setTimeout(marginRoulette, 2000) } catch(e) { console.log(e) };
