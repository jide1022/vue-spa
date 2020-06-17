import Vue from "vue";

new Vue({
  data() {
    return {
      text: 123,
    }
  },
  el: "#app",
  render: (c) => c("h2", 11)
})