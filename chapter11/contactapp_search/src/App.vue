<template>
  <div>
    <search placeholder="두 글자 이상 입력" />
    <contact-list />
  </div>
</template>

<script>
import ContactList from './components/ContactList.vue';
import Search from './components/Search.vue';

export default {
  name: 'app',
  components: { ContactList, Search }
}
</script>