<template>
  <div>
    <h1>{{ test }}</h1>
    <button @click="clickHandle">click</button>
    <router-view></router-view>
  </div>
</template>

<script>
import vue from "vue";
export default {
  name: "App",
  components: {},
  data() {
    return {
      test: "12121212",
    };
  },

  computed: {},

  methods: {
    async clickHandle() {
      if (false) {
        console.log(111);
      }
      let res = await new Promise((reslove, reject) => {
        debugger;
        reslove(this.test);
      });
      console.log(res);
    },
  },

  mounted() {},
};
</script>
<style>
h1 {
  font-size: 100px;
}
</style>
