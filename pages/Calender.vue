<template>
    <div >
        <!-- <div style="margin-top:20px">
 <Row :gutter="16">
     <iCol span="3" style="color:white">你看不到我</iCol>
            <iCol span="3"  class="tt"> {{yearString}}</iCol>
      <iCol span="3"  class="tt"> {{monthString}}</iCol>
 </Row>
       
        <Row :gutter="16">
            <iCol span="3" style="color:white">你看不到我</iCol>
            <iCol span="3"  class="tt">星期日</iCol>
            <iCol span="3" class="tt">星期一</iCol>
            <iCol span="3"  class="tt">星期二</iCol>
            <iCol span="3"  class="tt">星期三</iCol>
            <iCol span="3"  class="tt">星期四</iCol>
            <iCol span="3"  class="tt">星期五</iCol>
            <iCol span="3"  class="tt">星期六</iCol>
     
        </Row>
 
         <Row :gutter="16">
             <span v-for="(day,index) in dayNumberArray" :value="index" :key="index" >

                 <span v-if="index%7===0">
                    <iCol span="3" push="3"><span style="color:white"> 1</span></iCol>
                 </span>
                   <iCol span="3"  class="tt" v-bind:class="day.today?'is-today':''">
                       <div v-if="day.class!=='space'">
                           <div>
                                {{day.day}}
                           </div>
                             <div v-bind:class="day.class">
                                 {{day.class|classChang}}
                             </div>
                          
                       </div>
                       <div v-else style="color:white">
<div>
    
11
</div>
<div>11</div>
                       </div>
                   </iCol>
                        </span>
   
     
        </Row>
        </div> -->

        <div>
          <div style="display:flex">
               <div  class="tt" stlye="width:40%;"><span style="font-size:31px">  
                 {{yearString}}</span> </div>
           <div  class="tt" stlye="width:40%;"> <span style="font-size:31px">  {{monthString}}</span></div>
          </div>
             
          <div class="flex-b ">
            <div  class="tt">星期日</div>
            <div class="tt">星期一</div>
            <div  class="tt">星期二</div>
            <div  class="tt">星期三</div>
            <div  class="tt">星期四</div>
            <div  class="tt">星期五</div>
            <div  class="tt">星期六</div>
          </div>
          <div class="flex-b ">
  <div v-for="(day,index) in dayNumberArray" :value="index" :key="index"   class="tt" v-bind:class="day.today?'is-today':''">

                 <span v-if="index%7===0">
                    <div ><span style="color:white"> 1</span></div>
                 </span>
                   <div  >
                       <div v-if="day.class!=='space'">
                           <div>
                                {{day.day}}
                           </div>
                             <div v-bind:class="day.class">
                                 {{day.class|classChang}}
                             </div>

                       </div>
                       <div v-else style="color:white">
<div>
    
11
</div>
<div>11</div>
                       </div>
                   </div>
                        </div>
          </div>
        </div>
        <div style="display:flex">
            <Button type="info" @click="delMonth" style="margin-left:100px;width:50%">上個月</Button>
            <Button type="info" @click="addMonth" style="margin-left:100px;width:50%">下個月</Button>
        </div>
        
    </div>
</template>

<script>
import moment from "moment";
import classChang from "~/mixins/filiterRule";
export default {
  mixins: [classChang],
  data() {
    return {
      yearString: "",
      countMonth: moment().format("M"),
      centerDay: new Date(),
      monthString: "",
      spaceDay: 0, // 第一周要先空幾天
      dayNumberArray: [],
      // dayNumber:[{numbe:""  ,class:""  ,today:false}],
      //number  class  today
      days: 0,
      isleepYear: false, //是不是閏年
      month_olympic: [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      month_normal: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      month_name: [
        "January",
        "Febrary",
        "March",
        "April",
        "May",
        "June",
        "July",
        "Auguest",
        "September",
        "October",
        "November",
        "December"
      ],
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
  methods: {
    delMonth() {
      // 少一個月
      this.dayNumberArray = [];
      this.centerDay = new Date(
        moment(this.centerDay)
          .add(-1, "months")
          .format("YYYY-MM-DD")
      );
      this.initCalender(this.centerDay);
    },
    addMonth() {
      this.dayNumberArray = [];
      this.centerDay = new Date(
        moment(this.centerDay)
          .add(1, "months")
          .format("YYYY-MM-DD")
      );
      this.initCalender(this.centerDay);
      // 加一個月
    },
    initCalender(calDate) {
      console.log("今天", moment().format("MMMM Do YYYY, h:mm:ss a"));
      console.log("取得月份", moment().format("MM"));
      console.log("取得月份名稱", this.month_name[moment().format("MM") - 1]);
      this.monthString = this.month_name[moment(calDate).format("MM") - 1];
      this.relYear(calDate);
    },
    relYear(calDate) {
      //判斷閏年
      const nowYear = parseInt(moment(calDate).format("YYYY"));
      console.log("nowYear", nowYear);
      this.yearString = nowYear;
      if ((nowYear % 4 === 0 && nowYear % 100 !== 0) || nowYear % 400 === 0) {
        //     閏年
        console.log("是閏年");
        this.isleepYear = true;
      }
      // 取得天數
      this.getNowMonthDay(calDate);
    },
    getNowMonthDay(calDate) {
      //       month_olympic: [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      //   month_normal: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      const nowMon = parseInt(moment(calDate).format("M"));
      console.log("nowMon", nowMon);
      this.isleepYear
        ? (this.days = parseInt(this.month_olympic[nowMon - 1]))
        : (this.days = parseInt(this.month_normal[nowMon - 1]));
      console.log("days", this.days);
      // 製作日期陣列

      const todayNumber = parseInt(moment(calDate).format("D"));
      for (let index = 1; index < this.days + 1; index++) {
        console.log(index);
        let dayDetail = {};
        let testDay = new Date(
          moment(calDate).format("YYYY"),
          moment(calDate).format("M") - 1,
          index
        );
        console.log("-------------------");
        console.log("testDay", testDay);
        console.log("-------------------");
        if (index === todayNumber) {
          dayDetail = {
            day: index,
            class: this.getWD(testDay),
            today: true
          };
        } else {
          dayDetail = {
            day: index,
            class: this.getWD(testDay),
            today: false
          };
        }

        this.dayNumberArray.push(dayDetail);
      }
      // 處理前面空白天
      //看這個月的第意天星期幾 退幾天

      let firstDay = new Date(
        moment(calDate).format("YYYY"),
        moment(calDate).format("M") - 1,
        1
      );
      this.spaceDay = moment(firstDay).format("d");
      console.log(this.dayNumberArray);
      console.log("---------------------");
      console.log("藥補這天firstDay", firstDay);
      console.log("藥補這天", this.spaceDay);
      console.log("---------------------");
      for (let index = 0; index < this.spaceDay; index++) {
        let dayDetail = {
          day: " ",
          class: "space",
          today: false
        };
        this.dayNumberArray.unshift(dayDetail);
      }
      console.log(this.dayNumberArray);
    },
    getWD(date) {
      let w = moment(date).format("W");
      //   console.log("今年的第幾周", w - 1);
      //   console.log("以四周取餘之後", (w - 1) % 4);
      let d = moment(date).format("d");
      //   console.log("一周的第幾天", d);
      let type = this.getType(w - 1, d);
      return type;
    },
    getType(w, d) {
      this.scheduledArray.forEach(data => {
        // console.log("data", data);
        // console.log("今年的第幾周", w);
        data.w === (w % 4).toString()
          ? data.data.forEach(detail => {
              detail.d === d.toString() ? (this.whitchType = detail.type) : "";
            })
          : "";
      });
      return this.whitchType;
    }
  },
  mounted() {
    this.initCalender();
  }
};
</script>

<style>
.tt {
  border: 1px solid black;
}

.m {
  color: maroon;
}
.sn {
  color: green;
}
.bn {
  color: blue;
}
.v {
  color: red;
}
.is-today {
  background-color: gold;
}
.flex-b {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}

.flex-b div {
  width: 14.28%;
}
</style>
