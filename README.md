# 在色板中找到最接近给定颜色的颜色

## 背景

- 最近公司中提出了项目质量要求，其中包括页面中所有使用的颜色要在设计师给定的色板之内。

## 实现

1. 将 `rgb` 格式色彩转为 `hsv`色彩
2. 在 `hsv` 色彩空间（圆锥体）中计算 `hsv` 颜色之间的点距
3. 将色板中的颜色按与目标颜色的距离从小到大排序，输出前 10 个颜色。

## 使用

- 安装 VSCode 插件：`Code Runner` 以运行文件。
- 安装 VSCode 插件：`Color Highlight` 以显示颜色。
- 打开`/test/main.test.js`，右键运行
- 修改测试数据，查看效果

## 效果

基本可以在前 10 名接近颜色中找到肉眼认为最接近的颜色。应该还有优化空间。

![图片](https://raw.githubusercontent.com/Ricemilk1122/color-finder/master/img/1.jpeg)

![图片](https://raw.githubusercontent.com/Ricemilk1122/color-finder/master/img/2.jpeg)

![图片](https://raw.githubusercontent.com/Ricemilk1122/color-finder/master/img/3.jpeg)

![图片](https://raw.githubusercontent.com/Ricemilk1122/color-finder/master/img/4.jpeg)

![图片](https://raw.githubusercontent.com/Ricemilk1122/color-finder/master/img/5.jpeg)
