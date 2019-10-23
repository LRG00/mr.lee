<!--
 * @Author: liruigang
 * @Date: 2019-10-22 19:05:12
 * @LastEditors: liruigang
 * @LastEditTime: 2019-10-22 20:16:43
 * @UI: 
 -->
<template>
  <div>
    <a-card :bordered="false">
      <a-list
        size="large"
        row-key="id"
        :loading="loading"
        item-layout="vertical"
        :data-source="articles"
      >
        <a-list-item :key="item.id" slot="renderItem" slot-scope="item">
          <template slot="actions">
            <icon-text type="star-o" :text="item.id" />
            <icon-text type="like-o" :text="item.id" />
            <icon-text type="message" :text="item.id" />
          </template>
          <a-list-item-meta>
            <a slot="title" href="https://vue.ant.design/">{{ item.title }}</a>
            <template slot="description">
              <span>
                <template v-if="item.tagList.length">
                  <a-tag v-for="(tag, idx) in item.tagList" :key="idx">{{
                    tag
                  }}</a-tag>
                </template>
                <template v-else>
                  <a-tag>暂无标签</a-tag>
                </template>
              </span>
            </template>
          </a-list-item-meta>
          <ArticleListContent
            :description="item.description"
            :owner="item.author.username"
            :avatar="item.author.image"
            :update-at="item.updated"
          />
        </a-list-item>
        <div
          v-if="articles.length > 0"
          slot="footer"
          style="text-align: center; margin-top: 16px;"
        >
          <!-- <a-button @click="loadMore" :loading="loadingMore">加载更多</a-button> -->
        </div>
      </a-list>
    </a-card>
    <!-- <div
      v-for="(article, index) in articles"
      :key="index"
      class="article-preview"
    >
      <div class="article-meta" ispreview>
        <a href="#/@leeruigan/" class>
          <img
            src="https://pic1.zhimg.com/v2-fda399250493e674f2152c581490d6eb_1200x500.jpg"
          />
        </a>
        <div class="info">
          <a href="#/@leeruigan/" class="author">leeruigan</a>
          <span class="date">{{ article.updated }}</span>
        </div>
      </div>
      <a
        href="#/articles/converting-circular-structure-to-json-dzf001"
        class="preview-link"
      >
        <h1>{{ article.title }}</h1>
        <p>{{ article.description }}</p>
        <span>阅读更多...</span>
        <ul class="tag-list">
          <a-tag
            v-for="(tag, idx) in article.tagList"
            :key="idx"
            color="#87d068"
            >{{ tag }}</a-tag
          >
        </ul>
      </a>
    </div>-->
  </div>
</template>
<script>
import IconText from './IconText'
import ArticleListContent from './ArticleListContent'
export default {
  components: {
    IconText,
    ArticleListContent
  },
  props: {
    articles: {
      // type: 'Array'
    }
  },
  data() {
    return {
      loading: false,
      loadingMore: false,
      data: []
    }
  }
}
</script>
<style lang="less" scoped>
.ant-pro-components-tag-select {
  /deep/ .ant-pro-tag-select .ant-tag {
    margin-right: 24px;
    padding: 0 8px;
    font-size: 14px;
  }
}

.list-articles-trigger {
  margin-left: 12px;
}
</style>
