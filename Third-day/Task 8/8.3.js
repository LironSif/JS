let book1 ={
    name: 'the book',
    author: 'Liron',
    year: 1995,
    itils: {
        getFirstPublished: function() {
            return this.year;
        }
    }
};

let book2 ={
    name: 'the book',
    author: 'Liron',
    year: 1995,
    itils: {
        getFirstPublished: function() {
            return this.year;
        }
    }
};

console.log(book1.itils.getFirstPublished());
console.log(book2.itils.getFirstPublished()); 
