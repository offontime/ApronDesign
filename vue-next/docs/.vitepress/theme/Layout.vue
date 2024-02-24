<script setup lang="ts">
import { useData, useRoute, useRouter } from 'vitepress'
import { ref, watch } from 'vue'
import { nav } from './nav'
import PageHeader from './components/PageHeader/index.vue'
import PageFooter from './components/PageFooter/index.vue'

// https://vitepress.dev/reference/runtime-api#usedata
const { site, frontmatter } = useData()

const fullScreen = ref(false)
const handleFullScreenToggle = function () {
  fullScreen.value = !fullScreen.value
}

const NavGroups = nav
const route = useRoute()
const path = ref('/docs/start')
path.value = route.path // init
watch(
  () => route.path,
  (newVal) => {
    path.value = newVal
  },
  { immediate: true }
)
</script>

<template>
  <PageHeader isBackgroundedHeader />
  <div v-if="frontmatter.home">
    <h1>{{ site.title }}</h1>
    <p>{{ site.description }}</p>
    <ul>
      <li><a href="/docs/start">start from here</a></li>
    </ul>
  </div>
  <div v-else class="docs-layout">
    <div :class="['nav', fullScreen ? 'nav-fullscreen' : '']">
      <div class="fullscreen-toggle" @click="handleFullScreenToggle">
        <img v-if="fullScreen" src="./assets/svg/narrow-right.svg" />
        <img v-else src="./assets/svg/narrow-left.svg" />
      </div>
      <div class="aside-container">
        <div class="aside-nav-container">
          <div class="nav-group" v-for="groupItem in NavGroups" :key="groupItem.key">
            <div class="nav-group-title">{{ groupItem.title }}</div>
            <div class="nav-group-container">
              <div v-for="item in groupItem.children" :key="item.key">
                <a v-if="item.href" :href="item.href" style="text-decoration: none;">
                  <div :class="['nav-item', `${item.href}.html` === path ? 'nav-item-active' : '']">{{ item.title }}</div>
                </a>
                <div v-else class="nav-sub-group-title">{{ item.title }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div :class="['content', fullScreen ? 'content-fullscreen' : '']">
      <div class="main-document-container">
        <Content />
      </div>
    </div>
  </div>
  <PageFooter />
</template>

<style src="./main.less" lang="less" scoped></style>