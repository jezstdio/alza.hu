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