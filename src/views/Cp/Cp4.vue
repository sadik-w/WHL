<!--  -->
<template>
  <div>
    <Content>
      <Alert :type="alerttype"> {{total}}</Alert>
      <Table :columns="columns" :data="data1">
        <template slot-scope="{ row, index }" slot="name">
          <Input type="text" v-model="editName" v-if="editIndex === index" />
          <span v-else>{{ row.name }}</span>
        </template>
        <template slot-scope="{ row, index }" slot="price">
          <Input type="text" v-model="editPrice" v-if="editIndex === index" />
          <span v-else>{{ row.price }}</span>
        </template>
        <template slot-scope="{ row, index }" slot="count">
          <Input type="text" v-model="editCount" v-if="editIndex === index" />
          <span v-else>{{ row.count }}</span>
        </template>
        <template slot-scope="{ row, index }" slot="sum">
          <span >{{ row.sum }}</span>
        </template>
        <template slot-scope="{ row, index }" slot="action">
          <div v-if="editIndex === index">
            <Button @click="handleSave(index)">保存</Button>
            <Button @click="editIndex = -1">取消</Button>
          </div>
          <div v-else>
            <Button @click="handleEdit(row, index)">操作</Button>
            <Button type="success" @click="add(row, index)"><Icon type="md-arrow-round-up" /></Button>
            <Button type="error" @click="sub(row, index)"><Icon type="md-arrow-round-down" /></Button>
          </div>
        </template>
      </Table>
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
      //这里存放数据
      return {
        alerttype: 'success',
        editIndex: -1,  // 当前聚焦的输入框的行数
        editName: '',  // 第一列输入框，当然聚焦的输入框的输入内容，与 data 分离避免重构的闪烁
        editPrice: '',  // 第二列输入框
        editCount: '',  // 第三列输入框
        editSum: '',  // 第四列输入框
        columns: [
          {
            title: '单价',
            slot: 'price'
          },
          {
            title: '名称',
            slot: 'name'
          },
          {
            title: '数量',
            slot: 'count'
          },
          {
            title: '总价',
            slot: 'sum'
          },
          {
            title: '操作',
            slot: 'action'
          }
        ],
        data1: [
          {
            name: '苹果',
            price: 3,
            count: 0,
            sum: 0,
          },
          {
            name: '梨儿',
            price: 4,
            count: 0,
            sum: 0,
          }, {
            name: '菠萝',
            price: 3,
            count: 0,
            sum: 0,
          }, {
            name: '西瓜',
            price: 5,
            count: 0,
            sum: 0
          }, {
            name: '葡萄',
            price: 7,
            count: 0,
            sum: 0
          }
        ],
      };
    },
    //监听属性 类似于data概念
    computed: {
      total() {
        var s = 0;
        this.data1.forEach(e => {
          s += e.sum;
        })
        return s;
      }
    },
    //监控data中的数据变化
    watch: {

    },
    //方法集合
    methods: {
      handleEdit(row, index) {
        this.editName = row.name;
        this.editPrice = row.price;
        this.editSum = row.sum;
        this.editCount = row.count;
        this.editIndex = index;
      },
      handleSave(index) {
        this.data1[index].name = this.editName;
        this.data1[index].price = this.editPrice;
        this.data1[index].sum = this.editCount*this.editPrice;
        this.data1[index].count = this.editCount;
        this.editIndex = -1;
      },
      add(row, index) {
        row.count++
        this.data1[index].count++;
        row.sum = row.price * row.count;
        this.data1[index].sum = row.price * row.count;
        this.$Message.success('修改成功！！');
      },
      //...................................
      sub(row, index) {
        console.log('-');
        if (row.count > 0) {
          row.count--
          row.sum = row.price * row.count;
          this.data1[index].sum = row.price * row.count;
          this.$Message.success('修改成功！！');
        }
        else {
          this.$Message.error('不能再减啦！！');
        }
      }
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {

    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {

    },
    beforeCreate() { }, //生命周期 - 创建之前
    beforeMount() { }, //生命周期 - 挂载之前
    beforeUpdate() { }, //生命周期 - 更新之前
    updated() {
      console.log('111111111111')
      if (this.total > 50) {
        this.alerttype = 'error';
      } else {
        this.alerttype = 'success';
      }
    }, //生命周期 - 更新之后
    beforeDestroy() { }, //生命周期 - 销毁之前
    destroyed() { }, //生命周期 - 销毁完成
    activated() { }, //如果页面有keep-alive缓存功能，这个函数会触发
  }
</script>
<style>

</style>