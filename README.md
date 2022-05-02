# 在色板中找到最接近给定颜色的颜色

## 背景

- 最近公司中提出了项目质量要求，其中包括页面中所有使用的颜色要在设计师给定的色板之内。
- 本项目主要从 `css` 文件中读取 `body` 选择器内定义的所有颜色和颜色变量，生成颜色集合。然后利用颜色相似度的算法计算颜色与目标颜色的相似度，排序后输出。
- 其核心是颜色相似度的计算。尝试了两种办法，基于 `hsv` 颜色空间的点距计算和基于 `Lab` 颜色空间的 `CIEDE2000色差公式` 计算方法。用户可以通过切换 `mode` 查看两种计算方法的效果差异。默认为 `Lab。`

## 相似度计算方案一

1. 将 `rgb` 格式色彩转为 `hsv`色彩
2. 在 `hsv` 色彩空间（圆锥体）中计算 `hsv` 颜色之间的点距
3. 将色板中的颜色按与目标颜色的距离从小到大排序，输出前 10 个颜色。
4. 该效果不是特别理想。

## 相似度计算方案二

1. 将 `rgb` 格式色彩转为 `Lab`色彩
2. 使用 `CIEDE2000色差公式` 计算颜色相似度，并排序输出最接近的颜色。
3. 这个效果就比较好了，详见下图。

## 使用

- 安装 VSCode 插件：`Code Runner` 以运行文件。
- 安装 VSCode 插件：`Color Highlight` 以显示颜色。
- 打开`/test/main.test.js`，右键运行
- 修改测试数据，查看效果

## 效果

使用 `CIEDE2000色差公式` 计算的效果：

![图片](https://raw.githubusercontent.com/Ricemilk1122/color-finder/master/img/1.jpeg)

![图片](https://raw.githubusercontent.com/Ricemilk1122/color-finder/master/img/2.jpeg)

![图片](https://raw.githubusercontent.com/Ricemilk1122/color-finder/master/img/3.jpeg)
