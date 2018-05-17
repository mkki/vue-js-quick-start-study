import axios from 'axios';
import Constant from '../Constant';

export default {
    searchContact: (name) => {
        return axios.get(Constant.BASE_URL + name);
    }
}