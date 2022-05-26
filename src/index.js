import {
  init,
  classModule,
  propsModule,
  styleModule,
  eventListenersModule,
  h,
} from "snabbdom";

const patch = init([
  classModule,
  propsModule,
  styleModule,
  eventListenersModule,
]);

const noop = () => {};

const root = document.getElementById("root");

// h函数可以嵌套
const vnode = h("ul", [
  h(
    "li",
    {
      props: {
        style: "color: blue",
      },
    },
    "list1"
  ),
  h("li", "list2"),
]);

patch(root, vnode);
