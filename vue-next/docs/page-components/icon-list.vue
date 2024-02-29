<template>
  <div class="icon-list-group" v-for="group,index of IconGroups" :key="`icon-group-${index}`">
    <h3 class="icon-group-title">{{ group.title }}</h3>
    <p class="icon-group-desc">{{ group.desc }}</p>
    <div class="icon-list-container">
      <div class="icon-item" v-for="item of group.children" :key="item.key">
        <div class="icon-container">
          <ap-icon :name="item.key" />
        </div>
        <div class="icon-item-name">{{ item.name }}</div>
        <div class="icon-key">{{ item.key }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      IconGroups: [
        {
          title: '通用图标',
          desc: '通用图标表示可以应用在各种场景下的图标。',
          children: [
            { name: '星（满）', key: 'star-full' },
            { name: '星（半）', key: 'star-half' },
            { name: '星（空心）', key: 'star-empty' },
            { name: '睁眼', key: 'eye-open' },
            { name: '闭眼', key: 'eye-close' },
            { name: '清空', key: 'clear' },
            { name: '更多', key: 'more' },
            { name: '完成', key: 'finish' },
            { name: '当前', key: 'current' },
            { name: '国际', key: 'global' },
            { name: '菜单', key: 'grid' },
            { name: '菜单', key: 'apps' },
            { name: '菜单', key: 'burger' },
            { name: '设置', key: 'setting' },
            { name: '下载', key: 'download' },
            { name: '上传', key: 'upload' },
            { name: '加载中', key: 'spinning' },
            { name: '加载中', key: 'ringing' },
            { name: '加载中', key: 'loading' },
          ]
        },
        {
          title: '数学',
          desc: '各种数学运算',
          children: [
            { name: '加', key: 'plus' },
            { name: '减', key: 'minus' },
            { name: '乘', key: 'times' },
            { name: '除', key: 'division' },
            { name: '百分号', key: 'percent' },
            { name: '计算', key: 'calculate' },
          ]
        },
        {
          title: '方向',
          desc: '各种方向的指示图标',
          children: [
            { name: '上', key: 'arrow-up' },
            { name: '右', key: 'arrow-right' },
            { name: '下', key: 'arrow-down' },
            { name: '左', key: 'arrow-left' },
            { name: '上', key: 'narrow-up' },
            { name: '右', key: 'narrow-right' },
            { name: '下', key: 'narrow-down' },
            { name: '左', key: 'narrow-left' },
          ]
        },
        {
          title: '提示',
          desc: '用户各种提示场景的图标',
          children: [
            { name: '消息', key: 'info' },
            { name: '成功', key: 'success' },
            { name: '警告', key: 'warning' },
            { name: '错误', key: 'error' },
          ]
        },
        {
          title: '电商',
          desc: '与电商场景相关的图标',
          children: [
            { name: '优惠券', key: 'coupon' },
            { name: '积分/金币', key: 'coin' },
            { name: '购物车', key: 'cart' },
            { name: '钱包', key: 'wallet' },
            { name: '印章', key: 'stamp' },
            { name: '日期', key: 'date' },
            { name: '时间', key: 'time' },
            { name: '计时器', key: 'timer' },
            { name: '标签', key: 'tag' },
            { name: '火', key: 'flame' },
          ]
        },
        {
          title: '社交',
          desc: '社交场景会使用到的图标',
          children: [
            { name: '分享', key: 'share' },
            { name: '旗子', key: 'flag' },
            { name: '消息', key: 'message' },
            { name: '想法', key: 'idea' },
            { name: '鼠标', key: 'mouse' },
            { name: '键盘', key: 'keyboard' },
            { name: '邮件', key: 'mail' },
            { name: '电源开关', key: 'power' },
            { name: '目标', key: 'aim' },
            { name: '奖杯', key: 'trophy' },
            { name: '奖牌', key: 'medal' },
            { name: '徽章', key: 'award' },
            { name: '发现', key: 'discover' },
            { name: '定位', key: 'position' },
            { name: '地图', key: 'map' },
            { name: '钥匙', key: 'key' },
            { name: '锁', key: 'lock' },
            { name: '锁（开）', key: 'lock-open' },
            { name: '二维码', key: 'qr' },
            { name: '支付二维码', key: 'pay-qr' },
            { name: '条形码', key: 'barcode' },
            { name: '扫描', key: 'scan' },
            { name: '门票', key: 'ticket' },
            { name: '复制', key: 'copy' }
          ]
        },
        {
          title: '交通',
          desc: '交通场景或交通工具的指示图标',
          children: [
            { name: '交通信号灯', key: 'traffic-light' },
            { name: '地铁', key: 'subway' },
            { name: '飞机', key: 'aircraft' },
            { name: '无人机', key: 'drone' },
          ]
        },
        {
          title: '后台',
          desc: '用于用户后台面板的一些常见图标，但不代表仅能在后台管理面板使用。',
          children: [
            { name: '创建', key: 'create' },
            { name: '编辑', key: 'edit' },
            { name: '删除', key: 'delete' },
            { name: '回形针', key: 'paperclip' },
            { name: '人', key: 'person' },
            { name: 'USB', key: 'usb' },
            { name: '仪表盘', key: 'dashboard' },
            { name: '仪表盘', key: 'dashpad' },
            { name: '统计', key: 'statistics' },
            { name: '打印', key: 'print' },
          ]
        },
        {
          title: '运动',
          desc: '运动类相关图标',
          children: [
            { name: '篮球', key: 'basketball' },
            { name: '足球', key: 'soccer' },
            { name: '排球', key: 'volleyball' },
            { name: '乒乓球', key: 'ping-pong' },
            { name: '羽毛球', key: 'badminton' },
            { name: '网球', key: 'tennis' },
            { name: '台球', key: 'billiards' },
            { name: '游泳', key: 'swimming' },
            { name: '轮滑', key: 'roller-skating' },
            { name: '滑板', key: 'skating-board' },
            { name: '暴走鞋', key: 'heelys' },
          ]
        },
        {
          title: 'RnD',
          desc: '研发场景使用的图标',
          children: [
            { name: 'Git', key: 'git' },
            { name: '分支', key: 'branch' },
            { name: '提交', key: 'commit' },
            { name: '合并', key: 'merge' },
            { name: 'PR', key: 'pull-request' },
            { name: '层/图层', key: 'layer' },
            { name: '苹果应用商店', key: 'app-store' },
            { name: '谷歌应用商店', key: 'googleplay' },
            { name: '缺陷', key: 'bug' },
            { name: '缓冲', key: 'buffer' },
            { name: '指南', key: 'guide' },
            { name: '数据库', key: 'database' },
            { name: '代码', key: 'code' },
          ]
        },
        {
          title: '硬件',
          desc: '硬件研发场景使用或相关的技术图标。',
          children: [
            { name: '无线', key: 'wifi' },
            { name: '无线（未链接）', key: 'wifi-disconnect' },
            { name: '广播', key: 'boardcast' },
            { name: '服务器', key: 'server' },
            { name: '终端', key: 'terminal' },
            { name: '电池-空', key: 'battery-empty' },
            { name: '电池-低', key: 'battery-low' },
            { name: '电池-中', key: 'battery-mid' },
            { name: '电池-满', key: 'battery-full' },
            { name: '电池-充电', key: 'battery-charging' }
          ]
        },
        {
          title: '品牌',
          desc: '各种品牌的集合',
          children: [
            { name: '苹果', key: 'apple' },
            { name: '安卓', key: 'android' },
            { name: '电报', key: 'telegram' },
            { name: '谷歌', key: 'google' },
            { name: 'Facebook', key: 'facebook' },
            { name: '推特', key: 'twitter' },
            { name: '微博', key: 'weibo' },
            { name: '微信', key: 'wechat' },
            { name: 'QQ', key: 'qq' },
            { name: 'Instagram', key: 'instagram' },
            { name: '抖音', key: 'tik-tok' },
            { name: '小红书', key: 'redbook' },
            { name: 'Hangouts', key: 'hangouts' },
            { name: '小米', key: 'mi' },
            { name: '迪士尼', key: 'disney' },
            { name: 'Skype', key: 'skype' },
            { name: '淘宝', key: 'taobao' },
            { name: '亚马逊', key: 'amazon' },
            { name: '易贝', key: 'ebay' },
            { name: '达芬奇', key: 'davinci-latex' },
            { name: 'FunPlus', key: 'funplus' },
            { name: 'Airbnb', key: 'airbnb' },
            { name: '比特币', key: 'bitcoin' },
            { name: 'CodeOpen', key: 'codeopen' },
            { name: 'Behance', key: 'behance' },
            { name: 'Pinterest', key: 'pinterest' },
            { name: 'Steam', key: 'steam' },
            { name: 'PlayStation', key: 'playstation' },
            { name: '任天堂 Switch', key: 'nintendo-switch' },
            { name: 'Confluence', key: 'confluence' },
            { name: 'YouTube', key: 'youtube' },
            { name: 'ApronDesign', key: 'apron-design' },
            { name: '飞书', key: 'lark' },
            { name: 'Slack', key: 'slack' },
            { name: 'Figma', key: 'figma' },
            { name: 'Chrome', key: 'chrome' },
            { name: 'Safari', key: 'safari' },
            { name: 'Github', key: 'github' },
            { name: 'Taro', key: 'taro' },
            { name: 'Vue', key: 'vue' },
            { name: 'React', key: 'react' },
            { name: '达芬奇｜面具', key: 'davinci-mask' },
          ]
        },
        {
          title: '媒体',
          desc: '与媒体播放相关的图标',
          children: [
            { name: '播放', key: 'play' },
            { name: '暂停', key: 'pause' },
            { name: '上一曲', key: 'prev' },
            { name: '下一曲', key: 'next' },
            { name: '停止', key: 'stop' },
            { name: '全屏', key: 'fullscreen' },
            { name: '音量-0', key: 'volume-0' },
            { name: '音量-1', key: 'volume-1' },
            { name: '音量-2', key: 'volume-2' },
            { name: '音量-静音', key: 'volume-mute' },
            { name: '音量-', key: 'volume-decrease' },
            { name: '音量+', key: 'volume-increase' },
            { name: '视频', key: 'video' },
            { name: '音乐', key: 'music' },
            { name: '音频', key: 'audio' },
            { name: '麦克风', key: 'mic' },
          ]
        },
        {
          title: '支付',
          desc: '与全球支付相关的各种图标',
          children: [
            { name: '微信支付', key: 'wechatpay' },
            { name: '支付宝', key: 'alipay' },
            { name: 'PayPal', key: 'paypal' },
            { name: '中国银联', key: 'union-pay' },
            { name: '美国运通', key: 'american-express' },
            { name: '万事达', key: 'mastercard' },
            { name: 'VISA', key: 'visa' },
            { name: 'JCB', key: 'jcb' },
            { name: 'Apple Pay', key: 'apple-pay' },
            { name: 'Google Pay', key: 'google-pay' },
          ]
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
  .icon-list-group {
    margin-top: 40px;
    .icon-group-title {
      color: var(--color-heading);
    }
    .icon-group-desc {
      color: var(--color-icon);
    }
    .icon-list-container {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      border-top: 1px solid var(--color-border);
      border-left: 1px solid var(--color-border);
      .icon-item {
        width: calc(100% / 6);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 200px;
        border-right: 1px solid var(--color-border);
        border-bottom: 1px solid var(--color-border);
        transition: all, 500ms;
        .icon-container {
          width: 40px;
          height: 40px;
          font-size: 30px;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          color: var(--color-icon);
          transition: all, 500ms;
        }
        .icon-item-name {
          margin-top: 20px;
        }
        &:hover {
          background: var(--color-background-hover);
          .icon-container {
            font-size: 36px;
            color: var(--color-primary);
          }
        }
      }
    }
  }
</style>