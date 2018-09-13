<template>
  <div>
    天氣頁面 {{test}}
    <div v-if="weatherData">
      <!-- <Table :columns="columns1" :data="weatherData"></Table> -->
      <div v-for="(weather, index) in weatherData " :key="index">
        {{weather.locationName}}
        <div v-for="(element, index) in weather.weatherElement " :key="index">
          {{element.elementName}}
          <span v-if="element.elementName=='Wx'">天氣現象</span>
          <span v-if="element.elementName=='PoP'">降水概率</span>
          <span v-if="element.elementName=='CI'">感受</span>
          <span v-if="element.elementName=='MinT'">最低溫</span>
          <span v-if="element.elementName=='MaxT'">最高溫</span>
          <div v-for="(time, index) in element.time " :key="index">
            開始時間 {{time.startTime}} 結束時間{{time.endTime}} {{time.parameter.parameterName}} {{time.parameter.parameterValue}} {{time.parameter.parameterUnit}}
            <!-- Wx, PoP, CI, MinT,
MaxT -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  layout: "barMenu",
  asyncData({store}){
    return{
      test:"21345"
    }
  },
  data() {
    return {
      weatherData: [],
      columns1: [
        {
          title: "Name",
          key: "locationName"
        }
        // {
        //   title: "weatherElement",
        //   key: "weatherElement.time.startTime"
        // }
        // {
        //   title: "Age",
        //   key: "age"
        // },
        // {
        //   title: "Address",
        //   key: "address"
        // }
      ],
      data1: [
        {
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park",
          date: "2016-10-03"
        },
        {
          name: "Jim Green",
          age: 24,
          address: "London No. 1 Lake Park",
          date: "2016-10-01"
        },
        {
          name: "Joe Black",
          age: 30,
          address: "Sydney No. 1 Lake Park",
          date: "2016-10-02"
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park",
          date: "2016-10-04"
        }
      ],
      columns: [
        "name",
        "nickname",
        "email",
        "birthdate",
        "gender",
        "__actions"
      ],
      itemActions: [
        {
          name: "view-item",
          label: "",
          icon: "zoom icon",
          class: "ui teal button"
        },
        {
          name: "edit-item",
          label: "",
          icon: "edit icon",
          class: "ui orange button"
        },
        {
          name: "delete-item",
          label: "",
          icon: "delete icon",
          class: "ui red button"
        }
      ]
    };
  },

  mounted() {
    this.getWeather();
  },
  methods: {
    getWeather() {
      this.$store.dispatch("getWeatherData").then(result => {
        console.log("收到的氣象資訊", result);
        this.weatherData = result.res;
        console.log("this.weatherData", this.weatherData);
      });
    }
  }
};
</script>

<style>
</style>
