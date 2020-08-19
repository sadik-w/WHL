<template>
  <div>
    <Content>

      <Affix :offset-top="50" style="z-index: 2;" >
        <span class="demo-affix" >
          <Steps :current="current" style="width:80%;" >
            <Step title="1" content="表格1"></Step>
            <Step title="2" content="表格2"></Step>
            <Step title="3" content="表格3"></Step>
          </Steps>
        </span>
      </Affix>
      <Tabs v-model="tabs">
        <!-- 表格一 -->
        <TabPane label="表格一" name="name1">
          <Table :columns="columns" :data="data" :loading="loading">
            <template slot-scope="{ row, index }" slot="name">
              <Input type="text" v-model="editName" v-if="editIndex === index" />
              <span v-else>{{ row.name }}</span>
            </template>
            <template slot-scope="{ row, index }" slot="age">
              <Input type="text" v-model="editAge" v-if="editIndex === index" />
              <span v-else>{{ row.age }}</span>
            </template>
            <template slot-scope="{ row, index }" slot="birthday">
              <DatePicker type="date" placeholder="Select date" style="width: 200px" v-model="editBirthday"
                placement="top" v-if="editIndex === index"></DatePicker>
              <span v-else>{{row.birthday}}</span>
            </template>
            <template slot-scope="{ row, index }" slot="address">
              <Input type="text" v-model="editAddress" v-if="editIndex === index" />
              <span v-else>{{ row.address }}</span>
            </template>
            <template slot-scope="{ row, index }" slot="action">
              <div v-if="editIndex === index">
                <Button @click="handleSave(index)">保存</Button>
                <Button @click="editIndex = -1">取消</Button>
              </div>
              <div v-else>
                <Button @click="handleEdit(row, index)">操作</Button>
              </div>
            </template>
          </Table>
        </TabPane>
        <!-- 表格二 -->
        <TabPane label="表格二" name="name2">
          <Table :columns="columns8" :data="data7" size="small" ref="table" :loading="loading"></Table>
          <br>
          <Button type="primary" size="large" @click="exportData(1)">
            <Icon type="ios-download-outline"></Icon> Export source data
          </Button>
          <Button type="primary" size="large" @click="exportData(2)">
            <Icon type="ios-download-outline"></Icon> Export sorting and filtered data
          </Button>
          <Button type="primary" size="large" @click="exportData(3)">
            <Icon type="ios-download-outline"></Icon> Export custom data
          </Button>

        </TabPane>
        <!-- 表格三 -->
        <TabPane label="表格三" name="name3">
          <Table :columns="columns11" :data="data11" border show-summary  height="200">
            <!-- :summary-method="handleSummary" -->
          </Table>
        </TabPane>
      </Tabs>
      <Page :total="total" v-model="current" :page-size="pagesize" show-total @on-change="pagechange" show-elevator />
    </Content>
  </div>
</template>

<script>
  //这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
  //例如：import 《组件名称》 from '《组件路径》';
  import content from '../../components/content.vue'
  import moment from 'moment'
  import table from './table.js'
  export default {
    //import引入的组件需要注入到对象中才能使用
    components: {
      Content: content
    },
    data() {
      return {
        current: 0,
        columns: table.columns,
        data: table.data,
        columns8: table.columns8,
        data7: table.data7,
        data11:table.data11,
        columns11:table.columns11,
        editIndex: -1,  // 当前聚焦的输入框的行数
        editName: '',  // 第一列输入框，当然聚焦的输入框的输入内容，与 data 分离避免重构的闪烁
        editAge: '',  // 第二列输入框
        editBirthday: '',  // 第三列输入框
        editAddress: '',  // 第四列输入框
        loading: true,
        tabs:'name1',
        total:3,
        pagesize:1
      }
    },
    //监听属性 类似于data概念
    computed: {
      current1:function(){
        return this.current+1
      }
    },
    //监控data中的数据变化
    watch: {
      editBirthday(val) {
        console.log(moment(val).format('YYYY-MM-DD'))
        this.editBirthday = moment(val).format('YYYY-MM-DD')
      }
    },
    //方法集合
    methods: {
      pagechange(res){
        // console.log(res)
        this.tabs='name'+res
        this.current=res-1
      },
      exportData(type) {
        if (type === 1) {
          this.$refs.table.exportCsv({
            filename: 'The original data'
          });
        } else if (type === 2) {
          this.$refs.table.exportCsv({
            filename: 'Sorting and filtering data',
            original: false
          });
        } else if (type === 3) {
          this.$refs.table.exportCsv({
            filename: 'Custom data',
            columns: this.columns8.filter((col, index) => index < 4),
            data: this.data7.filter((data, index) => index < 4)
          });
        }
      },
      handleEdit(row, index) {
        this.editName = row.name;
        this.editAge = row.age;
        this.editAddress = row.address;
        this.editBirthday = row.birthday;
        this.editIndex = index;
      },
      handleSave(index) {
        this.data[index].name = this.editName;
        this.data[index].age = this.editAge;
        this.data[index].birthday = this.editBirthday
        this.data[index].address = this.editAddress;
        this.editIndex = -1;
      },
      // getBirthday(birthday) {
      //   const date = new Date(parseInt(birthday));
      //   const year = date.getFullYear();
      //   const month = date.getMonth() + 1;
      //   const day = date.getDate();
      //   return `${year}-${month}-${day}`;
      // }

    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {
      setTimeout(() => {
        this.loading = false
      }, 3000)
    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {

    },
    beforeCreate() { }, //生命周期 - 创建之前
    beforeMount() { }, //生命周期 - 挂载之前
    beforeUpdate() { }, //生命周期 - 更新之前
    updated() {

    }, //生命周期 - 更新之后
    beforeDestroy() { }, //生命周期 - 销毁之前
    destroyed() { }, //生命周期 - 销毁完成
    activated() { }, //如果页面有keep-alive缓存功能，这个函数会触发
  }
</script>
<style lang='scss' scoped>


</style>