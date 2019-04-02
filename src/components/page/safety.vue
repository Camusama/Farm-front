<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-lx-favor"></i> 食品安全</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
      <el-collapse v-model="activeName"
                   accordion>
        <div v-for="(item,index) in data"
             :key="index">
          <el-collapse-item :title="item.class"
                            :name="index">
            <el-row :gutter="20">
              <el-col :lg='4'
                      :sm='12'
                      style=" margin-bottom:20px;"
                      v-for="pest in item.pests"
                      :key="pest.id">
                <el-card @click.native="handleClick(pest.id)">
                  <img src="@/assets/img/safety.png"
                       class="image">
                  <div style="padding: 14px;">
                    <span class='namespan'>{{pest.name}}</span>
                    <div class="bottom clearfix">

                      <el-button type="text"
                                 class="button">查看详情</el-button>
                    </div>
                  </div>
                </el-card>
              </el-col>
            </el-row>

          </el-collapse-item>
        </div>
      </el-collapse>
    </div>
    <el-dialog :visible.sync="detailVisible"
               title="安全信息">
      <div style="min-height:60vh">
        <h2>
          {{details.safety}}
        </h2>
        <el-tabs v-model="detailActive">
          <el-tab-pane label="安全知识一"
                       name="first">
            <pre>{{details.point1}}</pre>
          </el-tab-pane>
          <el-tab-pane label="安全知识二"
                       name="second">
            <pre>{{details.point2}}</pre>
          </el-tab-pane>
          <el-tab-pane label="安全知识三"
                       name="third">
            <pre>{{details.point3}}</pre>
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
import { getData, findOne } from '@/api/safety'
import { filterData } from '@/utils/filter'
export default {
  data () {
    return {
      activeName: 0,
      data: [],
      detailVisible: false,
      details: [],
      detailActive: "first"
    };
  },
  methods: {
    handleClick (id) {
      this.detailVisible = true
      findOne(id).then(res => {
        this.details = res.data
      })
    }
  },
  created () {
    getData().then(res => {
      this.data = filterData(res.data)
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
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
pre {
  white-space: pre-wrap; /* css3.0 */
  white-space: -moz-pre-wrap; /* Firefox */
  white-space: -pre-wrap; /* Opera 4-6 */
  white-space: -o-pre-wrap; /* Opera 7 */
  word-wrap: break-word; /* Internet Explorer 5.5+ */
}
</style>