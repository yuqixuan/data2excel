# data2excel

### 使用方法

1. 安装 npm i data2excel --save
2. 引入 import { data2excel } from 'data2excel'
3. data2excel(column, data, [title], [filename])

### data2excel方法介绍

* column: 必填，类型为对象数组，对象包含name(列名)，style(可选，控制该字段的样式)
* data: 必填，类型为对象数组，对象包含style(可选，控制一行字段的样式)
* title: 可选，如果传进来一个字符串，直接作为excel第一行，无样式，如果想要添加样式，需传入对象，{name: 'title', style: 'xxx'}
* filename: 可选，下载的excel文件名 

```js
<-- excample --!>
  const column = [
    {
      name: 'name',
      style: 'font-weight: bold'
    },
    {
      name: 'phone',
      style: 'font-weight: bold'
    },
    {
      name: 'email',
      style: 'font-weight: bold'
    }
  ]

  const data = [
    {
      name:'路人甲',
      phone:'123456',
      email:'123@123456.com',
      style: 'font-weight: bold'
    },
    {
      name:'炮灰乙',
      phone:'123456',
      email:'123@123456.com'
    },
    {
      name:'土匪丙',
      phone:'123456',
      email:'123@123456.com'
    },
    {
      name:'流氓丁',
      phone:'123456',
      email:'123@123456.com'
    },
  ]
  
 data2excel(column, data, {name: 'this is a title', style: 'font-weight: bold; font-size: 30px'})
```

### 优点

可以灵活控制每一行的样式，体积小