import h from "./handwrite/_h.js";
import patch from "./handwrite/_patch.js";

// h函数可以嵌套
const vnode = h("ul", {}, [
  h("li", { key: 1 }, "1"),
  h("li", { key: 2 }, "2"),
  h("li", { key: 3 }, "3"),
]);
const vnode2 = h("ul", {}, [
  h("li", { key: 3 }, "3"),
  h("li", { key: 1 }, "1"),
  h("li", { key: 2 }, "2"),
]);
// const vnode = h("ul", {}, 'string');
console.log("vnode", vnode);

// 1
// 首次渲染
const root = document.getElementById("root");
patch(root, vnode);

// 2
// 更新视图
// button
const btn = document.createElement("button");
btn.innerText = "点击，触发path，更新视图";
document.body.appendChild(btn);
btn.onclick = () => {
  console.log("click");
  // patch(vnode, vnode2);
  patch(vnode, vnode2);
};
