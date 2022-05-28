import { _createElement } from "./_createElement";
import { _updateChildren } from "./_updateChildren";

const _patchVnode = (oldVnode, newVnode) => {
  // 1
  // 新旧节点 - 是否是同一个对象
  // 注意：这种情况表示的是 两个节点完全一样，同一个内存
  if (oldVnode === newVnode) return;

  // 2
  // 新节点有text属性，没有children属性
  if (
    newVnode.text !== undefined &&
    (newVnode.children === undefined || newVnode.children.length === 0)
  ) {
    console.log("新Vnode有text属性");
    if (newVnode.text !== oldVnode.text) {
      oldVnode.elm.innerText = newVnode.text; // 新旧的text不相等
    }
  }

  // 3
  // 新节点有children，没有text属性
  else {
    if (oldVnode.children !== undefined && oldVnode.children.length > 0) {
      // x
      // 新旧节点都有children

      _updateChildren(oldVnode.elm, oldVnode.children, newVnode.children);

      // let unProcess = 0; // 表示新节点children中没有遍历到的指针
      // for (let i = 0; i < newVnode.children.length; i++) {
      //   const currentNewVnode = newVnode.children[i]; // 当前新节点

      //   let isEqual = false;
      //   for (let j = 0; j < oldVnode.children.length; j++) {
      //     const currentOldVnode = oldVnode.children[j]; // 当前旧节点
      //     if (
      //       currentNewVnode?.key === currentOldVnode?.key &&
      //       currentNewVnode.sel === currentOldVnode.sel
      //     ) {
      //       // 两个节点是同一个虚拟节点
      //       isEqual = true;
      //     }
      //   }

      //   // 新旧children中比较的两个虚拟节点不相同，直接创建并添加到DOM中去
      //   if (!isEqual) {
      //     const DOM = _createElement(currentNewVnode);
      //     console.log("DOM", DOM);
      //     currentNewVnode.elm = DOM;
      //     if (unProcess < oldVnode.length) {
      //       // 通过 unProcess 找到插入的位置
      //       oldVnode.elm.insertBefore(DOM, oldVnode.children[unProcess].elm);
      //     } else {
      //       // 旧节点children遍历结束了，新节children剩下的直接添加到末尾即可
      //       oldVnode.elm.appendChild(DOM);
      //     }
      //   } else {
      //     unProcess++;
      //   }
      // }
    } else {
      // y
      // 新节点有children，旧节点没有children

      // 11 删除oldVnode的text
      oldVnode.elm.innerText = "";

      // 22 添加newVnode的children到DOM中
      // 注意：是先删除oldVnode的text，在添加children
      for (let i = 0; i < newVnode.children.length; i++) {
        const DOM = _createElement(newVnode.children[i]);
        oldVnode.elm.appendChild(DOM);
      }
    }
  }
};

export { _patchVnode };
