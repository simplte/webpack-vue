<template>
  <div class="goods-list">
    <div class="mui-card" v-for="(item,index) in students" :key="index">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <span class="grid-content bg-purple-dark">{{item.name}}</span>
          <span number='6'>{{item.age}}</span>
          <span number='6'>{{item.gender? '男':'女'}}</span>
          <span number='6'>{{item.habbies}}</span>
        </div>
      </div>  
    </div>
  </div>
</template>

<script>
import { getData } from './../../axios'
export default {
  data() {
    return {
      students: [],
      content: []
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
    getData('/students?from=vue',"get",)
    .then(res =>{
      this.students = res.data;
    })
  },
  components: {
  }
};
</script>

<style>
</style>