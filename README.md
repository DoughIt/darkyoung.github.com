## 目录结构

`src/css`
> 使用`Sass`编写的样式表，以`_`开头的样式表定义了颜色、大小等常量，以`theme`开头的样式表定义了不同的主题样式

`src/html`
> 不同主题的简历对应的静态HTML

`src/include`
> 一些公共的组件，如网页的`header`、`footer`等，通过`Gulp`自动化导入其他HTML文件中

`dist/css`
> 经过`Sass`预处理后生成的CSS文件，对应`src/css`目录

`dist/html`
> 导入公用html文件后生成的完整HTML文件，对应`src/html`目录

`font`
> 使用到的[图标字体](http://fontello.com/)

`lib`
> 使用到的`JavaScript`框架

`config`
> 网站数据分析相关的配置文件（[Google Analytics](https://analytics.google.com/analytics/web/#/report-home/a135670381w195894184p191014463)）

`node_modules`
> Gulp自动化使用到的插件，相关插件在`package.json`中有说明。

`CNAME`
> CNAME记录，将其他域名（如：darkyoung.cn）解析到别的域名（如：darkyoung.github.io，当前网站）上，可以隐藏网站的真实`IP`，减少被攻击的几率。

`index.html`
> 网站主页（默认显示的主题），对应`src/html/index.html`文件

`package.json`
> 相关配置文件，包含网站信息（标题、版本号、描述、关键字、作者等）、`Gulp`插件等。

`gulpfile.js`
> 定义需要自动化处理的任务

- [x] 编译
- 使用stream读取操作数据（例如：`src/css`）
- 使用`gulp-sass`插件将`xxx.scss`文件编译成合法的CSS文件
- 使用`gulp-minify-css`插件将生成的样式表压缩
- 使用`gulp-rename`插件对文件进行重命名
- 将文件流写入对应文件夹（例如：`dist/css`）

- [x] 导入文件
- 读取需要导入文件的数据（`src/html`)
- 使用`gulp-file-include`插件匹配需要导入的文件（定义导入文件语法）
- 将处理后的数据写入对应文件夹（例如：`dist/html` or `./`）

### 在命令行使用`gulp + task_name`的形式执行自动化处理任务

---

`Theme1`风格参考[@DIYGod](https://github.com/DIYgod)，感谢!
