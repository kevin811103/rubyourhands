<template>
    <div>
        林嘉明的班表
        <!-- {{scheduledArray}} -->
       
        <DatePicker v-model="chooseDate" format="yyyy年MM月dd日" type="date" placeholder="看你要查哪一天" style="width: 200px"  @on-change="queryType"></DatePicker>
        {{whitchType|classChang}}
        
        <div>
              <Button type="success" @click="test" size="large" icon="paper-airplane">test</Button>
            
        </div>
    </div>
</template>

<script>
import moment from "moment";
import classChang from "~/mixins/filiterRule";
export default {
  layout: "barMenu",
  mixins: [classChang],
  data() {
    return {
      chooseDate: "2018-10-19",
      whitchType: "",
      // m:早班,v:休假,bn:大夜班,sn:小夜班
      // w:周 ,d:天 ,type:型別
      scheduledArray: [
        {
          w: "0",
          data: [
            { d: "0", type: "v" },
            { d: "1", type: "sn" },
            { d: "2", type: "sn" },
            { d: "3", type: "sn" },
            { d: "4", type: "sn" },
            { d: "5", type: "sn" },
            { d: "6", type: "v" }
        

          ]
        },
        {
          w: "1",
          data: [
            { d: "0", type: "v" },
            { d: "1", type: "m" },
            { d: "2", type: "m" },
            { d: "3", type: "m" },
            { d: "4", type: "m" },
            { d: "5", type: "m" },
            { d: "6", type: "m" }
          ]
        },
        {
          w: "2",
          data: [
            { d: "0", type: "bn" },
            { d: "1", type: "v" },
            { d: "2", type: "bn" },
            { d: "3", type: "v" },
            { d: "4", type: "bn" },
            { d: "5", type: "v" },
            { d: "6", type: "bn" }
          ]
        },
        {
          w: "3",
          data: [
            { d: "0", type: "m" },
            { d: "1", type: "bn" },
            { d: "2", type: "v" },
            { d: "3", type: "bn" },
            { d: "4", type: "v" },
            { d: "5", type: "bn" },
            { d: "6", type: "v" }
          ]
        }
      ]
    };
  },
  mounted() {},
  methods: {
    queryType() {
      moment.locale("zh-TW");
      console.log("============================");
      console.log(this.chooseDate);
      console.log("============================");
      this.getWD(this.chooseDate);
    },
    test() {
      // http://momentjs.com/docs/#/displaying/format/
      let a = moment().format("MMMM Do YYYY, h:mm:ss a");
      console.log("a", a);
      let w = moment().format("W");
      console.log("今年的第幾周", (w-1));
      console.log("以四周取餘之後", (w-1) % 4);
      let d = moment().format("d");
      console.log("一周的第幾天", d);

      this.getType(w, d);
      let testDay = new Date(2018, 9, 15);
      this.getWD(testDay);
      console.log("測試", this.whitchType);
    },
    getWD(date) {
      let w = moment(date).format("W");
      console.log("今年的第幾周", (w-1));
      console.log("以四周取餘之後", (w-1) % 4);
      let d = moment(date).format("d");
      console.log("一周的第幾天", d);
      this.getType((w-1), d);
    },
    getType(w, d) {
      this.scheduledArray.forEach(data => {
        console.log("data", data);
        console.log("今年的第幾周", w);
        data.w === (w % 4).toString()
          ? data.data.forEach(detail => {
              detail.d === d.toString() ? (this.whitchType = detail.type) : "";
            })
          : "";
      });
      console.log("甚麼班", this.whitchType);
    }
  }
};
</script>

<style>
</style>
