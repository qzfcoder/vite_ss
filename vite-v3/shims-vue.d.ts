import type { HTMLAttributes, SVGAttributes } from "@vue/runtime-dom";
import type { DefineComponent, VNode, ComponentPublicInstance } from "vue";

declare global {
  namespace JSX {
    interface Element extends VNode {}
    interface ElementClass extends ComponentPublicInstance {}
    interface IntrinsicElements extends VueJSX.IntrinsicElements {}
  }
}
