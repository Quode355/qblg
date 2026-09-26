---
layout: post
title: 如何搭建静态网站
subtitle: github静态网站托管
date: 2026-09-20
author: quode
---

这篇讲一下我使用github pages搭建静态网站的过程，主要分以下几个部分（点击可跳转相应位置）

1. [没什么用的前置知识](#1-前置知识)
2. [搭建教程](#2-搭建教程)
3. [网站编写](#3-网站编写)
4. [网页查看](#4-网页查看)
5. [结语](#5-结语)

*ps.本教程会用到已配置好并且有 git 拓展的 vscode，如果没有请自行寻找其他教程*


# 1. 前置知识

***

### -  什么是静态网站

静态网站可以简单理解为:

HTML + CSS + JavaScrip

浏览器直接读取这些文件并显示网页

和服务器实时生成页面的动态网站不同，它没有后端。

### - 为什么选择静态网站

github pages提供免费服务，不用租服务器，方便又好用。

### - 用到的工具

- GitHub
- GitHub Pages
- JeKyll
- MarkDown

*Jekyll 是一个静态网站生成器，它可以把 Markdown 文章转换成 HTML 页面，无需手敲 html 代码。*

# 2. 搭建教程

***

### 1. 创建一个github仓库

左上角找到 **new**

![create_project]({{ site.baseurl }}/img
/posts/2026-09-20/21creatProject.png)

输入仓库名称后继续

![22]({{ site.baseurl }}/img
/posts/2026-09-20/22.png)

选择导入文件

![23]({{ site.baseurl }}/img
/posts/2026-09-20/23.png)

![24]({{ site.baseurl }}/img
/posts/2026-09-20/24.png)

### 2. 找模板

**如果你会写前端也可自行设计，跳过此步骤*

推荐网站如下，可点击跳转：

- [Start Bootstrap(网站广告多但代码干净，本网站模板出处)](https://startbootstrap.com/)  
- [HTMLrev(涵盖多种框架)](https://htmlrev.com/)
- [onepagelove(单页设计)](https://onepagelove.com/)

### 3. 导入

下载模板后解压

![25]({{ site.baseurl }}/img
/posts/2026-09-20/25.png)
->
![26]({{ site.baseurl }}/img
/posts/2026-09-20/26.png)

然后将解压后的文件夹打开至 **详细** 界面

**!!!不要直接把大文件夹拖进去!!!**

全选后拖入

![27]({{ site.baseurl }}/img
/posts/2026-09-20/27.png)

接下来文件会显示在下方，点击"*commit changes*"绿色按钮即可

![29]({{ site.baseurl }}/img
/posts/2026-09-20/29.png)

![30]({{ site.baseurl }}/img
/posts/2026-09-20/30.png)

至此，网站框架已基本形成

如果你想要现在查看网页，请移步 [4.网页查看](#4-网页查看)

如果你在将文件拖入时显示如图，请不要慌张，后面会有解决办法

![err]({{ site.baseurl }}/img
/posts/2026-09-20/28.png)

# 3. 网站编写

***

### 1. clone仓库到本地

复制仓库地址

![cc]({{ site.baseurl }}/img
/posts/2026-09-20/301cc.png)

or

![ecc]({{ site.baseurl }}/img
/posts/2026-09-20/302ecc.png)

创建一个你准备存放网站文件的文件夹，并用vscode打开

在命令栏输入

```bash
git clone [你的仓库地址]
```

回车，结果如图

![clo]({{ site.baseurl }}/img
/posts/2026-09-20/303clo.png)

可以看到左边已经有刚刚上传的网站文件了，可以在这里编写网站内容

成功的小伙伴可以用 [传送门](#2-上传修改) 去下一步了

***

接下来说一下没有提前上传的情况

*叠甲：可以先将网站文件放进文件夹再关联github，我只是觉得clone简单一些*

clone后会发现你创建的文件夹里多了一个下属文件夹

![min]({{ site.baseurl }}/img
/posts/2026-09-20/304min.png)

和刚才一样，把解压后模板的 **详细** 界面全选，拖入 **下属** 文件夹里

![in]({{ site.baseurl }}/img
/posts/2026-09-20/305in.png)

现在的vscode界面应该是这样

![ed]({{ site.baseurl }}/img
/posts/2026-09-20/306ed.png)

接下来跟着教程走就行

***

### 2. 上传修改

打开git拓展，源代码管理界面，暂存你要提交的修改

刚才未成功上传的则暂存所有修改

![giv]({{ site.baseurl }}/img
/posts/2026-09-20/307giv.png)

提交

![up]({{ site.baseurl }}/img
/posts/2026-09-20/308up.png)

接下来在命令栏依次输入

```bash
git status
```

下面会显示刚刚提交的文件

![sta]({{ site.baseurl }}/img
/posts/2026-09-20/309status.png)

```bash
git add .

git commit -m "[更新记录]"

git push -u origin main
```

现在回去看仓库会发现文件已经上传了

![push]({{ site.baseurl }}/img
/posts/2026-09-20/310push.png)

# 4. 网页查看

***

回到 github 仓库首页，依次点击 settings , pages

![set]({{ site.baseurl }}/img
/posts/2026-09-20/401set.png)

branch 选择 main

![main]({{ site.baseurl }}/img
/posts/2026-09-20/402main.png)

点击 "save"

![sv]({{ site.baseurl }}/img
/posts/2026-09-20/403sv.png)

等待并刷新几次，大约五分钟后，你就会看到网页已经部署完毕

![web]({{ site.baseurl }}/img
/posts/2026-09-20/404web.png)

复制链接并粘贴到浏览器，就可以看到网页了

![wow]({{ site.baseurl }}/img
/posts/2026-09-20/405wow.png)

# 5. 结语

***

第一次写教程，有很多不足的地方，如果有不懂的可以问我

~~我会问AI然后回答你的~~

**非常感谢**你有耐心看完orz