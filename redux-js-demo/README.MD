## 目录结构

```jsx
- index.js
- store
      - index
      - reducer
      - actionCreators
      - constants
```

- store-index对应redux的导出文件

- store-reducer对应redux的reducer纯函数，action逻辑都在这里
  - initState对应store管理的state的初始值
  - reducer是一个纯函数，有两个参数（当前的state和action），state初始化时第一次为undefined，使用initState即可，action是调用dispatch修改时传入的对象
  - 一般在reducer内部通过switch，根据action的描述返回一个新的state覆盖旧的state
- store-constants对应的reducer和actionCreators的action-type属性，因为两者必须相同，所以使用constants方便管理
- store-actionCreators对应dispatch的对象，方便管理，多次dispatch时减少代码量