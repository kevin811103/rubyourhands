<template>
    <Menu class="menu" :active-name="currRoute" :open-names="['users', 'orders', 'applications', 'products']" theme="dark" width="auto">
        <!-- MENU TITLE -->
        <div class="menu-title">
            <h2 @click="routerPush('/')"><Icon type="ios-flower-outline"></Icon></h2>
        </div>
        <!-- SUBMENU:USERS -->
        <Submenu name="users">
            <template slot="title">
                <Icon type="person"></Icon>
               清單主頁
            </template>
            <!-- MENU ITEMS -->
            <i-menuItem name="list" @click.native="routerPush('/question/list')">
                <span>問題清單</span>
            </i-menuItem>
            <i-menuItem name="answer" @click.native="routerPush('/question/answer')">
                <span>回答問題</span>
            </i-menuItem>
            <i-menuItem name="new" @click.native="routerPush('/question/new')">
                <span>新增問題</span>
            </i-menuItem>
        </Submenu>
                <Submenu name="use">
            <template slot="title">
                <Icon type="person"></Icon>
               小功能
            </template>
            <!-- MENU ITEMS -->
            <i-menuItem name="weather" @click.native="routerPush('/weather')">
                <span>36h天氣預報</span>
            </i-menuItem>

        </Submenu>
    </Menu>
</template>
<script>
import { MenuItem } from "iview";
import routerPush from "~/mixins/routerPush.js";
import currRoute from "~/mixins/currRoute.js";
export default {
  components: {
    "i-menuItem": MenuItem
  },
  mixins: [currRoute, routerPush]
};
</script>
<style lang="less" scoped>
.menu {
  height: 100vh;
  overflow: auto;
}
.menu-title {
  color: #fff;
  padding: 0.8rem 0.8rem 0.2rem 0.8rem;
  height: 50px;
  cursor: pointer;
  h2 {
    font-weight: normal;
  }
}
</style>
