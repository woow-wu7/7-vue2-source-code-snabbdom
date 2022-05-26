import h from "./handwrite/_h.js";
import patch from "./handwrite/_patch.js";

// h函数可以嵌套
const vnode = h("ul", {}, [
  h('li', {}, '1'),
  h('li', {}, '2')
]);

// const vnode = h("ul", {}, 'string');

console.log("vnode", vnode);

const root = document.getElementById("root");

patch(root, vnode);
