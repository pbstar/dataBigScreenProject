<template>
  <div>
    <div class="toHome">
      <img src="@/assets/imgs/toBack.png" @click="toHome()" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "toHome",
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {
    toHome() {
      this.$router.push({
        name: "home",
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.toHome {
  cursor: pointer;
}
</style>
