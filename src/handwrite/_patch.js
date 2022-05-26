import _vnode from "./_vnode";
import { _createElement } from "./_createElement";

// patch 函数
// 1
// 参数
// - 第一个参数：oldVnode 或者 DOM，不是vnode会被转成vnode
// - 第二个餐素：newVnode

const _patch = function (oldVnode, newVnode) {
  // 第一个参数 - 旧节点不是vnode，则转成vnode
  if (oldVnode.sel === "" || oldVnode.sel === undefined) {
    oldVnode = _vnode(
      oldVnode.tagName.toLowerCase(), // tagName
      {},
      [],
      undefined,
      oldVnode // 真实的DOM
    );
  }

  // 判断 oldVnode, newVnode 是不是同一个 ( 虚拟节点 )
  // 问题：如何判断是否是同一个虚拟节点
  // 回答：( key ) 和 ( css选择器 ) 都要相同

  // a
  // 是同一个虚拟节点
  if (oldVnode.key === newVnode.key && oldVnode.sel === newVnode.sel) {
    console.log("新旧节点-是同一个虚拟节点，则精细化比较");
  }

  // b
  // 不是同一个虚拟节点
  else {
    console.log("新旧节点-不是同一个虚拟节点，暴力插入新节点，删除旧节点");
    console.log(
      "为什么要先插入，后删除？因为插入时是需要一个对比节点的，插入谁的前面"
    );

    // 将虚拟节点转成真正的DOM节点
    const newDOM = _createElement(newVnode);

    // 插入新节点
    // 插入新真实的DOM节点
    if (oldVnode.elm.parentNode && newDOM) {
      oldVnode.elm.parentNode.insertBefore(newDOM, oldVnode.elm);
    }

    // 删除老节点
    oldVnode.elm.parentNode.removeChild(oldVnode.elm)
  }
};

export default _patch;
