export function _createElement(vnode, pivot) {
  console.log('vnode', vnode)
  // 创建节点
  const DOM = document.createElement(vnode.sel);

  // 文本节点
  // - text 存在
  // - children 不存在，或者children是空数组
  if (
    vnode.text &&
    (vnode.children === undefined || vnode.children.length === 0)
  ) {
    // 文本节点
    DOM.innerText = vnode.text;

    // 将 DOM 插入到 pivot 的前面
    pivot.parentNode.insertBefore(DOM, pivot);
  }
}
