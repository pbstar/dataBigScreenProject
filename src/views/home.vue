<template>
  <div>
    <div class="fapage">
      <div class="topBox">
        <span>大数据分析</span>
      </div>
      <div class="midBox">
        <div class="mleft">
          <div
            class="mlItem"
            v-for="(item, index) in leftNavList"
            :key="index"
            @click="toNav(index)"
          >
            <span>{{ item.title }}</span>
          </div>
        </div>
        <div class="mright">
          <el-carousel
            :interval="4000"
            type="card"
            indicator-position="none"
            height="500px"
            ref="carousel"
          >
            <el-carousel-item v-for="(item, index) in leftNavList" :key="index">
              <div class="mrItem" @click="toDetail(item)">
                <h3 class="title">{{ item.title }}</h3>
                <img class="img" :src="item.image" alt="" />
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import leftNavList from "@/assets/json/leftNavList.json";

export default {
  name: "detail",
  components: {},
  data() {
    return {
      leftNavList,
    };
  },
  mounted() {
    console.log(leftNavList);
  },
  methods: {
    toDetail(e) {
      this.$router.push({
        name: e.route,
      });
    },
    toNav(index) {
      this.$refs.carousel.setActiveItem(index);
    },
  },
};
</script>
<style lang="scss" scoped>
.fapage {
  width: 100vw;
  height: 100vh;
  background-color: #100e3f;
  .topBox {
    width: 100%;
    height: 60px;
    background-image: url("https://chengud.newchuangye.com/images/bigData/index_header.png");
    background-size: 100% 100%;
    line-height: 60px;
    font-weight: 800;
    font-size: 28px;
    color: #fff;
    text-align: center;
  }
  .midBox {
    display: flex;
    align-items: center;
    height: calc(100% - 60px);
    .mleft {
      color: #fff;
      height: 100%;
      width: 245px;
      background: rgba(37, 87, 212, 0.2);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .mlItem {
        width: 100%;
        height: 40px;
        line-height: 40px;
        cursor: pointer;
        margin: 3px 0;
        text-align: center;
      }
      .mlItem:hover {
        background-color: rgb(55, 76, 197);
      }
    }
    .mright {
      width: calc(100% - 305px);
      margin-left: 30px;
      .mrItem {
        height: 100%;
        background-image: url("@/assets/imgs/home_item_bg.png");
        background-size: 100% 100%;
        padding: 20px;
        box-sizing: border-box;
        .title {
          color: #fff;
          line-height: 50px;
          text-align: center;
        }
        .img {
          width: 100%;
          height: calc(100% - 60px);
        }
      }
    }
  }
}
</style>
