<template>
    <div>
        iiii

        <ul>
            <li><img src="http://unimap.wingzero.tw/uniform/taipei/cmgsh/14882946380_1_thumb.jpg" alt=""></li>
            <li><img src="http://unimap.wingzero.tw/uniform/taoyuan/tysh/14861091270_1_thumb.jpeg" alt=""></li>
            <li><img src="http://unimap.wingzero.tw/uniform/taoyuan/tysh/14861091271_2_thumb.jpeg" alt=""></li>
            <li><img src="http://unimap.wingzero.tw/uniform/taoyuan/tysh/14861091282_3_thumb.jpeg" alt=""></li>
            <li><img src="http://unimap.wingzero.tw/uniform/taoyuan/tysh/14861091283_4_thumb.jpeg" alt=""></li>
            <li><img src="http://unimap.wingzero.tw/uniform/taoyuan/tysh/89dd247d6f8a46510352c7f23a4be2c9.jpg" alt=""></li>
            <li><img src="http://unimap.wingzero.tw/uniform/taoyuan/tysh/d913fd966a99a05aacbe9cdd0ea46417.jpg" alt=""></li>
        </ul>
        <div v-for="(item, index) in items" :width="600" :height="600" :key="index">
            {{item.style}}
        </div>

        <div class="box">
            <Waterfall :align="align">
                <!-- each component is wrapped by a waterfall slot -->

                <WaterfallSlot v-for="(item, index) in items" :width="100" :height="100" :key="index">
                    <div class="item" :style="item.style" :index="index"></div>
                </WaterfallSlot>
            </Waterfall>
        </div>

    </div>
</template>

<script>

export default {

  layout: "barMenu",
     data() {
         return{
                 align: 'center',
              items: [],
              isBusy: false,
              lastIndex:0
         }
        },
        mounted() {
            this.generateRandomItems()
        },
        methods:{

generateRandomItems(){
    for (var i = 0; i <5; i++) {
      this.items[i] = {
        index: this.lastIndex++,
        style: {
          background: this.getRandomColor()
        },
        width: 100 + ~~(Math.random() * 50),
        height: 100 + ~~(Math.random() * 50)
        
    
    }
    console.log("this.items",this.items[i])
    }
    
  },
reflowed () {
                this.isBusy = false
              },
   getRandomColor () {
    var colors = [
      'rgba(21,174,103,.5)',
      'rgba(245,163,59,.5)',
      'rgba(255,230,135,.5)',
      'rgba(194,217,78,.5)',
      'rgba(195,123,177,.5)',
      'rgba(125,205,244,.5)'
    ]
    return colors[~~(Math.random() * colors.length)]
  }
            }
}
</script>


<style lang="less" scoped>
ul {
    margin: 0;
    padding: 0;
    -moz-column-count: 3;
    -moz-column-gap: 15px;
    -webkit-column-count: 3;
    -webkit-column-gap: 15px;
    column-count: 3;
    column-gap: 15px;
}
li {
    list-style: none;
    padding: 0;
    margin: 0 0 15px 0;
    display: inline-block;
}
li img {
    max-width: 100%;
}
box {
    margin: 5px;
    font-family: Helvetica, sans-serif;
}
item {
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    font-size: 1.2em;
    color: rgb(0, 158, 107);
}
.item:after {
    content: attr(index);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
}
.wf-transition {
    transition: opacity 0.3s ease;
    -webkit-transition: opacity 0.3s ease;
}
.wf-enter {
    opacity: 0;
}
.item-move {
    transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
    -webkit-transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}
</style>


