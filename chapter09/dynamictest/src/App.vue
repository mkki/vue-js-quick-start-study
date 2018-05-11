<template>
  <div>
    <div class="header">
      <h1 class="headerText">Open SG</h1>
      <nav>
        <ul>
          <li>
            <a href="#" v-on:click="changeMenu('home')">home</a>
          </li>
          <li>
            <a href="#" v-on:click="changeMenu('about')">about</a>
          </li>
          <li>
            <a href="#" v-on:click="changeMenu('contact')">contact</a>
          </li>
        </ul>
      </nav>
    </div>
    
    <div class="container">
      <keep-alive exclude="contact">
        <component :is="currentView"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import Home from './components/Home.vue';
import About from './components/About.vue';
import Contact from './components/Contact.vue';

export default {
  data () {
    return {
      currentView: 'home'
    }
  },
  components: { Home, About, Contact },
  methods: {
    changeMenu(view) {
      this.currentView = view;
    }
  }
}
</script>

<style scoped>
  .header { background-color:aqua; padding: 10px 0px 0px 0px; }
  .headerText { padding: 0px 20px 0px 20px; } 
  ul { list-style-type: none; margin: 0; padding: 0;
      overflow: hidden; background-color: purple;  }
  li { float: left; }
  li a { display: block; color: yellow; text-align: center;
      padding: 14px 16px; text-decoration: none;  }
  li a:hover { background-color: aqua; color:black; }
</style>
