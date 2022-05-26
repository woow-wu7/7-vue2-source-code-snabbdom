import h from "./handwrite/_h.js";
import patch from "./handwrite/_patch.js";

// h函数可以嵌套
const vnode = h("ul", {}, '测试');

console.log("vnode", vnode);

const root = document.getElementById("root");

patch(root, vnode);
