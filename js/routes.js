
import bookApp from './cmps/book-app.cmp.js';
import bookHomePage from './cmps/book-homePage.cmp.js';
import bookAbout from './cmps/book-about.cmp.js';
import bookDetails from './cmps/book-details.cmp.js';


const myRoutes = [
    {
        path: '/book',
        component: bookApp
    },
    {
        path: '/book/details/:id',
        component: bookDetails
    },
    {
        path: '/homePage',
        component: bookHomePage
    },
    {
        path: '/about',
        component: bookAbout
    },
       
]
const myRouter = new VueRouter({routes: myRoutes, name:"router-name"})

export default myRouter;