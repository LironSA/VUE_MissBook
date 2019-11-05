import bookService from '../services/book-service.js';
import bookReview from './book-addReview.cmp.js';


export default {
    // props: ['book'],
    template: `
        <section class="book-details" v-if="book">
            <book-review :bookId="book.id"></book-review>
            <h2 class="book-title">{{book.title}}</h2>
            <h4>Book ID: {{book.id}}</h4>
            <h3>Subtitle: {{book.subtitle}}</h3>
            <p>Authors: {{book.authors}}</p> 
            <p>Published date: {{book.publishedDate}}  {{publishedDateText}}</p>
            <!-- <long-text v-bind:txt="book.description"></long-text> -->
            <!-- <p>Description: {{book.description}}</p> -->
            <p>Page count: {{book.pageCount}} - {{pageCountText}}</p>
            <p>Categories: {{book.categories}}</p>
            <img :src="book.thumbnail">
            <p>Language: {{book.language}}</p>
            <p :class="priceClass">Price: {{book.listPrice.amount}}{{book.listPrice.currCode}}</p>
            <p>{{isBookOnSale}}</p>

            <ul v-if="book.reviews" class="book-review">
                <li v-for="review in book.reviews">
                    <h2 class="review">* Book's Review *</h2>
                    <h4>Reader's name: {{review.name}}</h4>
                    <h4>Rated as: {{review.rate}}</h4>
                    <h4>Read at: {{review.readAt}}</h4>
                    <h4>Additional text: {{review.txt}}</h4>
                </li>
            </ul>
        </section>
        `,

    data() {
        return{
            book: null
        }
    },
    created() {
        console.log('this.$route.params', this.$route.params);
        const bookId = this.$route.params.id;
        // console.log('DogDetails Created, dogId:', dogId);
        bookService.getBookById(bookId)
            .then(book => this.book = book) 
    },


    computed: {
        isBookOnSale() {
            if (!this.book.listPrice.isOnSale) return "Not on sale";
            else return "ON SALE";
        },
        pageCountText() {
            if (this.book.pageCount > 500) return "Long reading"
            else if (this.book.pageCount > 200 && this.book.pageCount <101) return "Decent reading"
            else if (this.book.pageCount < 100) return "Decent reading"
        },
        publishedDateText() {
            if (this.book.publishedDate < 2009) return "- Veteran Book"
            else if (this.book.publishedDate > 2017) return "- NEW Book"
        },
        priceClass() {
            return {'price-high': this.book.listPrice.amount > 150,
                    'price-low': this.book.listPrice.amount <50  }
        }
    },
    components: {
        bookReview
    }
}