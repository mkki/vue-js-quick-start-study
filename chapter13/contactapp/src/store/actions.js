import Constant from '../constant';
import ContactsAPI from '../api/ContactsAPI';

export default {
    [Constant.CHANGE_ISLOADING](store, payload) {
        store.commit(Constant.CHANGE_ISLOADING, payload);
    },
    async [Constant.ADD_CONTACT](store) {
        store.dispatch(Constant.CHANGE_ISLOADING, { isloading: true });
        var response = await ContactsAPI.addContact(store.state.contact);
        if (response.data.status == 'success') {
            store.dispatch(Constant.FETCH_CONTACTS, { pageno: 1 });
        } else {
            console.log(`연락처 추가 실패: ${response.data}`)
        }
    },
    async [Constant.UPDATE_CONTACT](store) {
        store.dispatch(Constant.CHANGE_ISLOADING, { isloading: true });
        var response = await ContactsAPI.updateContact(store.state.contact);
        var currentPageNo = store.state.contactlist.pageno;
        if (response.data.status == 'success') {
            store.dispatch(Constant.FETCH_CONTACTS, { pageno: currentPageNo });
        } else {
            console.log(`연락처 변경 실패: ${response.date}`);
        }
    },
    async [Constant.UPDATE_PHOTO](store, payload) {
        store.dispatch(Constant.CHANGE_ISLOADING, { isloading: true });
        var currentPageNo = store.state.contactlist.pageno;
        await ContactsAPI.updatePhoto(payload.no, payload.file);
        store.dispatch(Constant.FETCH_CONTACTS, { pageno: currentPageNo });
    },
    async [Constant.FETCH_CONTACTS](store, payload) {
        var pageno;
        if (typeof payload === 'undefined' || typeof payload.pageno === 'undefined') {
            pageno = 1;
        } else {
            pageno = payload.pageno;
        }
        var pagesize = store.state.contactlist.pagesize;

        store.dispatch(Constant.CHANGE_ISLOADING, { isloading: true });
        var response = await ContactsAPI.fetchContacts(pageno, pagesize);
        store.commit(Constant.FETCH_CONTACTS, { contactlist: response.data });
        store.dispatch(Constant.CHANGE_ISLOADING, { isloading: false });
    },
    async [Constant.DELETE_CONTACT](store, payload) {
        store.dispatch(Constant.CHANGE_ISLOADING, { isloading: true });
        var currentPageNo = store.state.contactlist.pageno;
        await ContactsAPI.deleteContact(payload.no);
        store.dispatch(Constant.FETCH_CONTACTS, { pageno: currentPageNo });
    },
    async [Constant.FETCH_CONTACT_ONE](store, payload) {
        store.dispatch(Constant.CHANGE_ISLOADING, { isloading: true });
        var response = await ContactsAPI.fetchContactOne(payload.no);
        store.commit(Constant.FETCH_CONTACT_ONE, { contact: response.data });
        store.dispatch(Constant.CHANGE_ISLOADING, { isloading: false });
    },
    [Constant.INITIALIZE_CONTACT_ONE](store) {
        store.commit(Constant.INITIALIZE_CONTACT_ONE);
    }
}