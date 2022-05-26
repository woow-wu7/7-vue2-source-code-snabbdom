// 将 参数 包装成 对象 返回
const _vnode = (sel, data, children, text, elm) => {
  return {
    sel,
    data,
    children,
    text,
    elm,
  };
};

export default _vnode;
