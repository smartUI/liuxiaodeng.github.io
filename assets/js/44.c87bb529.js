(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{483:function(t,a,s){"use strict";s.r(a);var n=s(3),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"web实战：如何进行视频截图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#web实战：如何进行视频截图","aria-hidden":"true"}},[t._v("#")]),t._v(" Web实战：如何进行视频截图")]),t._v(" "),s("p",[t._v("各位读者大人们好，不知道各位读者大人们近来如何。")]),t._v(" "),s("p",[t._v("由于前段时间事情比较多，文章的更新就给耽误了，项目需要上线经常加班，再加上自己的一些学习计划，一晃就是一个多月，没有更新文章。")]),t._v(" "),s("p",[t._v("有人会问，登哥你怎么不搬运和转载别人的文章呢？，这样公众号就不会断更了，这个问题问的好，熟悉我的读者应该会发现，我的文章全都是原创文章。")]),t._v(" "),s("p",[t._v("刚开始运行公众号时，可能转载过一两篇文章，从那以后我就坚持原创了。不在进行转载，这其实和我公众号的定位有关系。")]),t._v(" "),s("p",[t._v("我写文章的目的很简单，不是为了涨粉，更多的是为了个人成长，因为你在写文章的同时其实就是在自我学习的过程，这个过程要比你单纯的看知识点要吸收的更有效率。")]),t._v(" "),s("p",[t._v("当然了，在这个过程中如果能收获认可自己的读者，那是一件很开心的事情。如果没有，我也没有损失什么。一直按照我的节凑进行就好。")]),t._v(" "),s("p",[t._v("所以从这个角度来说，转载可能对我的意义就不大了。")]),t._v(" "),s("p",[t._v("最近在自学 Python 后面除了给大家分享前端的相关知识以外，还会给大家分享更多有意思东西。大家以后可以多关注关注。")]),t._v(" "),s("p",[t._v("今天给大家分享一个实战技巧，最近在项目中使用到的，需求是在播放视频的时候可以进行截图。")]),t._v(" "),s("p",[t._v("我们都知道，网页中大多都是用 "),s("code",[t._v("<video>")]),t._v(" 标签进行视频的播放。那如何才能实现视频的截图呢？")]),t._v(" "),s("p",[t._v("这里我们用到了 canvas 的相关功能。我们都知道，canvas 是伴随着 HTML5 出现的，它具有强大的绘图能力。很多可视化库都是利用到了 canvas。")]),t._v(" "),s("p",[t._v("因为 canvas 具有对图像的操作能力，今天我们就用它来实现视频的截图操作，之前对 canvas 有过一段时间的学习，如果想学习 canvas 的同学，这里推荐慕课网上的入门课程。")]),t._v(" "),s("p",[t._v("这里主要用到两个方法：")]),t._v(" "),s("h3",{attrs:{id:"drawimage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#drawimage","aria-hidden":"true"}},[t._v("#")]),t._v(" drawImage")]),t._v(" "),s("p",[t._v("drawImage 方法是在画布上绘制图像、画布或视频。\n语法：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("drawImage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("image"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("drawImage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("image"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dWidth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dHeight"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("drawImage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("image"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sWidth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sHeight"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dWidth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dHeight"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("三种用法，本文不做过多描述，有兴趣的可以查看相关文档。其中的参数 image：允许任何的图像源，所以我们就可以利用这个特性，对 video 进行操作。更多可查看相关文档")]),t._v(" "),s("h3",{attrs:{id:"todataurl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#todataurl","aria-hidden":"true"}},[t._v("#")]),t._v(" toDataURL")]),t._v(" "),s("p",[t._v("toDataURL 方法可以返回 Canvas 图像对应的 data URI，也就是平常我们所说的base64地址。\n格式如下：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("mime type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("base64"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" \n")])])]),s("h3",{attrs:{id:"实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现","aria-hidden":"true"}},[t._v("#")]),t._v(" 实现")]),t._v(" "),s("p",[t._v("利用上述方法我们很容易就能实现视频的截图，主要分为三步：")]),t._v(" "),s("p",[t._v("使用 drawImage 方法在画布上绘制图像。")]),t._v(" "),s("p",[t._v("使用 toDataURL 方法获取图像的地址。")]),t._v(" "),s("p",[t._v("创建一个img标签，赋值给 src。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("video id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"video"')]),t._v(" src"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./flower.webm"')]),t._v(" width"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"300"')]),t._v(" controls"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("video"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("button onclick"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"captureVideo()"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("截图"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("button"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" video "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"video"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" canvas "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"canvas"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" img "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"img"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" ctx "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" canvas"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getContext")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2d"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("captureVideo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      canvas"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" video"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("videoWidth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      canvas"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" video"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("videoHeight"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("drawImage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("video"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" canvas"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" canvas"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      img"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" canvas"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toDataURL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("img"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("到这里就大功告成了，一起来看效果吧。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://blog-1257601889.cos.ap-shanghai.myqcloud.com/js/capture-video.gif",alt:""}})])])},[],!1,null,null,null);a.default=e.exports}}]);