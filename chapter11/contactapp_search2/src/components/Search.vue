<template>
  <div>
    <p>
      이름: <input type="text" v-model.trim="name" placeholder="두 글자 입력" 
      @keyup.enter="keyupEvent" />
    </p>
    <div>
      <div>최근 검색 리스트 : </div>
      <div class="box">
        <div class="item" v-for="(keyword, index) in keywordlist" :key="index">{{ keyword }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Constant from '../Constant';
import { mapState } from 'vuex';

export default {
  name: 'search',
  data() {
    return {
      name: ''
    };
  },
  computed : mapState([ 'keywordlist' ]),
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

<style scoped>
  div.box {
    width: 200px; height: 100px; overflow: auto;
    border: solid 1px #bbbbbb; margin: 5px;
  }
  div.item {
    padding: 3px;
  }
</style>