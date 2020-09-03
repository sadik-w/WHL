<!--  -->
<template>
  <div class=''>
    <Content>
      
      <Collapse accordion>
        <Panel name="1">
          史蒂夫·乔布斯
          <p slot="content">史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。</p>
        </Panel>
        <Panel name="2">
          斯蒂夫·盖瑞·沃兹尼亚克
          <p slot="content">斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary
            Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC
            Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</p>
        </Panel>
        <Panel name="3">
          乔纳森·伊夫
          <p slot="content">
            乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</p>
        </Panel>
      </Collapse>
      <!-- 抽屉 -->
      <Button @click="value = true" type="primary">Create</Button>
      <Drawer title="Create" v-model="value" width="720" :mask-closable="false" :styles="styles">
        <Form :model="formData">
          <Row :gutter="32">
            <Col span="12">
            <FormItem label="Name" label-position="top">
              <Input v-model="formData.name" placeholder="please enter user name" />
            </FormItem>
            </Col>
            <Col span="12">
            <FormItem label="Url" label-position="top">
              <Input v-model="formData.url" placeholder="please enter url">
              <span slot="prepend">http://</span>
              <span slot="append">.com</span>
              </Input>
            </FormItem>
            </Col>
          </Row>
          <Row :gutter="32">
            <Col span="12">
            <FormItem label="Owner" label-position="top">
              <Select v-model="formData.owner" placeholder="please select an owner">
                <Option value="jobs">Steven Paul Jobs</Option>
                <Option value="ive">Sir Jonathan Paul Ive</Option>
              </Select>
            </FormItem>
            </Col>
            <Col span="12">
            <FormItem label="Type" label-position="top">
              <Select v-model="formData.type" placeholder="please choose the type">
                <Option value="private">Private</Option>
                <Option value="public">Public</Option>
              </Select>
            </FormItem>
            </Col>
          </Row>
          <Row :gutter="32">
            <Col span="12">
            <FormItem label="Approver" label-position="top">
              <Select v-model="formData.approver" placeholder="please choose the approver">
                <Option value="jobs">Steven Paul Jobs</Option>
                <Option value="ive">Sir Jonathan Paul Ive</Option>
              </Select>
            </FormItem>
            </Col>
            <Col span="12">
            <FormItem label="DateTime" label-position="top">
              <DatePicker v-model="formData.date" type="daterange" placeholder="please select the date"
                style="display: block" placement="bottom-end"></DatePicker>
            </FormItem>
            </Col>
          </Row>
          <FormItem label="Description" label-position="top">
            <Input type="textarea" v-model="formData.desc" :rows="4" placeholder="please enter the description" />
          </FormItem>
        </Form>
        <div class="demo-drawer-footer">
          <Button style="margin-right: 8px" @click="value = false">Cancel</Button>
          <Button type="primary" @click="value = false">Submit</Button>
        </div>
      </Drawer>
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
      
        value: false,
        styles: {
          height: 'calc(100% - 55px)',
          overflow: 'auto',
          paddingBottom: '53px',
          position: 'static'
        },
        formData: {
          name: '',
          url: '',
          owner: '',
          type: '',
          approver: '',
          date: '',
          desc: ''
        },
      };
    },
    //监听属性 类似于data概念
    computed: {
     
    },
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {

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
    updated() { }, //生命周期 - 更新之后
    beforeDestroy() { }, //生命周期 - 销毁之前
    destroyed() { }, //生命周期 - 销毁完成
    activated() { }, //如果页面有keep-alive缓存功能，这个函数会触发
  }
</script>
<style>
  .demo-drawer-footer {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    border-top: 5px solid #e8e8e8;
    padding: 10px 16px;
    text-align: right;
    background: #fff;
  }
</style>