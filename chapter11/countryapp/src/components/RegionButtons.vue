<template>
  <div>
    <button class="region" v-for="(region, index) in regions" :class="isSelected(region)" :key="index" @click="changeRegion({region:region})">
      {{ region }}
    </button>
  </div>
</template>

<script>
import Constant from '../Constant.js';
import _ from 'lodash';
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: "RegionButtons",
  computed: mapGetters(['regions', 'currentRegion']),
  methods: _.extend({
      isSelected(region) {
        if(region == this.currentRegion) return { selected: true }
        return { selected: false }
      }
    },
    mapMutations([
      Constant.CHANGE_REGION
    ])
  )
}
</script>

<style>
  button.region {
    text-align: center;
    width: 80px;
    margin: 2px;
    border: solid 1px gray;
  }
  button.selected {
    background-color: purple;
    color: aqua;
  }
</style>
