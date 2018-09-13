<template>
    <div>

        <div>
            <span style="border:1px solid black;font-size:46px;padding:5px">

                {{randomNumber}}

            </span>

            <span>
                請輸入左邊數字:
                <i-input v-model="inputText" size=large style="width:100px"> </i-input>
                <Button @click="submit">送出</Button>
            </span>
        </div>
        <div style="margin:50px">
            <Button @click="sweetAlert">提示訊息</Button>
            <Button @click="sweetAlert2">提示訊息2</Button>

        </div>

    </div>
</template>

<script>
// import draggable from "vuedraggable";

export default {
 layout: "barMenu",
 data(){
return{
    inputText:'',
    randomNumber:0,
}
 },
    methods:{
 
        startNumber(){
            this.randomNumber=Math.floor(Math.random()*90000)+10000
        },
        submit(){
            if(this.inputText==="左邊數字"){
                this.$swal({
                      icon: "info",
                      text:'安安你智障嗎?'
                })
            }else{
   this.$swal({
                      icon: "info",
                      text:'棒棒'
                })
            }
        },
        sweetAlert(){
              this.$swal('Good job!', 'You are ready to start!', 'success')
        },
        sweetAlert2(){
              this.$swal({
  icon: "success",
});
        }
    },
    mounted(){
        this.startNumber()
    }
}
</script>

<style>
</style>
