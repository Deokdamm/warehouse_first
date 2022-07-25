<template>
  <div>
    <div class="title">LPL</div>
    <div v-for="(item, index) in list" :key="index" style="display: inline-block; margin: 20px 0 0 20px;">
      <my-card :href="item.href" :img="item.img" :name="item.name"></my-card>
    </div>

  </div>
</template>

<script>
import card from "@/components/cards/zhandui.vue"
export default {
  components: {
    MyCard: card
  },

  data() {
    return {
      list: [
        { name: "RNG", img: require("@/assets/zhandui/rng.png"), href: "https://lpl.qq.com/es/team_detail.shtml?tid=8" },
        { name: "EDG", img: require("@/assets/zhandui/edg.png"), href: "https://lpl.qq.com/es/team_detail.shtml?tid=1" },
        { name: "IG", img: require("@/assets/zhandui/ig.png"), href: "https://lpl.qq.com/es/team_detail.shtml?tid=2" },
        { name: "TES", img: require("@/assets/zhandui/tes.png"), href: "https://lpl.qq.com/es/team_detail.shtml?tid=42" },
        { name: "JDG", img: require("@/assets/zhandui/jdg.png"), href: "https://lpl.qq.com/es/team_detail.shtml?tid=29" },
        { name: "WE", img: require("@/assets/zhandui/we.png"), href: "https://lpl.qq.com/es/team_detail.shtml?tid=12" },
        { name: "FPX", img: require("@/assets/zhandui/fpx.png"), href: "https://lpl.qq.com/es/team_detail.shtml?tid=7" },
        { name: "WBG", img: require("@/assets/zhandui/wbg.png"), href: "https://lpl.qq.com/es/team_detail.shtml?tid=41" },
        { name: "LNG", img: require("@/assets/zhandui/lng.png"), href: "https://lpl.qq.com/es/team_detail.shtml?tid=9" },
        { name: "RA", img: require("@/assets/zhandui/ra.png"), href: "https://lpl.qq.com/es/team_detail.shtml?tid=11" },
        { name: "LGD", img: require("@/assets/zhandui/lgd.png"), href: "https://lpl.qq.com/es/team_detail.shtml?tid=4" },
        { name: "OMG", img: require("@/assets/zhandui/omg.png"), href: "https://lpl.qq.com/es/team_detail.shtml?tid=6" },
        { name: "V5", img: require("@/assets/zhandui/v5.png"), href: "https://lpl.qq.com/es/team_detail.shtml?tid=587" },
        { name: "TT", img: require("@/assets/zhandui/tt.png"), href: "https://lpl.qq.com/es/team_detail.shtml?tid=438" },
        { name: "UP", img: require("@/assets/zhandui/up.png"), href: "https://lpl.qq.com/es/team_detail.shtml?tid=685" },
        { name: "BLG", img: require("@/assets/zhandui/blg.png"), href: "https://lpl.qq.com/es/team_detail.shtml?tid=57" },
        { name: "AL", img: require("@/assets/zhandui/al.png"), href: "https://lpl.qq.com/es/team_detail.shtml?tid=422" }

      ]
    }
  },
  methods:{
    //登录
  }
}
</script>

<style scoped>
.title {
  border: 1px solid #ededee;
  background-color: #ededee;
  width: 1212px;
  height: 44px;
  margin-left: 20px;
  text-align: center;
  line-height: 44px;
  font-size: 36px;
  font-weight: 700;
  color: #404040;
}
</style>