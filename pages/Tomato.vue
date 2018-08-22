<template>

    <div>
        <Row style='margin-top:175px'>
            <iCol span="8" style="color:white">
                <div>
                    1
                </div>
            </iCol>
            <iCol span="8" style="margin:0 auto;">
                <div>
                    <div v-if="start" style="color:red;font-size:30px;text-align:center">
                        <span>
                            {{countTime|timeChange}}

                        </span>
                    </div>

                    <div v-else>
                        <Icon type="ios-arrow-dropleft" size='100' @click="minmin" />
                        <span style='color:red;font-size:27px'>
                            {{setTimeText}}
                        </span>
                        <Icon type="ios-arrow-dropright" size='100' @click="addmin" />
                    </div>
                    <div style="text-align:center">

                        <div v-if="start" @click="pausePlay">
                            <Icon type="ios-pause" size='100' />
                        </div>
                        <div v-else @click="startPlay">
                            <Icon type="ios-play" size='100' />

                        </div>
                    </div>

                </div>
            </iCol>
            <iCol span="8">
                <div style="color:white">
                    2
                </div>
            </iCol>
        </Row>
        <audio id="testaudio">
            <source src="/crowd.mp3">
        </audio>
    </div>
</template>

<script>
import timeChange from '~/mixins/filiterRule'
export default {
    mixins:[timeChange],
         layout: "barMenu",
 data() {
    return {
        setTimeText:15,
     countTime:900,
     start:false,
     time:null,
     countMin:0,
     countSec:0
    }

},
     components: {},
        mounted() {
     
  },
  methods: {
     addmin(){
            this.setTimeText++
            },
          minmin(){
  this.setTimeText--
              },
      startPlay(){
          this.start=true
// 開始
      },
      pausePlay(){
        //   結束
        this.start=false
      },
    timer() {
      this.time = setInterval(() => {
        // do something...
        this.countTime--
        if(this.countTime===0){
          let testaudio=document.getElementById("testaudio")
          testaudio.play();

                clearInterval(this.time)
                          this.countTime=this.setTimeText*60
          this.start=false
            // setTimeout(()=>{
            //   this.audio.pause()
            // },22) 

        }
      }, 1000)
    }
  },
  watch:{  
      setTimeText(){
          this.countTime=this.setTimeText*60
      },
      start(val){
            
          console.log('watch/start',val)
          if(val)
          {
            //   繼續倒數
            
          this.timer()
          }else{
          clearInterval(this.time)
            //   暫停倒數
          }
      }
  }
}
</script>

<style>
</style>
