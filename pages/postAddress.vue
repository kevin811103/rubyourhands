<template>
    <div>

        <div style="margin-top:175px;margin-left:300px">
            信箱驗證
            <i-input v-model="testMail" style="width: 300px" placeholder="請輸入信箱或電話"></i-input>
            <Button type="primary" :loading="loading" icon="ios-power" style="margin:10px" @click="checkMail">
                <span v-if="!loading">驗證是不是信箱!</span>
                <span v-else>驗證中...</span>
            </Button>
            <div>
                省
                <Select v-model="province" style="width:200px">
                    <Option v-for="item in provinceList" :value="item.id" :key="item.id">{{ item.name }}</Option>
                </Select>
            </div>

            <div v-if="cityList1&&cityList1.length>0">

                市
                <Select v-model="city" style="width:200px">
                    <Option v-for="item in cityList1" :value="item.id" :key="item.id">{{ item.name }}</Option>
                </Select>
            </div>
            <div v-if="areaList&&cityList1&&areaList.length>0">

                區

                <Select v-model="area" style="width:200px">
                    <Option v-for="item in areaList" :value="item.id" :key="item.id">{{ item.name }}</Option>
                </Select>
            </div>
        </div>
    </div>
</template>

<script>
import mailCheck from '~/controller/mailCheck/mailCheck'
import provList from '~/data/province.json'
import cityList2 from '~/data/city.json'
import areaList2 from '~/data/area.json'
export default {
     layout: "barMenu",
    mixins:[mailCheck],
    mounted(){
    console.log('provList',this.provinceList)
      console.log('cityList2',)
    
    },
         data () {
            return {
                loading:false,
                testMail:'',
                province:'',//省
                city:'',//市
                area:'',//區
                provinceList:provList,
                cityList1:[],
                areaList:[],
            }
        },
        watch:{
            province(v){
              //如果有選擇省的話去查詢市
              this.cityList1=cityList2[v]
              // 如果有變動要把下面階級的清空
              this.city=""
              this.are=""
            },
            city(v){
              this.areaList=areaList2[v]
              this.area=""
            },
            area(v){
                console.log('---------')
                console.log('province',this.province)
                console.log('city',this.city)
                console.log('area',this.area)
            }
        },
        methods:{
            checkMail(){
                this.loading=true
                this.checkEmail(this.testMail)?  this.$swal({
                      icon: "info",
                      text:'是信箱'
                }):  this.$swal({
                      icon: "info",
                      text:'不是信箱'
                })
                setTimeout(()=>{
 this.loading=false
                },800)
                
            }
        }
}
</script>

<style>
</style>

