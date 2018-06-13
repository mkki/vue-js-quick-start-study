import CONF from '../config.js';
import axios from 'axios';

export default {
    fetchContacts(pageno, pagesize) {
        return axios.get(CONF.FETCH, {
            params: {
                pageno: pageno,
                pagesize: pagesize
            }
        })
    },
    addContact(contact) {
        return axios.post(CONF.ADD, contact)
    },
    updateContact(contact) {
        return axios.put(CONF.UPDATE.replace("${no}", contact.no), contact)
    },
    fetchContactOne(no) {
        return axios.get(CONF.FETCH_ONE.replace("${no}", no));
    },
    deleteContact(no) {
        return axios.delete(CONF.DELETE.replace("${no}", no));
    },
    updatePhoto(no, file) {
        var data = new FormData();
        data.append('photo', file);

        return axios.post(CONF.UPDATE_PHOTO.replace("${no}", no), data);
    }
}