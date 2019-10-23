<!--
 * @Author: liruigang
 * @Date: 2019-10-21 20:05:03
 * @LastEditors: liruigang
 * @LastEditTime: 2019-10-23 00:18:59
 * @UI: 
 -->
<template>
  <div class="container">
    <div style="height:300px;max-width:1140px">
      <Banner />
    </div>
    <Share />
    <ScrollToTop />
    <div>
      <div>
        <a-row :gutter="16">
          <a-col :span="18" :xs="24" :lg="18">
            <div class="list-box">
              <a-card hoverable>
                <ArticleItem :articles="articles" />
              </a-card>
            </div>
          </a-col>
          <a-col :span="6" :xs="24" :lg="6">
            <div class="tags-box">
              <a-card hoverable>
                <div slot="cover" style="font-size: 16px;padding:10px">
                  <a-icon type="home" /> 标签
                </div>
                <a-tag
                  v-for="(tag, idx) in tags"
                  :key="idx"
                  style="font-size: 14px;margin:5px"
                  >{{ tag }}</a-tag
                >
              </a-card>
            </div>
          </a-col>
        </a-row>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ArticleItem from '~/components/ArticleItem'
import Banner from '~/components/Banner'
import Share from '~/components/Share'
import ScrollToTop from '~/components/ScrollToTop'
import { FETCH_TAGS, FETCH_ARTICLES } from '~/store/actions.type'
export default {
  components: {
    ArticleItem,
    Banner,
    Share,
    ScrollToTop
  },
  computed: {
    ...mapGetters(['articles', 'tags']),
    tag() {
      return this.$route.params.tag
    }
  },
  async fetch({ store, params }) {
    await store.dispatch(FETCH_TAGS)
    await store.dispatch(FETCH_ARTICLES)
  }
}
</script>

<style lang="less">
.container {
  padding-top: 4rem;
  max-width: 1140px;
  margin: 0 auto;
  .sidebar {
    padding: 5px 10px 10px;
    background: #f3f3f3;
    border-radius: 4px;
  }
}
</style>
