import "./chunk-BUSYA2B4.js";

// node_modules/@media-apron/vue-next/src/components/index.ts
import Video from "/Users/mitkimicn/Documents/develop/ApronDesign/vue-next/node_modules/@media-apron/vue-next/src/components/video.vue";
import Audio from "/Users/mitkimicn/Documents/develop/ApronDesign/vue-next/node_modules/@media-apron/vue-next/src/components/audio.vue";
var components = [
  Audio,
  Video
];
var install = function(Vue) {
  if (install.installed) {
    return false;
  }
  components.map((component) => Vue.component(component.name, component));
};
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
var components_default = {
  install,
  Audio,
  Video
};
export {
  components_default as default
};
//# sourceMappingURL=@media-apron_vue-next_src_components_index.js.map
