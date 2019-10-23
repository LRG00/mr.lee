<template>
  <div style="padding-top: 80px;max-width: 1140px;margin: 0 auto;">
    <a-row :gutter="4">
      <a-col :span="12" :xs="24" :lg="12">
        <div class="css-box">
          <a-button style="margin: 5px 0">css代码</a-button>
          <a-button @click="run" style="margin: 5px 0">运行</a-button>
          <a-drawer
            placement="left"
            :closable="false"
            :visible="visible"
            @close="onClose"
          >
            <a-list size="small" bordered :dataSource="editcodes">
              <a-list-item slot="renderItem" slot-scope="item" @click="showCode(item)">{{item.title}}</a-list-item>
            </a-list>
          </a-drawer>
          <a-card hoverable>
            <div v-text="cssCode" class="edit-css-box" contenteditable="true"></div>
          </a-card>
        </div>
        <div class="html-box">
          <a-button style="margin: 5px 0">html代码</a-button>
          <a-card hoverable>
            <div v-text="htmlCode" class="edit-html-box" contenteditable="true"></div>
          </a-card>
        </div>
        <div class="js-box">
          <a-button style="margin: 5px 0">js代码</a-button>
          <a-card hoverable>
            <div v-text="jsCode" class="edit-js-box" contenteditable="true"></div>
          </a-card>
        </div>
      </a-col>
      <a-col :span="12" :xs="24" :lg="12">
        <div class="view-box">
          
          <a-button @click="showList" style="margin: 5px 0">示例列表</a-button>
          <a-button style="margin: 5px 0">运行结果</a-button>
          <a-card hoverable>
          	<iframe :srcdoc="`<style>${cssCode}</style>${htmlCode}<script>${jsCode}</script>`" height='700px' width='100%' frameborder="0"></iframe>
          </a-card>
        </div>
      </a-col>
    </a-row>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { FETCH_EDITCODES } from '~/store/actions.type'
export default {
  computed: {
    ...mapGetters(['editcodes']),
  },
  async fetch({ store }) {
    await store.dispatch(FETCH_EDITCODES)
  },
  data() {
    return {
      visible: false,
      cssCode: ``,
      htmlCode: ``,
      jsCode: ``,
    }
  },
  methods: {
    showList () {
      this.visible = true
    },
    onClose() {
      this.visible = false
    },
    showCode (item) {
      this.cssCode = item.cssCode
      this.htmlCode = item.htmlCode
      this.jsCode = item.jsCode
    },
    run () {
      let cssCode = document.getElementsByClassName('edit-css-box')
      this.cssCode = cssCode[0].innerText
      let htmlCode = document.getElementsByClassName('edit-html-box')
      this.htmlCode = htmlCode[0].innerText
      let jsCode = document.getElementsByClassName('edit-js-box')
      this.jsCode = jsCode[0].innerText
      console.log(this.htmlCode)
    }
  },
}
</script>
<style lang="less">
	.edit-css-box,.edit-html-box,.edit-js-box {
		width: 100%;
		min-height: 200px;
		max-height: 200px;
		margin-left: auto;
		margin-right: auto;
		padding: 3px;
		outline: 0;
		font-size: 12px;
		word-wrap: break-word;
		overflow-x: hidden;
		overflow-y: auto;
		-webkit-user-modify: read-write-plaintext-only;
	}
</style>