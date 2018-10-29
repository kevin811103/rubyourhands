<template>
  <div>
    <div style="display:flex;margin-top:50px">
        <div  style="width:50%">
            <Button type="success" @click="login" size="large" icon="ios-american-football">家名班表</Button>
        </div>
      <div  style="width:50%">
       <Button type="dashed" @click="other" size="large" icon="ios-american-football">layout</Button>
     </div>
    </div>

  </div>
</template>

<script>
import packageJson from "~/package.json";

export default {
  components: {},
  mounted() {
    console.log(
      `%c rubyourhands %c Detected Version v${packageJson.version} %c`,
      "background:#35495e ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff",
      "background:#2d8cf0 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff",
      "background:transparent"
    );
  },
  methods: {
    login() {
      this.$router.push("/classsche");
    },
    other() {
      this.$router.push("/dog");
    }
  }
};
</script>

<style>
</style>
