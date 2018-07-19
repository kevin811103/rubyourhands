<template>
    <div>
        <p>Welcome</p>
        <Button type="primary"  @click="open(false)">跳笑話</Button>
        <Button @click="open(true)">跳笑話(標題)</Button>

    </div>
</template>
<script>
export default {
  layout: "barMenu",
  methods: {
    open(nodesc) {
      this.$Notice.info({
        title: "並非如此",
        desc: nodesc
          ? ""
          : "動物園的一頭大象死了，一個職員在旁邊痛哭。 遊客站在旁邊觀看死去的大象，一位遊客說：「這個人對死去的大象真有感情。」主管聽到說：「當然不是這樣，是因為我要他負責為大象挖個墓坑。」"
      });
    }
  }
};
</script>
