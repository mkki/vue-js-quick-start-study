import Constant from '../Constant';
import SearchApi from '../api/SearchAPI';

export default {
    state: {
        contacts: []
    },
    mutations: {
        [Constant.SEARCH_CONTACT]: (state, payload) => {
            state.contacts = payload.contacts;
        }
    },
    actions: {
        async [Constant.SEARCH_CONTACT](store, payload) {
            var response = await SearchApi.searchContact(payload.name);
            store.commit(Constant.SEARCH_CONTACT, { contacts: response.data });
            if (response.data.length > 0) {
                store.dispatch(Constant.ADD_KEYWORD, payload);
            }
        }
    }
}