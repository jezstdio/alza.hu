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