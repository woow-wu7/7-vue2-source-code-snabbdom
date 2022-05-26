export function _createElement(vnode) {
  console.log("vnode", vnode);
  // 创建节点
  const DOM = document.createElement(vnode.sel);

  // 1
  // 文本节点 ------------ 比如 h("ul", {}, '测试');
  // - text 存在
  // - children 不存在，或者children是空数组
  if (
    vnode.text &&
    (vnode.children === undefined || vnode.children.length === 0)
  ) {
    // 文本节点
    DOM.innerText = vnode.text;

    // 将 DOM 插入到 pivot 的前面
    // pivot.parentNode.insertBefore(DOM, pivot); 我们注释掉这段代码，放到外面去，使得 _createElement 具有通用性
  }

  // 2
  // 数组 ------------- 比如 h("ul", {}, [ h('li', {}, '1'), h('li', {}, '2') ]);
  else if (Array.isArray(vnode.children) && vnode.children.length > 0) {
    for (let i = 0; i < vnode.children.length; i++) {
      const currentVnode = vnode.children[i];

      // 将当前的 vnode 创建生成 真实的DOM
      const currentDOM = _createElement(currentVnode);

      DOM.appendChild(currentDOM);
    }
  }

  // 将 vnode的elm属性设置成真正的DOM
  vnode.elm = DOM;

  // 最终返回
  // _createElement 最终返回真实的DOM
  return vnode.elm;
}
