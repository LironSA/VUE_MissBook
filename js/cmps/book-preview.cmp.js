

export default {
    props: ['book'],
    template: `
    <section class="book-list-container">
        <ul class="book-list">
            <li>
                <h2>Book: {{book.title}}</h2>
                <img class="img-prev":src="book.thumbnail">
                <h3>Price: {{book.listPrice.amount}}{{currCode}}</h3>
                <router-link :to="'/book/details/' + book.id" >Book ID</router-link>
            </li>
        </ul>
    </section>
    `,
   computed: {
       currCode() {
       if (this.currencyCode = "USD") return "$";
       else if (this.currencyCode = "EUR") return "€";
       else if (this.currencyCode = "ILS") return "₪"
       }
   }
}