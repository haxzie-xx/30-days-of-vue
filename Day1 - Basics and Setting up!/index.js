Vue.component('todo-form', {
    data: function() {
        return {
            newTodo: ''
        }
    },
    methods: {
        todoEvent: function() {
            this.$emit('todo-created', this.newTodo);
            this.newTodo = '';
        }
    },
    template: `
    <form 
        class="todo-form"
        @submit.prevent="todoEvent">
        <input 
            class="todo-text" 
            type="text" 
            v-model="newTodo"/>
        <input type="submit" value="ADD"></input>
    </form>
    `
})

Vue.component('todo-item', {
    props: ['todo'],
    template: `
            <div class="todo-item">
                <input type="checkbox"></input>
                <span class="title">
                    {{todo.text}}
                </span>
            </div>`
})

const app = new Vue({
    el: `#app`,
    data: {
        todoList: []
    },
    methods: {
        addTodo: function(todo) {
            if (todo && todo.length > 0) {
                this.todoList.push({
                    id: this.todoList.length+1, 
                    text: todo,
                    checked: false
                })
            }
        }
    }
});
