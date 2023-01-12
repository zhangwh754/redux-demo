## 比较完整的项目Demo

### 总结

1. redux分模块
1. src/store_old为原生redux的使用
1. src/store为RTK（react toolkit）的使用
1. 使用rtk或原生redux，不影响react-redux库的使用
1. store内还封装了rtk的connect函数的实现

### 原生redux

1. 引入createStore函数，传入reducer
2. reducer声明初始值，内部写switch逻辑
3. 写actions描述reducer内部的操作

### RTK

1. 引入configureStore，传入reducer
2. reducer用createSlice函数声明，内部有name、reducers、initialState
3. 导出reducer和reducer的actions属性，actions属性会自动生成
