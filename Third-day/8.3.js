let book1 = {
    name: 'Liron book',
    author: 'Liron sifado',
    year: 1995

}
let book2 = {
    name: 'Gal book',
    author: 'GAl Atias',
    year: 1998
}

let bookUtils = {
}
bookUtils.name = 'utils'
 
bookUtils.getFirstPublished = function (a,b){
    if( a.year < b.year ) {
        return a
    }
    else{
        return b
    }
}

let first = bookUtils.getFirstPublished (book1, book2)

bookUtils.setNewEdition = function(book, yearEdition){
    book.latestEdition = yearEdition
}

bookUtils.setLanguage = function(book, language){
    book.language = language
} 

bookUtils.setTranslation = function(book, language , translator ){
    book.translation = {
        translator : translator,
        language : language
    }
}

bookUtils.setPublisher = function(book, name , location ){
    book.publisher = {
        name : name,
        location : location
    }
}

bookUtils.isSamePublisher = function (b1 , b2){
    let check1= b1.publisher.name === b2.publisher.name
    let check2= b1.publisher.location === b2.publisher.location
    return check1 && check2
}

bookUtils.setPublisher(book1 , "Dani" , 'israel' )
bookUtils.setPublisher(book2 , "Dani" , 'japan' )

 console.log(bookUtils.isSamePublisher (book1,book2))