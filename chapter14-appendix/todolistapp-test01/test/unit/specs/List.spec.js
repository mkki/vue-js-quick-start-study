import Vue from 'vue'
import Vuex from 'vuex'
import store from '@/store'
import List from '@/components/List.vue'
import InputTodo from '@/components/InputTodo'
import constant from '@/constant'

const vm = new Vue({
    template: '<div><input-todo ref="a"></input-todo><list></list></div>',
    store,
    components: {
        'list': List,
        'input-todo': InputTodo
    }
}).$mount()

describe('List.vue', () => {
    it('초기 화면 렌더링 테스트', (done) => {

        Vue.nextTick()
            .then(() => {
                expect(vm.$el.querySelectorAll('li').length).to.equal(4)
                done()
            })
            .catch(done)
    })

    it('새로운 todo 추가 후 목록 확인', (done) => {
        vm.$refs.a._data.todo = 'test03';

        const evtClick = new window.Event('click');
        var addBtn = vm.$el.querySelector('span.addbutton');
        addBtn.dispatchEvent(evtClick);

        vm._watcher.run();

        Vue.nextTick()
            .then(() => {
                var list = vm.$el.querySelectorAll('li');
                expect(list[list.length - 1].textContent).to.contain('test03');
                expect(list.length).to.equal(5);
                done();
            })
            .catch(done)
    })
})

// direct action dispatch
/*
describe('List.vue', () => {
    it('초기 화면 렌더링 테스트', (done) => {
        const vm = new Vue({
            template: '<div><list></list></div>',
            store,
            components: {
                'list': List
            }
        }).$mount()

        Vue.nextTick()
            .then(() => {
                expect(vm.$el.querySelectorAll('li').length).to.equal(4)
                done()
            })
            .catch(done)
    })

    it('새로운 todo 추가 후 목록 확인', (done) => {
        const vm = new Vue({
            template: '<div><list></list></div>',
            store,
            components: {
                'list': List
            }
        }).$mount()

        vm.$store.dispatch(constant.ADD_TODO, { todo: 'test1' })
        vm.$store.dispatch(constant.ADD_TODO, { todo: 'test2' })

        Vue.nextTick()
            .then(() => {
                var list = vm.$el.querySelectorAll('li');
                expect(list[list.length - 1].textContent).to.contain('test2')
                expect(list[list.length - 2].textContent).to.contain('test1')
                expect(list.length).to.equal(6);
                done()
            })
            .catch(done)
    })
})
*/