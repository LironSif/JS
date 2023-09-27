const library = [
    {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true
    },
    {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true
    },
    {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false
    }
    ];
    
    function bookShow(lib) {
        for (let i = 0; i < lib.length; i++) {
            if (lib[i].readingStatus === true) {
                readable(lib[i]);
            } else {
                unreadable(lib[i]);
            }
        }
    }
    
    function readable(book) {
        console.log(`readable "${book.title}" by ${book.author}.`);
    }
    
    function unreadable(book) {
        console.log(`unreadable "${book.title}" by ${book.author}.`);
    }
    bookShow(library);
    