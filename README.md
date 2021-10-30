# vite-plugin-export-build-info

🛵 Automatically export the relevant information of the project after the build, such as git branch, build time, etc.

[![Test](https://github.com/WorkPlusFE/vite-plugin-export-build-info/actions/workflows/test.yml/badge.svg)](https://github.com/WorkPlusFE/vite-plugin-export-build-info/actions/workflows/test.yml)

## 动机

1. 如果项目会被部署到多个的客户环境，而你可能不知道；
2. 如果项目分支非常多，并且年份老远；
3. 如果项目开发的周期不稳定，例如此次发布距离上一次超过一年；
4. 如果项目人员频繁更换。。。

以上，该插件的主要目的是在打包出静态资源的同时，导出一些跟 Git 信息相关的数据到特定文件，方便后续的代码版本确定。

其中，项目的 Git 信息，主要通过[git-repo-info](https://github.com/rwjblue/git-repo-info)实现，会打印`git-repo-info`返回的所有信息。同时会追加打包的时间以及当前用户（设备）的 Git `username`及`email`信息，并且支持扩展。

## 安装

> 需要 Vite@2+ 版本。

```bash
yarn add @w6s/export-build-info -D

# npm
npm install --save-dev @w6s/export-build-info
```

## 使用

```js
// vite.config.ts/.js
import { ExportBuildInfo } from '@w6s/export-build-info'

export default defineConfig({
  plugins: [
    vue(),

    // 该插件只会在 build 阶段的最后执行
    ExportBuildInfo({
      fileName: 'build-info',
      extend: {
        oha: 'oha'
      }
    })
  ],
})
```

**参数说明：**

* `fileName`：非必需，默认为 build-info，文件输出位置会跟 Vite 的 build.outDir 保持一致；
* `extend`：非必需，扩展属性；若字段冲突，会被覆盖，并且扩展字段会排在最前面。

> 导出的文件没后缀名。


## License

MIT.

