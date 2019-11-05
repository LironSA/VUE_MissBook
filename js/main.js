'use strict';

import './services/event-bus.service.js'
import theRouter from './routes.js'
import appHeader from './cmps/app-header.cmp.js'
import userMsg from './cmps/msg-user.cmp.js'


Vue.config.productionTip = false


var options = {
    router: theRouter,
    el: '#book-app',
    template: `
        <div>
            <app-header></app-header>  
            <router-view></router-view>
        </div>
    `,
    data: {
        
    },
    methods: {
       
    },
    components: {
        appHeader,
        userMsg
    }
    
}

new Vue(options);


