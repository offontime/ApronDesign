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
        <div class="version">pre-fix-bugs</div>
        <div class="update-date">before version 1.0</div>
      </div>
      <div class="change-log">
        <h3>🐛 问题</h3>
        <ul>
          <li>按钮组件：去除链接按钮类型，统一使用链接组件</li>
          <li>开关组件：修复 disabled 状态</li>
          <li>按钮/圆按钮/开关/链接组件：修复 loading 状态</li>
        </ul>
      </div>
    </div>
  </ap-timeline-item>
  <ap-timeline-item>
    <div class="flex-container">
      <div class="timeline-dist">
        <div class="version">0.0.4-develop</div>
        <div class="update-date">2024-03-05</div>
      </div>
      <div class="change-log">
        <h3>🙋‍♂️ 组件用法变更</h3>
        <ul>
          <li>数据展示组件：二维码 QRcode，更新扩展包 @code-apron/vue-next version 1.1.0</li>
        </ul>
        <h3>🆕 新增功能</h3>
        <ul>
          <li>数据展示组件：二维码 Pdf417，采用额外安装扩展包 @code-apron/vue-next version 1.1.0</li>
          <li>二维码 Pdf417 更新进文档</li>
        </ul>
      </div>
    </div>
  </ap-timeline-item>
  <ap-timeline-item>
    <div class="flex-container">
      <div class="timeline-dist">
        <div class="version">0.0.3-develop</div>
        <div class="update-date">2024-02-29</div>
      </div>
      <div class="change-log">
        <h3>🆕 新增功能</h3>
        <ul>
          <li>通用组件：图标 Icon，采用额外安装扩展包 @icon-apron/vue-next version 2.0.0-develop</li>
          <li>图标列表更新进文档。</li>
        </ul>
      </div>
    </div>
  </ap-timeline-item>
  <ap-timeline-item>
    <div class="flex-container">
      <div class="timeline-dist">
        <div class="version">0.0.2-develop</div>
        <div class="update-date">2024-02-28</div>
      </div>
      <div class="change-log">
        <h3>🆕 新增功能</h3>
        <ul>
          <li>数据展示组件：二维码 QRcode，采用额外安装扩展包 @code-apron/vue-next version 1.0.4</li>
        </ul>
      </div>
    </div>
  </ap-timeline-item>
  <ap-timeline-item>
    <div class="flex-container">
      <div class="timeline-dist">
        <div class="version">0.0.1-develop</div>
        <div class="update-date">2024-02-26</div>
      </div>
      <div class="change-log">
        <h3>🆕 新增功能</h3>
        <ul>
          <li>通用组件：圆按钮</li>
          <li>数据组件：时间线（只有基础功能）</li>
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
