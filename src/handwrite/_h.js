import _vnode from "./_vnode";

const isHObject = (params) =>
  typeof params === "object" && params.hasOwnProperty("sel");

// 参数 c
// 必须满足以下 3种 情况
// h('div', {}, 'string')
// h('div', {}, h())
// h('div', {}, [h(), ...])

// 返回值
// h函数返回值：一定是一个对象啊
const _h = function (sel, data, c) {
  // 1
  // 参数处理 - 个数 和 类型 判断
  if (arguments.length !== 3) throw new Error("parameters length must be 3");

  // string || number
  if (typeof c === "string" || typeof c === "number") {
    // _vnode(sel: any, data: any, children: any, text: any, elm: any):
    return _vnode(sel, data, undefined, c, undefined);
  }

  // array
  else if (Array.isArray(c)) {
    const children = [];
    for (let i = 0; i < c.length; i++) {
      if (!isHObject(c[i])) {
        throw new Error("Array member must be an object");
      }
      children.push(c[i]); // 收集children
    }

    return _vnode(sel, data, children, undefined, undefined);
  }

  // object -> h()
  else if (isHObject(c)) {
    return _vnode(sel, data, [c], undefined, undefined);
  }

  // error
  else {
    throw new Error("type of parameter c is error");
  }
};

export default _h;
