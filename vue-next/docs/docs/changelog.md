---
title: 更新日志 - 开发指南
editLink: true
---

<ap-breadcrumb>
  <ap-breadcrumb-item>开发指南</ap-breadcrumb-item>
</ap-breadcrumb>

# 更新日志

> 这里会有详细的发版记录，版本号严格遵循 Semver 规范（早期版本未遵循此规范）。

<style lang="less" scoped>
.flex-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  .timeline-dist {
    width: 300px;
    .version {
      font-size: 14px;
      color: var(--color-primary);
    }
    .update-date {
      font-size: 12px;
      color: var(--color-icon);
    }
  }
  .change-log {
    width: calc(100% - 300px - 40px);
    ul {
      margin-left: 0;
    }
  }
}
</style>
<ap-timeline>
<ap-timeline-item>
    <div class="flex-container">
      <div class="timeline-dist">
        <div class="version">0.0.1-develop</div>
        <div class="update-date">2024-02-26</div>
      </div>
      <div class="change-log">
        <h3>🐛 问题修复</h3>
        <ul>
          <li>按钮组件：去除链接按钮类型，统一使用链接组件</li>
          <li>开关组件：修复 disabled 状态</li>
          <li>按钮/开关/链接组件：修复 loading 状态</li>
        </ul>
        <h3>🆕 新增功能</h3>
        <ul>
          <li>通用组件：圆按钮</li>
          <li>通用组件：图标，使用独立的组件库</li>
        </ul>
      </div>
    </div>
  </ap-timeline-item>
  <ap-timeline-item>
    <div class="flex-container">
      <div class="timeline-dist">
        <div class="version">0.0.0-develop</div>
        <div class="update-date">2024-02-25</div>
      </div>
      <div class="change-log">
        <h3>🆕 新增功能</h3>
        <ul>
          <li>通用组件：按钮、链接</li>
          <li>布局组件：分割线、间距</li>
          <li>表单组件：开关</li>
          <li>导航组件：面包屑</li>
        </ul>
      </div>
    </div>
  </ap-timeline-item>
</ap-timeline>
