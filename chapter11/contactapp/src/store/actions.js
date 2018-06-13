import Constant from '../constant';
import ContactsAPI from '../api/ContactsAPI';

export default {
    [Constant.ADD_CONTACT_FORM]: (store) => {
        store.commit(Constant.ADD_CONTACT_FORM);
    },
    async [Constant.ADD_CONTACT](store) {
        var response = await ContactsAPI.addContact(store.state.contact);
        if (response.data.status == 'success') {
            store.dispatch(Constant.CANCEL_FORM);
            store.dispatch(Constant.FETCH_CONTACTS, { pageno: 1 });
        } else {
            console.log(`연락처 추가 실패: ${response.data}`)
        }
    },
    async [Constant.EDIT_CONTACT_FORM](store, payload) {
        var response = await ContactsAPI.fetchContactOne(payload.no);
        store.commit(Constant.EDIT_CONTACT_FORM, { contact: response.data });
    },
    async [Constant.UPDATE_CONTACT](store) {
        var response = await ContactsAPI.updateContact(store.state.contact);
        var currentPageNo = store.state.contactlist.pageno;
        if (response.data.status == 'success') {
            store.dispatch(Constant.CANCEL_FORM);
            store.dispatch(Constant.FETCH_CONTACTS, { pageno: currentPageNo });
        } else {
            console.log(`연락처 변경 실패: ${response.date}`);
        }
    },
    async [Constant.EDIT_PHOTO_FORM](store, payload) {
        var response = await Constant.fetchContactOne(payload.no);
        store.commit(Constant.EDIT_PHOTO_FORM, { contact: response.data });
    },
    async [Constant.UPDATE_PHOTO](store, payload) {
        var currentPageNo = store.state.contactlist.pageno;
        var response = await ContactsAPI.updatePhoto(payload.no, payload.file);
        store.dispatch(Constant.CANCEL_FORM);
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

        var response = await ContactsAPI.fetchContacts(pageno, pagesize);
        store.commit(Constant.FETCH_CONTACTS, { contactlist: response.data });
    },
    [Constant.CANCEL_FORM]: (store, payload) => {
        store.commit(Constant.CANCEL_FORM);
    },
    async [Constant.DELETE_CONTACT](store, payload) {
        var currentPageNo = store.state.contactlist.pageno;
        var response = await ContactsAPI.deleteContact(payload.no);
        store.dispatch(Constant.FETCH_CONTACTS, { pageno: currentPageNo });
    },
    [Constant.CHANGE_MODE]: (store, payload) => {
        store.commit(Constant.CHANGE_MODE, { mode: payload.mode });
    }
}