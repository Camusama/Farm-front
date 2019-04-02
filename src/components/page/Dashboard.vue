<template>
  <div>
    <el-row :gutter="20">
      <el-col :lg='8'
              :sm='24'
              style="margin-bottom:20px;">
        <el-card shadow="hover"
                 class="mgb20"
                 style="height:252px;">
          <div class="user-info">
            <img src="../../assets/img/biocide.png"
                 class="user-avator"
                 alt="">
            <div class="user-info-cont">
              <div class="user-info-name">欢迎使用农技百科</div>

            </div>
          </div>
          <div class="user-info-list">访问时间：<span>{{datetime}}</span></div>
          <div class="user-info-list">正在使用：<span>农技百科</span></div>
        </el-card>
        <el-card shadow="hover"
                 style="height:252px;">
          <div slot="header"
               class="clearfix">
            <span>使用情况</span>
          </div>
          作物相关
          <el-progress :percentage="71.3"
                       color="#42b983"></el-progress>
          农事相关
          <el-progress :percentage="24.1"
                       color="#f1e05a"></el-progress>
          测土配方
          <el-progress :percentage="3.7"></el-progress>

        </el-card>
      </el-col>
      <el-col :lg='16'
              :sm='24'>
        <el-row :gutter="20"
                class="mgb20">
          <el-col :lg='8'
                  :sm='24'>
            <el-card shadow="hover"
                     :body-style="{padding: '0px'}">
              <div class="grid-content grid-con-1">
                <i class="el-icon-lx-people grid-con-icon"></i>
                <div class="grid-cont-right">
                  <div class="grid-num">123</div>
                  <div>用户访问量</div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :lg='8'
                  :sm='24'>
            <el-card shadow="hover"
                     :body-style="{padding: '0px'}">
              <div class="grid-content grid-con-2">
                <i class="el-icon-lx-notice grid-con-icon"></i>
                <div class="grid-cont-right">
                  <div class="grid-num">55</div>
                  <div>系统日志

                  </div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :lg='8'
                  :sm='24'>
            <el-card shadow="hover"
                     :body-style="{padding: '0px'}">
              <div class="grid-content grid-con-3">
                <i class="el-icon-lx-goods grid-con-icon"></i>
                <div class="grid-cont-right">
                  <div class="grid-num">145</div>
                  <div>信息数量</div>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <el-card shadow="hover">
          <div slot="header"
               class="clearfix">
            <span>功能列表</span>
          </div>
          <el-row :gutter="20">
            <el-col :lg='{span:24}'
                    :sm='24'>
              <router-link to="formula">
                <el-card class='red-name'
                         style="background:#07c4a8">
                  <div style="padding: 6px;text-align:center;">
                    <span>测土配方</span>
                  </div>
                </el-card>
              </router-link>

            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :lg='5'
                    :sm='12'>
              <router-link to="seed">
                <el-card class='blue-name'>
                  <div style="padding: 6px; text-align:center">
                    <span>良种推荐</span>
                  </div>
                </el-card>
              </router-link>

            </el-col>
            <el-col :lg='7'
                    :sm='12'>
              <router-link to="pest">
                <el-card class='red-name'>
                  <div style="padding: 6px;text-align:center">
                    <span>病虫诊断</span>
                  </div>
                </el-card>
              </router-link>

            </el-col>
            <el-col :lg='5'
                    :sm='12'>
              <router-link to="grow">
                <el-card class='yellow-name'>
                  <div style="padding: 6px;text-align:center">
                    <span>作物栽培</span>
                  </div>
                </el-card>
              </router-link>
            </el-col>
            <el-col :lg='7'
                    :sm='12'>
              <router-link to="month">
                <el-card class='green-name'>
                  <div style="padding: 6px;text-align:center">
                    <span>每月农事</span>
                  </div>
                </el-card>
              </router-link>

            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :lg='6'
                    :sm='12'>
              <router-link to="fertilizer">
                <el-card class='yellow-name'>
                  <div style="padding: 6px;text-align:center">
                    <span>用肥指南</span>
                  </div>
                </el-card>
              </router-link>

            </el-col>
            <el-col :lg='6'
                    :sm='12'>
              <router-link to="biocide">
                <el-card class='blue-name'>
                  <div style="padding: 6px;text-align:center">
                    <span>常用农药</span>
                  </div>
                </el-card>
              </router-link>

            </el-col>
            <el-col :lg='6'
                    :sm='12'>
              <router-link to="weather">
                <el-card class='green-name'>
                  <div style="padding: 6px;text-align:center">
                    <span>天气灾害</span>
                  </div>
                </el-card>
              </router-link>

            </el-col>
            <el-col :lg='6'
                    :sm='12'>
              <router-link to="safety">
                <el-card class='red-name'>
                  <div style="padding: 6px;text-align:center">
                    <span>食品安全</span>
                  </div>
                </el-card>
              </router-link>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Schart from 'vue-schart';
import bus from '../common/bus';
export default {
  name: 'dashboard',
  data () {
    return {
      datetime: '',
      data: [{
        name: '2018/09/04',
        value: 1083
      },
      {
        name: '2018/09/05',
        value: 941
      },
      {
        name: '2018/09/06',
        value: 1139
      },
      {
        name: '2018/09/07',
        value: 816
      },
      {
        name: '2018/09/08',
        value: 327
      },
      {
        name: '2018/09/09',
        value: 228
      },
      {
        name: '2018/09/10',
        value: 1065
      }
      ],
      options: {
        title: '最近七天每天的用户访问量',
        showValue: false,
        fillColor: 'rgb(45, 140, 240)',
        bottomPadding: 30,
        topPadding: 30
      },
      options2: {
        title: '最近七天用户访问趋势',
        fillColor: '#FC6FA1',
        axisColor: '#008ACD',
        contentColor: '#EEEEEE',
        bgColor: '#F5F8FD',
        bottomPadding: 30,
        topPadding: 30
      }
    }
  },
  components: {
    Schart
  },
  computed: {
    role () {
      return this.name === 'admin' ? '超级管理员' : '普通用户';
    }
  },
  created () {
    this.changeDate();
  },
  mounted () {
    let nowDate = new Date();
    let year = nowDate.getFullYear();
    let month = nowDate.getMonth() + 1;
    let day = nowDate.getDate();
    this.datetime = `${year}-${month}-${day}`;
  },
  methods: {
    changeDate () {
      const now = new Date().getTime();
      this.data.forEach((item, index) => {
        const date = new Date(now - (6 - index) * 86400000);
        item.name = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
      })
    },

  }
}

</script>


<style scoped>
.el-row {
  margin-bottom: 20px;
}

.grid-content {
  display: flex;
  align-items: center;
  height: 100px;
}

.grid-cont-right {
  flex: 1;
  text-align: center;
  font-size: 14px;
  color: #999;
}

.grid-num {
  font-size: 30px;
  font-weight: bold;
}

.grid-con-icon {
  font-size: 50px;
  width: 100px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  color: #fff;
}

.grid-con-1 .grid-con-icon {
  background: rgb(45, 140, 240);
}

.grid-con-1 .grid-num {
  color: rgb(45, 140, 240);
}

.grid-con-2 .grid-con-icon {
  background: rgb(100, 213, 114);
}

.grid-con-2 .grid-num {
  color: rgb(45, 140, 240);
}

.grid-con-3 .grid-con-icon {
  background: rgb(242, 94, 67);
}

.grid-con-3 .grid-num {
  color: rgb(242, 94, 67);
}
.red-name {
  background: rgb(242, 94, 67);
  color: white;
  border-radius: 20px;
}
.blue-name {
  background: rgb(45, 140, 240);
  color: white;
  border-radius: 20px;
}
.green-name {
  background: rgb(100, 213, 114);
  color: white;
  border-radius: 20px;
}
.yellow-name {
  background: rgb(241, 224, 90);
  color: white;
  border-radius: 20px;
}
.user-info {
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 2px solid #ccc;
  margin-bottom: 20px;
}

.user-avator {
  width: 120px;
  height: 120px;
  border-radius: 50%;
}

.user-info-cont {
  padding-left: 50px;
  flex: 1;
  font-size: 14px;
  color: #999;
}

.user-info-cont div:first-child {
  font-size: 30px;
  color: #222;
}

.user-info-list {
  font-size: 14px;
  color: #999;
  line-height: 25px;
}

.user-info-list span {
  margin-left: 70px;
}

.mgb20 {
  margin-bottom: 20px;
}

.todo-item {
  font-size: 14px;
}

.todo-item-del {
  text-decoration: line-through;
  color: #999;
}

.schart {
  width: 100%;
  height: 300px;
}
</style>
