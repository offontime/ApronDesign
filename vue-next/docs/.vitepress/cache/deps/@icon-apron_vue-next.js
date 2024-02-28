import {
  createElementBlock,
  openBlock
} from "./chunk-YWB45ONC.js";
import {
  normalizeClass
} from "./chunk-5HJDXCPR.js";
import "./chunk-Y2F7D3TJ.js";

// node_modules/@icon-apron/vue-next/lib/@icon-apron/vue-next.js
var p = (n, o) => {
  const c = n.__vccOpts || n;
  for (const [t, e] of o)
    c[t] = e;
  return c;
};
var l = Object.assign({
  name: "ApIcon"
}, {
  __name: "icon",
  props: {
    name: {
      type: String,
      default: "icon-apron"
    }
  },
  setup(n) {
    return (o, c) => (openBlock(), createElementBlock("span", {
      class: normalizeClass(["icon-apron", `ap-${n.name}`])
    }, null, 2));
  }
});
var _ = p(l, [["__scopeId", "data-v-7de77c60"]]);
var m = [_];
var f = {
  install(n) {
    m.forEach((o) => {
      n.component(o.name, o);
    });
  }
};
export {
  _ as Icon,
  f as default
};
//# sourceMappingURL=@icon-apron_vue-next.js.map
