const { createApp } = Vue;

createApp({
    data() {
        return {
            apiUrl: 'server.php',
            todoList: []
        }
    },
    mounted() {
        this.getTodo();
    },
    methods: {
        getTodo() {
            axios.get(this.apiUrl).then((response) => {
                this.todoList = response.data;
                console.log(this.todoList);
            })
        }
    },
}).mount('#app')