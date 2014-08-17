## HTML Meta tag with IE=edge
我们经常可以看到这个东西`<meta http-equiv="X-UA-Compatible" content="IE=edge">`出现在HTML文档中的头部，它是干什么的呢？

`X-UA-Compatible`是从IE8开始引入的，用于指定IE浏览器将会使用的渲染模式，如：`<meta http-equiv="X-UA-Compatible" content="IE=7" />`将会显示成IE7的兼容性模式。而`IE=edge`是通知IE以当前操作系统中最高版本的IE模式显示内容。

我们可能还会看到这样的标签`<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">`，其中的`chrome=1`是由于Google Chrome Frame(GCF)的出现，这是谷歌给IE做了个插件(外挂)，用来使用Chrome内核渲染页面。而上面的这条meta标签表明是：如果装有GCF，使用Chrome1内核来显示页面，否则的话，使用最高版本的IE内容显示。

*Note* 这个标签需要加在HEAD中的最前面，甚至是charset设定之前。

