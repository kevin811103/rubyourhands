<template>
    <Menu class="menu" mode="horizontal" theme="light" width="auto" :active-name="routerName">
        <h3>当前位置：{{routerNameWithAdmin}}</h3>



        <Submenu class="submenu" name="setting">
            <template slot="title">
                <Icon size="18" type="settings"></Icon>選單
            </template>
            <i-menuItem name="logout" @click.native="onLogout">回首頁</i-menuItem>
        </Submenu>
         <div style="margin-left:100px">                    </div>
                <div style="margin-left:100px">
                   <span style="width:300px">
        <Carousel autoplay v-model="value2" dots="none" arrow="never" :autoplay-speed="speed" loop>
        <CarouselItem>
            <div class="demo-carousel">人若軟弱就是自己最大的敵人;人若勇敢就是自己最好的朋友。</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">腳下的路還很長，活著就要堅決走下去。</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">這一秒不放棄，下一秒就有希望！堅持下去才可能成功！</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">一個人失敗的最大原因，就是對於自己的能力永遠不敢充分信任，甚至認為自己必將失敗。</div>
        </CarouselItem>
    </Carousel>
        </span> 
        </div>
    </Menu>
</template>
<script>
import { MenuItem } from "iview";
export default {
  data() {
    return {
      value2: 0,
      speed: 5000
    };
  },
  components: {
    "i-menuItem": MenuItem
  },
  computed: {
    routerNameWithAdmin() {
      return (
        "主頁面" +
        this.$route.path.split("/")[this.$route.path.split("/").length - 1]
      );
    },
    routerName() {
      return this.$route.path.split("/")[
        this.$route.path.split("/").length - 1
      ];
    }
  },
  methods: {
    onLogout() {
      //   this.$store.dispatch("auth/logout").then(result => {
      //   });
      this.$router.push("/");
    }
  }
};
</script>
<style lang="less" scoped>
.menu {
  height: 100%;
  padding: 0 15px 5px 15px;
  h3 {
    height: 100%;
    float: left;
  }
}
.submenu {
  float: right;
}
</style>
