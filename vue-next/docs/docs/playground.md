---
title: Playground - 不存在的页面
editLink: true
---

<ap-breadcrumb>
  <ap-breadcrumb-item>不存在的页面</ap-breadcrumb-item>
</ap-breadcrumb>

# Playground - 不存在的页面
> 你竟然来到了这里？

这里实际上是开发文档过程中用来测试的页面，如果你偶然发现了，请不要笑话我。

## 代码展示框的缩进问题

bash demo

```bash
# a bash demo
git clone -b feature git@github.com:offontime/ApronDesign.git
git checkout -b new-feature
```

typescript demo

```ts
const dev: string = '1234'
/**
 * 一个假的函数
 */
function foo (val = 1) {
  if (Boolean(val)) {
    return val.toString()
  }
  return false
}

const value: any = foo(45) // 执行
```

javascript demo
```js
const demoNumber = '1' // [!code --]
const demoNumber = 1 // [!code ++]
```

javascript demo 2

```js
const foo = function (a) => {
  if (a === 1) {
    return a
  }
  return false
}

foo(1) // true
```