const data = require('./data.json');
const library = data.Library

function search(match, type){
    
    let selectedItem = library.filter((item) => item[type] === match)
 library.splice([library.indexOf(selectedItem)], 1)
    }

    search("apple", "Book")
console.log(library)