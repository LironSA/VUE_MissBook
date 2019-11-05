import bookService from '../services/book-service.js';


export default {
    props: ['bookId'],
    template: `
    <div class="form-container">
        <form @submit.prevent="addReview">
            <input class="name" type="text" placeholder="Enter your full name" 
                    value="Books Reader" v-model.trim="reviewData.name"/>
            <select class="rate" v-model="reviewData.rate">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
            <input class="date" type="date" value="2018-01-01" v-model="reviewData.readAt"><br>
            <textarea placeholder="What do you think about the book?" 
            v-model="reviewData.txt"> </textarea><br>
            <button>Send review</button>
        </form>
    </div>
        `,
    data() {
        return {
            reviewData: {
                name: '',
                rate: 0,
                readAt: '',
                txt: '',
            }
        }
    },

    methods: {
        addReview() {
            bookService.addBookReview(this.bookId, this.reviewData)
                .then(reviewedBook => {
                    const msg = {
                        txt: `${reviewedBook.name}, you saved Succefully`,
                        type: 'success'
                    }
                    eventBus.$emit('show-msg', msg);
                })
            .catch(err => {
                const msg = {
                    txt: `NOT Saved (${err})`,
                    type: 'error'
                }
                eventBus.$emit('show-msg', msg);
            })

        }
    }
}