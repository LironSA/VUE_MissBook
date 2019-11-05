import bookService from '../services/book-service.js';
import bookFilter from './book-filter.cmp.js';
import bookList from './book-list.cmp.js';
import bookDetails from './book-details.cmp.js';
import bookHomePage from './book-homePage.cmp.js';
import bookAbout from './book-about.cmp.js';


export default {
    template: `
        <section>
        <book-filter @filtered="setFilter"></book-filter>               
        <book-details v-if="selectedBook" :book="selectedBook"></book-details>
        <book-list :books="booksToShow" @selected="selectBook"></book-list>

        <!-- <book-homePage></book-homePage>  -->
        <!-- <book-about></book-about>  -->
        </section>
    `,
    data() {
        return {
            books:[],
            filterBy: null,
            selectedBook : null
        }
    },
    methods: {
        selectBook(book) {
            console.log("book ", book);
            this.selectedBook = book;
        },
        setFilter(filterBy) {
            this.filterBy = filterBy
        },
        isOnSale () {
            if (selectedBook.isOnSale) return "on Sale"
                else {
                    return "Not on sale";
                }
        }
    },

    computed: {
        booksToShow() {

            if (!this.filterBy) return this.books;
            var regex = new RegExp(`${this.filterBy.name}`, 'i'); // ignoring upper/lower case
            return this.books.filter(book =>
                regex.test(book.title)
            )
        },
    },
    created() {
        this.selectedBook = this.books[0],
        bookService.getBooks().then(books => this.books = books)
    },
    components: {
        bookService,
        bookFilter,
        bookList,
        bookDetails,
        bookHomePage,
        bookAbout
    }   
}

