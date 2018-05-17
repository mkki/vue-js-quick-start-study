<template>
  <p>
    이름: <input type="text" v-model.trim="name" placeholder="두 글자 입력" 
    @keyup.enter="keyupEvent" />
  </p>
</template>

<script>
import Constant from '../Constant';

export default {
  name: 'search',
  data() {
    return {
      name: ''
    };
  },
  methods: {
    keyupEvent(e) {
      var val = e.target.value;
      if (val.length >= 2) {
        this.$store.dispatch(Constant.SEARCH_CONTACT, { name: val });
        this.name = '';
      } else {
        this.$store.dispatch(Constant.SEARCH_CONTACT, { name: '' });
      }
    }
  }
}
</script>
