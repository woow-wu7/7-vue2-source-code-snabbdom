// 将 参数 包装成 对象 返回
const _vnode = (sel, data, children, text, elm) => {
  const key = data.key;

  return {
    sel,
    data,
    children,
    text,
    elm,
    key,
  };
};

export default _vnode;
