# AnchorUrl
### url里面输入#tab后缀刷新以后就可以直接显示对应选项卡，例如http://127.0.0.14/Admins/srole/permiss/0/4.html#tab2 就可以直接跳到tab2的选项卡视图

![image]("https://d.pr/0Ab3Yi")

### 选项卡头部代码块
``` html
<ul class="nav nav-tabs" id="myTab">
  <li class="tab1 active">
    <a data-toggle="tab" href="#tab1">
      <i class="green icon-home bigger-110"></i>
      模块权限
    </a>
  </li>
  <li class="tab2">
    <a data-toggle="tab" href="#tab2">
      <i class="green icon-home bigger-110"></i>
      栏目权限
    </a>
  </li>
  <li class="tab3">
    <a data-toggle="tab" href="#tab3">
      <i class="green icon-home bigger-110"></i>
      栏目权限
    </a>
  </li>
  <li class="tab4">
    <a data-toggle="tab" href="#tab4">
      <i class="green icon-home bigger-110"></i>
      栏目权限
    </a>
  </li>
</ul>
  ```
#### 这是选项卡头部的代码，每一个li标签都要添加一个class属性，以便于js动态的添加active属性选中它。

### 选项卡内容部分代码
``` html
<div id="tab1" class="tab-pane tab1 active">
  <table class="table table-striped table-bordered table-hover" id="dynamic-table">
    <thead>
    <tr>
      <th>系统模型</th>
      <th>模型名称</th>
      <th>模型标题</th>									
      <th>系统模型</th>
      <th style="border-right:#CCC solid 1px; width:50%">功能权限列表</th>
    </tr>
    </thead>
    <tbody>
    </tbody>
  </table>								
</div>

<div id="tab2" class="tab-pane tab2">
  <table class="table table-striped table-bordered table-hover" id="dynamic-table">
    <thead>
    <tr>
      <th>栏目ID</th>
      <th>栏目标题</th>
      <th>继承模型</th>
      <th>栏目别名</th>
      <th>系统栏目</th>
      <th style="border-right:#CCC solid 1px; width:50%">功能权限列表</th>
    </tr>
    </thead>
    <tbody>
    </tbody>
  </table>								
</div>

<div id="tab3" class="tab-pane tab3">
  <table class="table table-striped table-bordered table-hover" id="dynamic-table">
    <thead>
    <tr>
      <th>系统模型333</th>
      <th>模型名称</th>
      <th>模型标题</th>									
      <th>系统模型</th>
      <th style="border-right:#CCC solid 1px; width:50%">功能权限列表</th>
    </tr>
    </thead>
    <tbody>
    </tbody>
  </table>								
</div>

<div id="tab4" class="tab-pane tab4">
  <table class="table table-striped table-bordered table-hover" id="dynamic-table">
    <thead>
    <tr>
      <th>系统模型444</th>
      <th>模型名称</th>
      <th>模型标题</th>									
      <th>系统模型</th>
      <th style="border-right:#CCC solid 1px; width:50%">功能权限列表</th>
    </tr>
    </thead>
    <tbody>
    </tbody>
  </table>								
</div>
```

#### 每一个对应的id的div所属的class都要加一个对应的tab*属性，*是1,2,3,4...等选项卡的class，要与头部选项卡中li的 tab*的class类对用

### 调用代码
```
<script type="text/javascript">
window.onload = function(){
    transTab(4);
  };
</script>
```
在结尾调用函数transTab(num)即可，num为选项卡的数量
