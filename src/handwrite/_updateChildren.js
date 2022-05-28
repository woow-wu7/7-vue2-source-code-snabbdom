import { _patchVnode } from "./_patchVnode";

const _checkSameVnode = (a, b) => a.sel === b.sel && a.key === b.key;

const _updateChildren = (parentElm, oldCh, newCh) => {
  // 四个指针

  let oldStartIdx = 0; // 旧前
  let newStartIdx = 0; // 新前
  let oldEndIdx = oldCh.length - 1; // 旧后
  let newEndIdx = newCh.length - 1; // 新后

  // 指针指向的四个节点
  let oldStartVnode = oldCh[0]; // 旧前节点
  let newStartVnode = newCh[0]; // 新前节点
  let oldEndVnode = oldCh[oldEndIdx]; // 旧后节点
  let newEndVnode = newCh[newEndIdx]; // 新后节点

  // while
  // - 遍历新节点children和旧节点children，任何一个遍历完的情况
  while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
    console.log('1', 1)
    // 新前与旧前
    if (_checkSameVnode(oldStartVnode, newStartVnode)) {
      console.log(" ①新前与旧前 命中");
      _patchVnode(oldStartVnode, newStartVnode);
      oldStartVnode = oldCh[++oldStartIdx];
      newStartVnode = newCh[++newStartIdx];
    }
    // 新后与旧后
    else if (_checkSameVnode(oldEndVnode, newEndVnode)) {
      console.log(" ②新后与旧后 命中");
      _patchVnode(oldEndVnode, newEndVnode);
      oldEndVnode = oldCh[--oldEndIdx];
      newEndVnode = newCh[--newEndIdx];
    }
    // 新后与旧前
    else if (_checkSameVnode(oldStartVnode, newEndVnode)) {
      console.log(" ③新后与旧前 命中");
      _patchVnode(oldStartVnode, newEndVnode);
      // 当③新后与旧前命中的时候，此时要移动节点。移动 新后（旧前） 指向的这个节点到老节点的 旧后的后面
      // 移动节点：只要插入一个已经在DOM树上 的节点，就会被移动
      parentElm.insertBefore(oldStartVnode.elm, oldEndVnode.elm.nextSibling);
      oldStartVnode = oldCh[++oldStartIdx];
      newEndVnode = newCh[--newEndIdx];
    }
    // 新前与旧后
    else if (_checkSameVnode(oldEndVnode, newStartVnode)) {
      console.log(" ④新前与旧后 命中");
      _patchVnode(oldEndVnode, newStartVnode);
      // 当④新前与旧后命中的时候，此时要移动节点。移动 新前（旧后） 指向的这个节点到老节点的 旧前的前面
      // 移动节点：只要插入一个已经在DOM树上的节点，就会被移动
      parentElm.insertBefore(oldEndVnode.elm, oldStartVnode.elm);
      oldEndVnode = oldCh[--oldEndIdx];
      newStartVnode = newCh[++newStartIdx];
    }
  }
};

export { _updateChildren };
