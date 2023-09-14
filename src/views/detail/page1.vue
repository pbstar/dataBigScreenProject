<template>
  <div>
    <div class="page">
      <toHome class="toHome" />
    </div>
  </div>
</template>

<script>
import toHome from "@/components/toHome.vue";
export default {
  name: "page1",
  components: { toHome },
  data() {
    return {};
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
.page {
  width: 1920px;
  height: 1080px;
  background-image: url("https://chengud.newchuangye.com/images/bigData/dppeixunshuju.png");
  background-size: cover;
  position: relative;
  .toHome {
    position: absolute;
    top: 50px;
    right: 250px;
  }
}
</style>
