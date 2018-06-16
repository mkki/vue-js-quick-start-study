import Constant from '../constant'

export default {
    [Constant.ADD_TODO]: ({ state, commit }, payload) => {
        console.log("##addTodo");
        commit(Constant.ADD_TODO, payload);
    },
    [Constant.DELETE_TODO]: ({ state, commit }, payload) => {
        console.log("##deleteTodo");
        commit(Constant.DELETE_TODO, payload);
    },
    [Constant.DONE_TOGGLE]: ({ state, commit }, payload) => {
        console.log("##doneToggle");
        commit(Constant.DONE_TOGGLE, payload);
    }
}