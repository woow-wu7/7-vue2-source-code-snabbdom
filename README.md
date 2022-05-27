# 依赖
```
cnpm install -S snabbdom

cnpm install -D webpack webpack-cli webpack-dev-server html-webpack-plugin
- webpack ------------------> "^5.72.1"
- webpack-cli --------------> "^4.9.2"
- webpack-dev-server -------> "^4.9.0"
- html-webpack-plugin ------> "^5.5.0"
- webpack配置文件：webpack.config.js
- 项目入口文件：src/index.js
```


# diff算法
- 同层级比较
- 只有是 ( 同一个虚拟节点 )，才会进行 ( 精细化比较 )
  - 问题：如何判断是不是同一个虚拟节点
  - 回答：唯一的标记 ( key ) 和 ( css选择器 ) 都要相同
- 不是 ( 同一个虚拟节点 )，或者 ( 跨层级移动 )，都不会做精细化处理，而是暴力 ( 插入新节点，删除旧节点 )
  - 问题：为什么要先插入，后删除？
  - 回答：因为插入时是需要一个对比节点的，插入对比节点的前面
- 是 ( 同一个虚拟节点 ) - 即 ( key 和 css选择器一样 )
  - 1 判断新旧虚拟节点是不是同一个对象
    - 是 同一个对象，不做任何事情
    - 不是 执行2
  - 2 新节点有text，旧节点有text
    - 新旧节点的text一样，不做任何处理
    - 新旧节点的text不一样，DOM更新为新的节点text
  - 3 新节点有children，没有text，旧节点有text
    - DOM删除text
    - 把新节点中的children添加到DOM上
  - 4 新节点有children，旧节点也有children
    - 四个指针 + 递归

# 资料

- https://blog.csdn.net/weixin_44972008/article/details/115620198
