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
  - 问题：如果判断是不是同一个虚拟节点
  - 回答：唯一的标记 key
- 不是 ( 同一个虚拟节点 )，或者 ( 跨层级移动 )，都不会做精细化处理，而是暴力插入新的，删除旧的
  - 问题：为什么要先插入，后删除？
  - 回答：因为插入时是需要一个对比节点的，插入对比节点的前面


# 资料

- https://blog.csdn.net/weixin_44972008/article/details/115620198
