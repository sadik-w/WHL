<!--  -->
<template>
  <div style="width: 100%;">
    <Content>
      <template>
        <Table :columns="columns14" :data="data5" border :span-method="handleSpan"></Table>
      </template>

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
            key: 'date'
          },
          {
            title: 'Name',
            key: 'name'
          },
          {
            title: 'Age',
            key: 'age'
          },
          {
            title: 'Address',
            key: 'address'
          }
        ],
        resData: [
          {
            id: '1',
            name: 'John Brown',
            age: 18,
            address: 'New York No. 1 Lake Park',
            date: '2016-10-03'
          },
          {
            id: '3',
            name: 'John Brown',
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
            name: 'Jon Snow',
            age: 26,
            address: 'Ottawa No. 2 Lake Park',
            date: '2016-10-04'
          }
        ],
        data5: []
      }
    },
    methods: {
      handleSpan({ row, column, rowIndex, columnIndex }) {
        //合并第二列,这里columnIndex==1 根据具体业务要在前端写死
        if (columnIndex == 1) {
          //计算合并的行数列数
          let x = row.mergeCol == 0 ? 0 : row.mergeCol
          let y = row.mergeCol == 0 ? 0 : 1
          //console.log(x , y)
          return [x, y]
        }
      },
      assembleData(data) {
        let names = []
        //筛选出不重复的 name值,将其放到 names数组中
        data.forEach(e => {
          if (!names.includes(e.name)) {
            names.push(e.name)
          }
        })

        let nameNums = []
        //将names数组中的 name值设置默认合并0个单元格,放到 nameNums中
        names.forEach(e => {
          nameNums.push({ name: e, num: 0 })
        })

        //计算每种 name值所在行需要合并的单元格数
        data.forEach(e => {
          nameNums.forEach(n => {
            if (e.name == n.name) {
              n.num++
            }
          })
        })

        //console.log(nameNums)

        //将计算后的合并单元格数整合到 data中
        data.forEach(e => {
          nameNums.forEach(n => {
            if (e.name == n.name) {
              if (names.includes(e.name)) {
                e.mergeCol = n.num
                //删除已经设置过的值(防止被合并的单元格进到这个 if 语句中)
                names.splice(names.indexOf(n.name), 1)
              } else {
                //被合并的单元格设置为 0
                e.mergeCol = 0
              }
            }
          })
        })

        //将整理后的数据交给表格渲染
        this.data5 = data
      }
    },
    mounted() {
      //这里 this.resData 模拟后台返回的数据
      this.assembleData(this.resData)
    },

    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {

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