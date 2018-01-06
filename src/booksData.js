import * as _ from 'lodash';

function getBooksData () {
    let data = JSON.parse(localStorage.getItem('books')) || [];

    return (data);
};

function createId (collection) {
    const lastRecord = _.last(_.orderBy(collection, ['id']));
    const biggestId = lastRecord ? lastRecord.id : 0;
    return biggestId + 1;
}

function setBookData (bookData) {
    let books = getBooksData();

    if (typeof bookData.id === 'undefined') {
        bookData['id'] = createId(books);
        books.push(bookData);
    } else {
        const i = _.findIndex(books, ['id', bookData.id]);
        books[i] = bookData;
    }

    localStorage.setItem('books', JSON.stringify(books));
    return bookData;
}

function removeBook (bookData) {
    let books = getBooksData();
    _.remove(books, book => book.id === bookData.id);

    localStorage.setItem('books', JSON.stringify(books));
    return books;
}

export { getBooksData, setBookData, removeBook };
