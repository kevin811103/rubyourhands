<template>
    <Menu class="menu" mode="horizontal" theme="light" width="auto" :active-name="routerName">
        <h3>当前位置：{{routerNameWithAdmin}}</h3>
        <Submenu class="submenu" name="setting">
            <template slot="title">
                <Icon size="18" type="settings"></Icon>選單
            </template>
            <i-menuItem name="logout" @click.native="onLogout">回首頁</i-menuItem>
        </Submenu>
    </Menu>
</template>
<script>
import { MenuItem } from "iview";
export default {
  components: {
    "i-menuItem": MenuItem
  },
  computed: {
    routerNameWithAdmin() {
      return (
        "admin." +
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
