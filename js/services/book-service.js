'use strict'

import defaultBooks from './books.js'
import {storageService} from './util.service.js'


console.log('books: ', defaultBooks)


export default {
    getBooks,
    getBookById,
    addBookReview
}

const STORAGE_KEY = 'BooksApp'
let gBooks;

getBooks();

function getBooks() {
    var books = storageService.load(STORAGE_KEY)
    if (!books || books.length === 0) {
        books = defaultBooks;
        storageService.store(STORAGE_KEY, books)
    }
    gBooks = books;
    window.books = gBooks;
    return Promise.resolve(gBooks);
}


function getBookById(bookId) {
    const book = gBooks.find(book => book.id === bookId)
    return Promise.resolve(book);
}

function addBookReview(bookId, reviewData) {
    getBookById(bookId)
    .then(book => {
        if (!book.reviews) {
            book.reviews = [reviewData]
                } else {
            book.reviews.unshift(reviewData)
            storageService.store(STORAGE_KEY, gBooks)
        }
        console.log("book ",book);
        storageService.store(STORAGE_KEY, gBooks);
    })
    console.log("book ",book);
    return Promise.resolve(book)
}