const book = {
    bookName    : 'the book',
    author      : 'liron' ,
    publishDate : 1955
};

for (let key in book){
    console.log(key + ': ' + book[key]);
}