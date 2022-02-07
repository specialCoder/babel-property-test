# babel-property-test
关于babel 配置的实验

## 总结
polyfill 方案 entry 方式的时候需要在入口文件里引入:
``` jsvasript
import 'core-js/stable';
import 'regenerator-runtime/runtime';
// 接下来是入口文件代码
 ...

```

全文见这里： https://segmentfault.com/a/1190000041370305