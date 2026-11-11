# SHANSHI 开发者工具箱

按实际需要逐步添加开发者工具。当前包含从 `shanshi-site` 提取的“个人信息生成”，保留原有生成规则与选项，独立于原站的知识库和内容系统运行。

## 本地运行

建议使用 Node.js 22（见 `.nvmrc`，自动部署使用相同版本）和 npm：

```sh
npm ci
npm run dev
```

打开 <http://localhost:3000>。工具页面为 `/tools/personal-info-generator`。

```sh
npm run verify  # ESLint、TypeScript、已有生成器测试及静态导出
npm run build   # 仅静态导出，产物位于 out/
```

本项目使用 `output: "export"`，不再提供 `next start` 服务。日常预览使用 `npm run dev`；`out/` 可由普通静态服务器托管，例如本机安装 Python 3 时运行：

```sh
python3 -m http.server 3000 --bind 127.0.0.1 --directory out
```

该命令适用于未设置子路径的本地构建，打开 <http://localhost:3000> 即可。

## GitHub Pages 自动部署

使用 GitHub Pages 默认地址，无需自定义域名或 DNS 配置。

1. 将项目推送到 GitHub 仓库。GitHub Free 账户需要使用公开仓库。
2. 在仓库 **Settings → Pages → Build and deployment → Source** 选择 **GitHub Actions**。
3. 推送默认分支的新提交，或在 **Actions → Deploy to GitHub Pages → Run workflow** 中选择默认分支手动运行。
4. 工作流先执行 `npm ci` 和 `npm run verify`，通过后上传 `out/` 并部署。最终访问地址可从工作流的 `github-pages` 环境链接或 Pages 设置中查看。

普通项目仓库的默认地址为 `https://<GitHub 用户名>.github.io/<仓库名>/`。例如仓库名为 `shanshi-devtools` 时，工具地址为：

```text
https://<GitHub 用户名>.github.io/shanshi-devtools/tools/personal-info-generator/
```

工作流通过 `actions/configure-pages` 读取实际的 `base_path`，以 `PAGES_BASE_PATH` 传给 Next.js，页面链接和静态资源随构建带上正确前缀；不需要在源码中替换用户名或仓库名。用户站点仓库 `<用户名>.github.io` 使用根路径。仅默认分支会部署，其他分支的推送和手动运行会跳过。

需要在本地生成与项目仓库路径一致的产物时，可运行：

```sh
PAGES_BASE_PATH=/shanshi-devtools npm run build
```

此时静态服务器需把 `out/` 挂载到 `/shanshi-devtools/`；上面的根路径预览命令不适用于这份带前缀的产物。`PAGES_BASE_PATH` 是构建时配置，变更后需重新构建。

配置依据：[Next.js 静态导出](https://nextjs.org/docs/app/guides/static-exports)、[GitHub Pages 自定义工作流](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)。本地检查不代表已在 GitHub 发布；仓库设置、Actions 运行及线上访问仍需在推送后确认。

## 个人信息生成

- 31 个省级地区选项、12 家银行，均支持随机选择。
- 生成数量支持 1、5、10、20、50、100 条。
- 包含姓名、省份、身份证号、手机号、地址、邮编、银行和银行卡号。
- 单条资料逐项展示，批量资料使用可横向滚动的表格。
- 支持复制全部文本或带表头的 CSV；复制需在 localhost 或 HTTPS 环境下获得浏览器剪贴板权限。
- 生成在浏览器本地完成，不保存或上传生成内容。

身份证号与银行卡号包含格式校验位，不代表已核验身份或可用账户；地址与邮编为组合样例，不保证地理对应。仅用于开发测试。

## 代码结构

- `src/app/page.tsx`：工具箱首页。
- `src/app/tools/personal-info-generator/page.tsx`：工具页面及元数据。
- `src/components/personal-info-generator.tsx`：生成选项、结果展示与复制交互。
- `src/lib/personal-info-generator.ts`：从原站原样提取的生成规则和数据。
- `test/personal-info-generator.test.mjs`：原站已有的生成器测试。

新增工具时添加对应页面和首页入口，按实际复用需要提取公共组件。
