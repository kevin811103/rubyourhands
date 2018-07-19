<template>
    <div>
        <span>hello</span>
        <div></div>
    </div>
</template>
<script>
export default {
  components: {},
  mounted() {
    console.log(
      `%c rubyourhands %c Detected Version hi%c`,
      "background:#35495e ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff",
      "background:#2d8cf0 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff",
      "background:transparent"
    );
  },
  methods: {}
};
</script>
<style lang="less" scoped>
</style>
