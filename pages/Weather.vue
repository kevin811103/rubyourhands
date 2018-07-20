<template>
    <div>
        天氣頁面
        <div v-if="weatherData">
<Table :columns="columns1" :data="weatherData"></Table>
        </div>

    </div>
</template>

<script>
export default {
  layout: "barMenu",
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
