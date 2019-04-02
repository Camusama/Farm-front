<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-lx-male"></i> 病虫诊断</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
      <el-row :gutter="26"
              v-for="(item,index) in crops"
              :key="index">
        <el-col :md=' {span: 5, push: 2}'
                :sm='12'
                v-for="crop in item"
                style="margin-bottom:20px"
                :key="crop.id">
          <el-card @click.native='clickCrop(crop.name)'
                   shadow="hover"
                   :body-style="{ padding: '0px' }">
            <img :src="CDN +crop.img"
                 class="cropimg">
            <div style="padding:5px 14px 10px;">
              <span style="font-size: 18px;   white-space: nowrap; ">{{crop.name}}病害</span>
              <br>
              <div class="bottom clearfix">

                <el-button type="text"
                           class="button">查看详情</el-button>
              </div>
            </div>

          </el-card>
        </el-col>
      </el-row>
    </div>
    <el-dialog :visible.sync="itemsVisible"
               :title="clickCropname">
      <el-row :gutter="20"
              v-for="(temp,index) in items"
              :key='index'>
        <div v-if="temp">
          <el-col :lg='6'
                  :sm='12'
                  v-for="item in temp"
                  style="margin-bottom:20px"
                  :key="item.id">
            <el-card @click.native='clickItem(item.id)'
                     :body-style="{ padding: '0px' }">
              <img :src="CDN +item.img"
                   class="cropimg">
              <div style="padding:3px 14px 8px;">
                <span class='namespan'>{{item.name}}</span>
                <div class="bottom clearfix">
                  <el-button type="text"
                             class="button">查看详情</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </div>
      </el-row>
      <div slot="footer"
           class="dialog-footer">

        <el-button type="primary"
                   @click="itemsVisible = false">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog :visible.sync="detailVisible"
               title="病害信息">
      <div style="min-height:60vh">
        <h2>
          {{details.name}}
        </h2>
        <el-tabs v-model="detailActive">
          <el-tab-pane label="基本介绍"
                       name="first">
            <pre>{{details.summary}}</pre>
          </el-tab-pane>
          <el-tab-pane label="发病特点"
                       name="second">
            <pre>{{details.feature}}</pre>
          </el-tab-pane>
          <el-tab-pane label="防治方法"
                       name="third">
            <pre>{{details.keypoint}}</pre>
          </el-tab-pane>
        </el-tabs>
      </div>

      <div slot="footer"
           class="dialog-footer">

        <el-button type="primary"
                   @click="detailVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { getClass, getData, findOne } from '@/api/biocide'
import { filterData, filterArr } from '@/utils/filter'
export default {
  data () {
    return {
      CDN: process.env.VUE_APP_CDN,
      activeName: '',
      crops: [],
      clickCropname: '',
      itemsVisible: false,
      items: [],
      detailVisible: false,
      details: [],
      detailActive: "first"
    };
  },
  methods: {

    clickCrop (cropname) {
      getData(cropname).then(res => {
        this.itemsVisible = true
        this.items = filterArr(res.data, 4)
        this.clickCropname = cropname
      })
    },
    clickItem (id) {
      findOne(id).then(res => {
        this.itemsVisible = false
        this.details = res.data
        this.detailVisible = true
      })
    }
  },
  created () {
    getClass().then(res => {
      this.crops = filterArr(res.data, 4)
    })
  }
}
</script>
<style scoped>
.namespan {
  font-size: 18px;
  white-space: nowrap;
  display: block;
  text-overflow: ellipsis;
  overflow: hidden;
}
.button {
  padding: 0;
  float: right;
}

.image {
  width: 40%;
  border-radius: 50%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
.el-col:first-child {
  margin-bottom: 0 !important;
}

.cropimg {
  vertical-align: absmiddle;
  width: 100%;
  height: auto;
  border-radius: 3px;
}
pre {
  white-space: pre-wrap; /* css3.0 */
  white-space: -moz-pre-wrap; /* Firefox */
  white-space: -pre-wrap; /* Opera 4-6 */
  white-space: -o-pre-wrap; /* Opera 7 */
  word-wrap: break-word; /* Internet Explorer 5.5+ */
}
</style>