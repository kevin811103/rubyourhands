<template>
    <div>
        <p>回答問題喔</p>
        <Collapse v-model="value1">
        <Panel name="1">
            第一題
            <p slot="content">喔喔</p>
        </Panel>
        <Panel name="2">
            第二題
            <p slot="content">喔喔</p>
        </Panel>
        <Panel name="3">
            第三題
            <p slot="content">喔喔</p>
        </Panel>
    </Collapse>
    </div>
</template>
<script>
export default {
  layout: "barMenu",
  data() {
    return {
      value1: "1"
    };
  }
};
</script>
