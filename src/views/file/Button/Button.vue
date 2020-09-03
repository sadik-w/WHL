<!--  -->
<template>
  <div style="width: 100%;">
    <Content>
      <Table :columns="columns14" :data="resData" border :span-method="handleSpan"></Table>
    </Content>
  </div>
</template>

<script>
  //这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
  //例如：import 《组件名称》 from '《组件路径》';
  import content from '../../components/content.vue'

  export default {
    //import引入的组件需要注入到对象中才能使用
    components: {
      Content: content
    },
    data() {
      return {
        columns14: [
          {
            title: 'Date',
            key: 'date',
            width: 150
          },
          {
            title: 'Name',
            key: 'name',
            width: 150

          },
          {
            title: 'Age',
            key: 'age',
            width: 150

          },
          {
            title: 'Address',
            key: 'address',
            width: 250
          }
        ],
        resData: [
          {
            id: '1',
            name: 'John Brown',
            age: 18,
            address: 'New York No. 1 Lake Park',
            date: '2016-10-01'
          },
          {
            id: '3',
            name: 'John saidk',
            age: 24,
            address: 'London No. 1 Lake Park',
            date: '2016-10-01'
          },
          {
            id: '2',
            name: 'Joe Black',
            age: 30,
            address: 'Sydney No. 1 Lake Park',
            date: '2016-10-02'
          },
          {
            id: '4',
            name: 'Joe Black',
            age: 26,
            address: 'Ottawa No. 2 Lake Park',
            date: '2016-10-04'
          },
          {
            id: '4',
            name: 'Jon Snow',
            age: 26,
            address: 'Ottawa No. 2 Lake Park',
            date: '2016-10-04'
          },
          {
            id: '4',
            name: 'Jon Snow',
            age: 26,
            address: 'Ottawa No. 2 Lake Park',
            date: '2016-10-04'
          },
        ],
        data5: [],
        arry1: [],
        arry2: [],
      }
    },
    methods: {
      handleSpan({ row, column, rowIndex, columnIndex }) {
        //合并第二列,这里columnIndex==1 根据具体业务要在前端写死
        if (columnIndex == 0) {
          //计算合并的行数列数
          let x = this.arr1[rowIndex] == 0 ? 0 : this.arr1[rowIndex]
          let y = this.arr1[rowIndex] == 0 ? 0 : 1
          //console.log(x , y)
          return [x, y]
        }
        if (columnIndex == 1) {
          //计算合并的行数列数
          let x = this.arr2[rowIndex] == 0 ? 0 : this.arr2[rowIndex]
          let y = this.arr2[rowIndex] == 0 ? 0 : 1
          //console.log(x , y)
          return [x, y]
        }
      },
      //..........................................................................
      assembleData(data) {
        let arr1 = [];
        let arr2 = [];
        let _arr1 = [];
        let _arr2 = [];
      },
      qqq() {

      }
    },
    mounted() {
      //这里 this.resData 模拟后台返回的数据

    },

    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {
      this.assembleData(this.resData)
    },
    //生命周期 - 挂载完成（可以访问DOM元素）

    beforeCreate() { }, //生命周期 - 创建之前
    beforeMount() { }, //生命周期 - 挂载之前
    beforeUpdate() { }, //生命周期 - 更新之前
    updated() { }, //生命周期 - 更新之后
    beforeDestroy() { }, //生命周期 - 销毁之前
    destroyed() { }, //生命周期 - 销毁完成
    activated() { }, //如果页面有keep-alive缓存功能，这个函数会触发
  }
</script>
<style>


</style>