<template>
    <Menu class="menu" :active-name="currRoute" :open-names="['users', 'orders', 'applications', 'products']" theme="dark" width="auto">
        <!-- MENU TITLE -->
        <div class="menu-title">
            <h2 @click="routerPush('/')">
                <Icon type="ios-flower-outline"></Icon>
            </h2>
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
            <i-menuItem name="well" @click.native="routerPush('/well')">
                <span>瀑布流</span>
            </i-menuItem>
            <i-menuItem name="sadman" @click.native="routerPush('/sadman')">
                <span>傷心人</span>
            </i-menuItem>
            <i-menuItem name="circel" @click.native="routerPush('/circel')">
                <span>圈圈</span>
            </i-menuItem>
            <i-menuItem name="vcharts" @click.native="routerPush('/vcharts')">
                <span>vcharts</span>
            </i-menuItem>
            <i-menuItem name="tomato" @click.native="routerPush('/tomato')">
                <span>番茄鐘</span>
            </i-menuItem>
            <i-menuItem name="Dog" @click.native="routerPush('/dog')">
                <span>dog</span>
            </i-menuItem>
            <i-menuItem name="Vueawesome" @click.native="routerPush('/vueawesome')">
                <span>Vueawesome</span>
            </i-menuItem>

        </Submenu>
        <Submenu name="csstest">
            <template slot="title">
                <Icon type="person"></Icon>
                csstest
            </template>
            <!-- MENU ITEMS -->
            <i-menuItem name="css1" @click.native="routerPush('/csstest/css1')">
                <span>css1</span>
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
