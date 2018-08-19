/**
 * Vue component for the todo list adding form
 */
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
            v-model="newTodo"
            placeholder="add a new todo "/>
        <input 
            class="todo-submit"
            type="submit" 
            value="ADD"></input>
    </form>
    `
});

/**
 * Vue component for the todo item
 * sets checked on click
 */
Vue.component('todo-item', {
    props: ['todo'],
    methods: {
        todoEvent: function() {
            //emit the todo item
            this.$emit('todo-completed', this.todo);
            console.log(this.todo.id);
        }
    },
    template: `
            <div 
                class="todo-item"
                @click="todoEvent">
                <span 
                    class="title"
                    v-bind:class="{completed: todo.checked}">
                    {{todo.text}}
                </span>
            </div>`
});

const app = new Vue({
    el: `#app`,
    data: {
        todoList: []
    },
    computed: {
        //sorts the todo list based on checked or not
        filterTodo: function() {
            //hail the unusual javascript sorting
            // return 0 if both same, 1 if a is greater, -1 else.
            this.todoList.sort(function(a, b) {
                return a.checked === b.checked? 0 : a.checked? 1: -1;
            })
            return this.todoList;
        }
    },
    methods: {
        //method to add a new todoList item
        addTodo: function(todo) {
            if (todo && todo.length > 0) {
                this.todoList.push({
                    id: this.todoList.length+1, 
                    text: todo,
                    checked: false
                })
            }
        },
        //method to checkOut/complete a particular todo item
        completedTodo: function(todo) {
            todo.checked = !todo.checked; 
        }
    }
});
