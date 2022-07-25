<template>
  <div class="lunbo-box">
    <!-- indicator-position  指示器的位置 -->
    <el-carousel :interval="2000" type="card" height="360px" indicator-position="outside">
      <el-carousel-item v-for="(item, index) in abc_img" :key="index">
        <img :src="item.img" />
      </el-carousel-item>
    </el-carousel>

    <div class="bottom">
      We are champions!
    </div>

  </div>
</template>
<script>

export default {
  data() {
    return {
      abc_img: [
        { img: require("@/assets/image/rng.jpg") },
        { img: require("@/assets/image/ig.jpg") },
        { img: require("@/assets/image/edg.jpg") },
        { img: require("@/assets/image/fpx.jpg") },


      ],
    };
  },
}
</script>
<style scoped>
img {
  width: 100%;
  height: 100%;
}

.lunbo-box {
  /* background: url("../assets/images/10.jpg"); */
  /* background-color: bisque; */
  height: 100%;
}
.bottom{
  font-size: 50px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  display: flex;
  justify-content: center;
  margin-top: 40px;
  color: #FFD700;
}
</style>