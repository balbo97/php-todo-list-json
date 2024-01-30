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
        addTask() {
            const data = {
                task: this.item
            }

            axios.post(this.apiUrl, data, {
                headers: { 'Content-type': 'multipart/form-data' }
            }).then((response) => {
                this.item = '';
                this.item = response.data.task;
            })
        },
        getTodo() {
            axios.get(this.apiUrl).then((response) => {
                this.todoList = response.data;
                console.log(this.todoList);
            })
        }
    },
}).mount('#app')