---
title: 轮播 Carousel - 组件
editLink: true
---

<ap-breadcrumb>
  <ap-breadcrumb-item>组件</ap-breadcrumb-item>
  <ap-breadcrumb-item>数据展示</ap-breadcrumb-item>
</ap-breadcrumb>

# 轮播 Carousel
> 展示多张图片、视频，用户可以手动播放或自动切换。

此组件集成的是 Swiper11，并只暴露了一部份功能使用。

## 基本用法
Carousel 默认沾满整个父容器大小。

:::preview
demo-preview=../demos/carousel/basic-usage.vue
:::

### 设置指示器
给组件添加 `indicator` 属性改变指示器显示，可选的值有：`dot`（点）、`dash`（短线），默认为不显示指示器。
:::preview
demo-preview=../demos/carousel/indicator.vue
:::

### 滚动方向
通过 `direction` 属性为组件配置滚动方向，可选的值有：`horizontal`（水平滚动）、`horizontal`（垂直滚动），默认为 `horizontal`。
:::preview
demo-preview=../demos/carousel/direction.vue
:::

### 自动播放
通过 `autoplay` 属性为组件配置自动滚动。同时可以配置 `delay` 时间设置停留时间。默认是 3 秒。
:::preview
demo-preview=../demos/carousel/autoplay.vue
:::

### 循环
通过 `loop` 属性为组件配置为循环。
:::preview
demo-preview=../demos/carousel/loop.vue
:::

### 动效
通过配置 `effect` 属性为组件配置切换动效，可选的值有：`fade`、 `cube`，默认不设置时即表示滑动。
:::preview
demo-preview=../demos/carousel/effect.vue
:::

## Api
### `<Carousel>` Props
| 参数 | 说明 | 类型 | 可选值 | 默认值 | 备注 |
| :----- | :----- | :----- | :----- | :----- | :----- |
| data | 渲染数据 | Array[Object] | - | [] |  |
| indicator | 指示器 | String/Boolean | `dot`, `dash` | false | |
| direction | 滚动方向 | String | `horizontal` / `vertical` | `horizontal` |  |
| speed | 切换时的滚动速度 | Number | - | 500 | 单位：ms |
| autoplay | 自动切换 | Boolean | `true` / `false` | false | |
| delay | 自动切换时的停留时间 | Number | - | 3000 | 单位：ms，与 autoplay 一起使用时生效 |
| loop | 循环 | Boolean | - | false | 播放到结尾时，下一张是第一张 |
| effect | 动效 | String/Boolean | `fade` / `cube` | false | 不添加动效时，默认为滑动效果 |

### `data` Props
| 参数 | 说明 | 类型 | 可选值 | 默认值 | 备注 |
| :----- | :----- | :----- | :----- | :----- | :----- |
| backImgUrl | 默认占满整个容器的图片 | String | - | - | 填入 URL |