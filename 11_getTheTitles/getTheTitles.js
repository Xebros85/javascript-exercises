const getTheTitles = function(books) {
    let titles = []; 
    let len = books.length;

    for (let i = 0; i < len; i++) {
        titles.push(books[i]["title"])
    }
    return titles;
    
};

// Do not edit below this line
module.exports = getTheTitles;
