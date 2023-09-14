<template>
  <div>
    <div class="fapage">
      <scale-box :width="1920" :height="1080" bgc="transparent" :delay="100">
        <main class="sonpage">
          <router-view />
        </main>
      </scale-box>
    </div>
  </div>
</template>

<script>
import ScaleBox from "vue2-scale-box";

export default {
  name: "detail",
  components: { ScaleBox },
  data() {
    return {};
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
.fapage {
  width: 100vw;
  height: 100vh;
  background-color: #100e3f;
  .sonpage {
    width: 1920px;
    height: 1080px;
  }
}
</style>
