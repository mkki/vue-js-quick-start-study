import Vue from 'vue';
import Vuex from 'vuex';
import Constant from '../constant';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        todolist: [
            { todo: "영화", done: false },
            { todo: "야구", done: false },
            { todo: "공부", done: false },
            { todo: "카페", done: false }
        ]
    },
    mutations: {
        [Constant.ADD_TODO]: (state, payload) => {
            if (payload.todo !== "") {
                state.todolist.push({ todo: payload.todo, done: false });
            }
        },
        [Constant.DONE_TOGGLE]: (state, payload) => {
            state.todolist[payload.index].done = !state.todolist[payload.index].done;
        },
        [Constant.DELETE_TODO]: (state, payload) => {
            state.todolist.splice(payload.index, 1);
        }
    }
})

export default store;