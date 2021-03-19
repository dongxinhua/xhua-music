# xhua-music 

## 项目规范

+ 文件夹、文件名统一小写、多个单词以连接符( - ) 连接；
+ JavaScript 变量名采用小驼峰标识，常量全部使用大写字母，组件采用大驼峰；
+ CSS 采用普通 CSS 和 styled-component 结合来编写(全局采用普通CSS、局部采用styled-component)；
+ 整个项目统一使用函数式组件，react-hook
+ 为了避免不必要的渲染，所有函数式组件全部使用 memo 进行包裹；
+ 组件内部的状态使用 useState、useReducer; 业务数据全部放在 redux 中管理；
+ 函数组件内部基本按照如下顺序编写代码：
  + 组件内部 state 管理；
  + redux 的 hooks 代码；
  + 组件其它hooks代码；(useEffect等)
  + 其它逻辑代码；
  + 返回 JSX 代码；
+ redux 代码规范：
  + 每个模块有自己独立的 reducer，通过 combineReducer 进行合并；
  + 异步请求代码使用 redux-thunk，并且写在 actionCreators 中；
  + redux 直接采用 redux hooks 方式编写，不再使用 connect；
+ 网络请求使用 axios
  + 对 axios 进行二次封装；
  + 所有的模块请求会放在一个请求文件中单独管理；
+ 项目中使用 AntDesign 组件库，但不绝对依赖。

