<template>
  <div>
    <div class="datepicker1" v-if="formtype==='datepicker1'">
      <DatePicker :value="formdata" size="large" @on-change="handledate" format="yyyy/MM/dd" type="daterange"
        placement="bottom-end" placeholder="Select date" style="width: 300px">
      </DatePicker>
    </div>
    <!-- .......................................................................... -->
    <div class="datepicker2" v-if="formtype==='datepicker2'">
      <el-date-picker v-model="value1" size="large" @change="handledate2" type="daterange" range-separator="至"
        start-placeholder="开始日期" end-placeholder="结束日期" value-format="yyyy/MM/dd">
      </el-date-picker>
    </div>
    <!-- ........................................................................... -->
    <div class="rgform1" v-if="formtype==='rgform1'">
      <Card style="width:520px;background-image: url('https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1676039924,1631635399&fm=26&gp=0.jpg');
      background-size:100% 100%;
      background-repeat:no-repeat;">
        <Form>
          <FormItem label="UserId">
            <Input type="text" v-model="formCustom.userid" @on-blur="idck"></Input>
            <p v-show="rule.userid">*用户名要4到11位（字母，数字，下划线，减号）</p>
          </FormItem>
          <FormItem label="Password">
            <Input type="text" v-model="formCustom.passwd" @on-blur="pw"> </Input>
            <p v-show="rule.blank">*密码不能为空</p>
            <p v-show="rule.six">*密码必须为六位以上</p>
            <p v-show="rule.tp">*密码必须包含字母</p>
            <p v-show="rule.ps">*密码必须包含字母</p>
          </FormItem>
          <FormItem label="Confirm">
            <Input type="password" v-model="formCustom.passwdCheck" @on-blur="pwck"></Input>
            <p v-show="rule.eq">*两次密码必须一样</p>
          </FormItem>
          <FormItem label="Age">
            <Input type="text" v-model="formCustom.age" @on-blur="age"></Input>
            <p v-show="rule.num">*年龄必须要是数字</p>
          </FormItem>
          <FormItem label="Email">
            <Input type="text" v-model="formCustom.email" @on-blur="IsEmail"></Input>
            <p v-show="rule.emailck">*邮件格式不合法</p>
          </FormItem>
          <FormItem>
            <Button type="primary" @click="submit">Submit</Button>
            <Button style=" margin-left: 8px" @click="reset">Reset</Button>
          </FormItem>
        </Form>
      </Card>
    </div>
    <!-- ........................................................................... -->
    <div class="rgform2" v-if="formtype==='rgform2'">
      <div class="register-wrapper">
        <div id="register">
          <p class="title">注册</p>
          <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="0" class="demo-ruleForm">
            <el-form-item prop="tel">
              <el-input v-model="ruleForm2.tel" auto-complete="off" placeholder="请输入手机号"></el-input>
            </el-form-item>
            <el-form-item prop="smscode" class="code">
              <el-input v-model="ruleForm2.smscode" placeholder="验证码"></el-input>
              <el-button type="primary" :disabled='isDisabled' @click="sendCode">{{buttonText}}</el-button>
            </el-form-item>
            <el-form-item prop="name">
              <el-input type="text" v-model="ruleForm2.name" auto-complete="off" placeholder="输入用户名"></el-input>
            </el-form-item>
            <el-form-item prop="pass">
              <el-input type="password" v-model="ruleForm2.pass" auto-complete="off" placeholder="输入密码"></el-input>
            </el-form-item>
            <el-form-item prop="checkPass">
              <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="确认密码"></el-input>
            </el-form-item>
            <el-form-item prop="id">
              <el-input type="text" v-model="ruleForm2.id" auto-complete="off" placeholder="输入身份证号码"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm2')" style="width:100%;">注册</el-button>
              <el-button @click="clearform" style="width:50%;">清空</el-button>
              <p class="login" @click="gotoLogin">已有账号？立即登录</p>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
    <!-- ........................................................................... -->
    <div v-if="formtype==='input'">
      <input :class="state" :type="inputtype"></input>
    </div>
    <!-- ........................................................................... -->
    <div v-if="formtype==='select'">
      <input class="select1" type="normal" @click="showthelist" :value="listdata">
      <i class="el-icon-arrow-up" style="position: relative; top: 0px;right: 20px;" v-if="!listdata"
        @click="showthelist"></i>
      <i class="el-icon-circle-close" style="position: relative; top: 0px;right: 20px;" v-if="listdata"
        @click="cleardata"></i>
      </input>
      <Card style=" width: 150px ; margin-top:10px" v-if="showlist">
        <div style="width: 100%;" v-for="(item,index) in formdata" @click="hidethelist(index)">
          <div class="listitem">{{item.label}}</div>
        </div>
      </Card>
    </div>
    <!-- ........................................................................... -->
  </div>
</template>
<script>
  //这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
  //例如：import 《组件名称》 from '《组件路径》';
  import axios from 'axios';
  export default {
    //import引入的组件需要注入到对象中才能使用
    components: {
    },
    props: {
      formtype: String,
      formdata: Array,
      state: String,
    },
    data() {
      // <!--验证手机号是否合法-->
      let checkTel = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入手机号码'))
        } else if (!this.checkMobile(value)) {
          callback(new Error('手机号码不合法'))
        } else {
          callback()
        }
      }
      //  <!--验证码是否为空-->
      let checkSmscode = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入手机验证码'))
        }
        else if (value != this.mysmscode) {
          callback(new Error('验证码错误'))
        }
        else {
          callback()
        }
      }
      // <!--验证密码-->
      let validatePass = (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请输入密码"))
        } else {
          if (this.ruleForm2.checkPass !== "") {
            this.$refs.ruleForm2.validateField("checkPass");
          }
          callback()
        }
      }
      // 身份证号码验证
      let checkid = (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请输入身份证号码"));
        } else if (value.length !== 18) {
          callback(new Error("身份证长度不正确!"));
        } else {
          callback();
        }
      }
      // <!--二次验证密码-->
      let validatePass2 = (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请再次输入密码"));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error("两次输入密码不一致!"));
        } else {
          callback();
        }
      }
      //这里存放数据
      return {
        childData: [],
        showlist: false,
        listdata: '',
        value1: '',
        formCustom: {
          userid: '',
          passwd: '',
          passwdCheck: '',
          age: '',
          email: ''
        },
        rule: {
          blank: false,
          six: false,
          eq: false,
          num: false,
          tp: false,
          userid: false,
          emailck: false,
          ps: false
        },
        ruleForm2: {
          pass: "",
          checkPass: "",
          tel: "",
          smscode: "",
          name: "",
          id: "510105199808190272",
          birthday: "",
          age: 0,
          sex: "",
          zodiac: "",
          xingzuo: "",
          address: ""
        },
        rules2: {
          pass: [{ validator: validatePass, trigger: 'change' }],
          checkPass: [{ validator: validatePass2, trigger: 'change' }],
          tel: [{ validator: checkTel, trigger: 'change' }],
          smscode: [{ validator: checkSmscode, trigger: 'change' }],
          id: [{ validator: checkid, trigger: 'change' }]
        },
        mysmscode: 0,
        buttonText: '发送验证码',
        isDisabled: false, // 是否禁止点击发送验证码按钮
        flag: true,
        info: {},
      };
    },
    //监听属性 类似于data概念
    computed: {
      inputtype() {
        if (this.state == 'password') {
          return 'password';
        }
        else {
          return 'text';
        }
      }
    },
    //监控data中的数据变化
    watch: {
    },
    //方法集合
    methods: {
      cleardata() {
        this.listdata = '';
        this.$emit('receivechilddata', '');
      },
      showthelist() {
        this.showlist = !this.showlist;
      },
      hidethelist(index) {
        this.showlist = false;
        this.listdata = this.formdata[index].label;
        this.$emit('receivechilddata', this.formdata[index]);
      },
      // 日期选择器一传值给父组件
      handledate(data) {
        this.childData = data;
        this.$emit('receivechilddata', this.childData);
      },
      // 日期选择器二传值给父组件
      handledate2() {
        this.childData = this.value1;
        this.$emit('receivechilddata', this.childData);
      },
      // 提交表单传值给父组件
      submit() {
        if (!(this.rule.blank) && !(this.rule.six) && !(this.rule.eq) && !(this.rule.num) && !(this.rule.tp)) {
          this.childData = this.formCustom;
          this.$emit('receivechilddata', this.childData);
          // 模拟post请求加载
          this.$Spin.show({
            render: (h) => {
              return h('div', [
                h('Icon', {
                  'class': 'demo-spin-icon-load',
                  props: {
                    type: 'ios-loading',
                    size: 18
                  }
                }),
                h('div', 'Loading')
              ])
            }
          });
          // 三秒后加载完毕
          setTimeout(() => {
            this.$Spin.hide();
            this.$Message.info('成功提交');
          }, 3000);
        }
      },
      // 重置表单
      reset() {
        this.formCustom =
        {
          userid: '',
          passwd: '',
          passwdCheck: '',
          age: '',
          email: '',
        }
        this.$Message.info('清除成功');
      },
      // 用户名校验
      idck() {
        var reg = /^[a-zA-Z0-9\u4e00-\u9fa5_]{4,10}$/;
        if (reg.test(this.formdata.userid)) {
          this.rule.userid = false;
        }
        else {
          this.rule.userid = true;
        }
      },
      // 邮件校验
      IsEmail() {

      },
      // 密码长度校验
      pw() {
        if (this.formCustom.passwd.length < 6 && this.formCustom.passwd.length !== 0) {
          this.rule.six = true;
        }
        else {
          this.rule.six = false;
        }
        if (this.formCustom.passwd === '') {
          this.rule.blank = true
        }
        else {
          this.rule.blank = false;
        }
        const result = /^\d+$/.test(this.formCustom.passwd)
        if (result) {
          this.rule.tp = true
        }
        else {
          this.rule.tp = false;
        }

      },
      // 确认密码校验
      pwck() {
        if (this.formCustom.passwd !== this.formCustom.passwdCheck) {
          this.rule.eq = true
        }
        else {
          this.rule.eq = false;
        }
      },
      // 年龄校验
      age() {
        if (!/^[0-9]+$/.test(this.formCustom.age)) {
          this.rule.num = true
        }
        else {
          this.rule.num = false;
        }
      },
      // ....................................................................
      // 清空表单
      clearform() {
        this.ruleForm2 = {
          pass: "123456",
          checkPass: "123456",
          tel: "15308012091",
          smscode: "",
          name: "sadik",
          id: "510",
          birthday: "1",
          age: 0,
          sex: "",
          zodiac: "",
          xingzuo: "",
          address: ""
        }
      },
      // 发送验证码
      sendCode() {
        let tel = this.ruleForm2.tel
        if (this.checkMobile(tel)) {
          // console.log(tel)
          let time = 60
          this.buttonText = '已发送'
          this.isDisabled = true
          this.mysmscode = parseInt(Math.random() * 1000000);
          console.log(this.mysmscode);
          if (this.flag) {
            this.flag = false;
            let timer = setInterval(() => {
              time--;
              this.buttonText = time + ' 秒'
              if (time === 0) {
                clearInterval(timer);
                this.buttonText = '重新获取'
                this.isDisabled = false
                this.flag = true;
              }
            }, 1000)
          }
        }
      },
      // <!--提交注册-->
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            axios({
              method: 'get',
              url: 'http://api.tianapi.com/txapi/sfz/index',
              params: {
                key: '765b7cc79d9c596dbd686d890cb65d9c',
                idcard: this.ruleForm2.id
              }
            }).then(res => {
              var info = res.data.newslist[0];
              this.info = { ...this.ruleForm2, ...info }
              alert('submit!');
              this.$emit('receivechilddata', this.info);
              this.clearform();
            })
          } else {
            alert('error submit!!');
            return false;
          }
        });
      },
      // <!--进入登录页-->
      gotoLogin() {
        this.$router.push({
          path: "/login"
        });
      },
      // 验证手机号
      checkMobile(str) {
        let re = /^1\d{10}$/
        if (re.test(str)) {
          return true;
        } else {
          return false;
        }
      }
      // ....................................................................
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

    }, //生命周期 - 更新之后
    beforeDestroy() { }, //生命周期 - 销毁之前
    destroyed() { }, //生命周期 - 销毁完成
    activated() { }, //如果页面有keep-alive缓存功能，这个函数会触发
  }
</script>
<style>
  .listitem {
    position: relative;
    width: 100%;
    height: 30px;
  }

  .listitem:hover {
    background-color: #add4fc;
    box-shadow: 5px 5px 5px #cdeff0;
  }

  .select1:focus .el-icon-arrow-up {
    transform: rotate(180deg);
    transition: transform 0.5s ease-in;
  }

  /* 下拉输入框 */
  .select1 {
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    width: 150px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
  }

  .select1:hover {
    outline: none;
    border-color: #409eff;
  }

  /* 普通输入框 */
  .select {
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    width: 150px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
  }

  .select:hover {
    outline: none;
    border-color: #409eff;
  }

  .normal {
    -web-kit-appearance: none;
    -moz-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color .2s;
  }

  .normal:focus,
  .normal:hover {
    outline: none;
    border-color: #409eff;
  }

  /* 错误输入框 */
  .error {
    -web-kit-appearance: none;
    -moz-appearance: none;
    background-color: rgb(252, 225, 225);
    background-image: none;
    border-radius: 4px;
    border: 1px solid #f56c6c;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color .2s;
  }

  .error:focus,
  .error:hover {
    outline: none;
    border-color: #f53d3d;
    background-color: rgb(253, 241, 241);
  }

  /* 无法使用的输入框 */
  .disabled {
    -web-kit-appearance: none;
    -moz-appearance: none;
    background-color: #f5f7fa;
    border-radius: 4px;
    border-color: 1px solid #e4e7ed;
    color: #c0c4cc;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    cursor: not-allowed;
  }

  /* 密码框输入 */
  .password {
    -web-kit-appearance: none;
    -moz-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color .2s;
  }

  .password:focus,
  .password:hover {
    outline: none;
    border-color: #40ff70;
  }

  /* 输入错误提示 */
  p {
    color: red;
    font-weight: 900;
  }

  .datepicker1 {
    position: relative;
    top: 100px;
    right: 0;
    left: 0;
    bottom: 0;
    margin: 60px auto;
  }

  .datepicker2 {
    position: relative;
    top: 100px;
    right: 0;
    left: 0;
    bottom: 0;
    margin: 60px auto;
  }

  .rgform1 {
    position: relative;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    margin: 60px auto;
  }

  .loading-wrapper {
    position: relative;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: #aedff8;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .register-wrapper img {
    position: relative;
    z-index: 1;
  }

  .register-wrapper {
    position: relative;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }

  #register {
    width: 400px;
    margin: 60px auto;
    background-image: url('https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2444703665,363140675&fm=26&gp=0.jpg');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    padding: 20px 40px;
    border-radius: 10px;
    position: relative;
    z-index: 9;
  }

  .title {
    font-size: 26px;
    line-height: 50px;
    font-weight: bold;
    margin: 10px;
    text-align: center;
  }

  .el-form-item {
    text-align: center;
  }

  .login {
    margin-top: 10px;
    font-size: 14px;
    line-height: 22px;
    color: #1ab2ff;
    cursor: pointer;
    text-align: left;
    text-indent: 8px;
    width: 160px;
  }

  .login:hover {
    color: #2c2fd6;
  }

  .code>>>.el-form-item__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .code button {
    margin-left: 20px;
    width: 140px;
    text-align: center;
  }

  .el-button--primary:focus {
    background: #409EFF;
    border-color: #409EFF;
    color: #fff;
  }
</style>