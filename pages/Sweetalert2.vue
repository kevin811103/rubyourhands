<template>
    <div>
        <Button @click="sweetAlert">提示訊息</Button>
        <Button @click="sweetAlert2">提示訊息2</Button>
    </div>
</template>

<script>
// import draggable from "vuedraggable";

export default {
 layout: "barMenu",
    methods:{
        sweetAlert(){
              this.$swal('Good job!', 'You are ready to start!', 'success')
        },
        sweetAlert2(){
              this.$swal({
  icon: "success",
});
        }
    }
}
</script>

<style>
</style>
