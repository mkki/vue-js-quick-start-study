<template>
  <div>
    <h1>연락처</h1>
    <div class="wrapper">
      <div class="box" v-for="contact in contacts" :key="contact.no">
        <nuxt-link v-bind:to="'/contacts/' + contact.no">{{contact.name}}</nuxt-link>
      </div>
    </div>
    <nuxt-child></nuxt-child>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "contacts",
  transition: "elastic",
  computed: mapGetters({
    contacts: 'getContacts'
  })
}
</script>

<style>
  .wrapper { background-color:#fff; clear:both; display:table; }
  .box { float:left; background-color:aqua; border-radius:5px;
      padding: 10px; margin:3px; text-align:center; font-size:120%;
      width:100px; font-weight:bold; }
  a:link, a:visited { text-align:center; text-decoration:none;
      display:inline-block; }
</style>
