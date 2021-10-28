Vue.config.devtools = true
// il v-model è specifico per leggere input o output dei tag input

// il v-bind stamp attributi come classi, title o altro\

const vueApp = new Vue({
    el: "#app",
    data: {
        title: "Ciao Vue, che piacere!",
        imageVue: "01.png"
    }
})