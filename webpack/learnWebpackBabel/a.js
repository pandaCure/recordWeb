import a from './c';
import {ok, zzy} from './b';

export default 'a.js';

console.log(a);
zzy();

// webpack的模块化总结(处理模块的逻辑)([(模块1),(模块2)])
// 对于每一个文件的默认导出 只有一个导出的情况
// webpack 对 export default 在入口文件的时候 webpack导出模块是 module.export.default = {}
//         对export default 在除入口文件的时候  webpack到处的模块是 module.export[import的name] = {}
// 对于每一个文件导出多个函数或者变量的情况 接受采用两种方法
// 对模块的每一个导出进行module.export 对象添加a,b,c...等属性，webpack做了内部处理可以将其他导入文件中引入
// 同样对去 export module.exports require 做测试
// 在打包的文件我们可以看出 导出的函数 function(module,exports)   exports => module.exports 这里我们可以知道
// exports只是一个module里面的一个
// 深度一句话总结
// 在webpack项目中，我们可以看出 require直接被转换成 module.exports = exports = {}这个值 引用这个全部对象
// 而ES6的import 和 export default 之间转换时  modules.exports[name] = exports[name]  具体到每个值


