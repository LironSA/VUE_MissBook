
export default {
    template: `
    <section class="container book-filter-container">
        <h2>Book filters</h2>
        <h3>by name:
        <input type="text" placeholder="Srearch by Name" v-model="filterBy.name" @input="emitFilterBy" />
        by price:
        <input type="number" placeholder="Srearch by price range" v-model.number="filterBy.price" /></h3>
    </section>
    `,
    data() {
        return {
            filterBy: {
                name : '',
                price: 0
            }
        }
    },
    methods: {
        emitFilterBy() {
            console.log(this.filterBy)
            this.$emit('filtered', this.filterBy)
        }
    },
    created() {
        this.emitFilterBy();
    }
}