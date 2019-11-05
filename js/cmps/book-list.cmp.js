
import bookPreview from './book-preview.cmp.js';


export default {
    props: ['books'],
    template: `
        <section >
                <book-preview v-for="currBook in books" :key="currBook.id" :book="currBook" 
                @click.native="$emit('selected', currBook)"></book-preview> 
        </section>
    `,
     components: {
        bookPreview
    }
    
}