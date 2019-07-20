<template>
  <div>
    <ul class="mui-table-view">
      <li v-for="(item,index) in selFruitList" :key="index"
        class="mui-table-view-cell mui-media"
      >
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" src>
          <div class="mui-media-body">
            <span>{{item.name}}</span>
            <p class="mui-ellipsis">{{item.intros}}</p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
		selFruitList:[]
	};
  },
  methods: {
    jia() {
      this.$store.dispatch("ac_increment", 1);
    },
    jian() {
      this.$store.dispatch("ac_reduce", 1);
    }
  },
  mounted() {
	  this.selFruitList = this.$store.state.home.selFruitList
  }
};
</script>

<style>
</style>