# Mosuzo Studio

工作室双语官网：简体中文在根路径，English 在 `/en/`。

Mosuzo Studio 做面向 Windows 的截图、录屏、图片处理、窗口检查与演示工具：

- [Shotera](https://github.com/mosuzo-studio/Shotera/releases) — 截图、长截图与录屏。官网正在恢复中，下载请前往 GitHub Releases。
- [SnipArc](https://sniparc.mosuzo.com/) — 面向日常沟通的截图与标注工具。
- [WindowSift](https://windowsift.mosuzo.com/) — 追踪窗口来源，查看窗口属性。
- [ImagePerch](https://imageperch.mosuzo.com/) — 在 Windows 上浏览、裁切与编辑长图。
- [KeySplera](https://keysplera.mosuzo.com/) — 在录屏和演示中显示按键与点击。

全部产品：https://mosuzo.com/products/ · GitHub：https://github.com/mosuzo-studio

产品和中英文文案集中在 `src/data.ts` 与 `src/Site.astro`。

## 开发

Node.js 22.12+。执行 `npm ci`、`npm run check`、`npm run build`。开发时运行 `npm run dev`。

正式仓库为 `mosuzo-studio/mosuzo-studio.github.io`。推送 `master` 会触发 GitHub Pages 工作流。正式站点从 `mosuzo.com` 根路径提供页面和资源。

产品视觉使用各产品官网已有资产。Shotera 使用既有产品演示图，SnipArc 使用中文软件实拍。QQ、微信和小红书仅在核实公开账号后添加链接。购买、激活与客服入口按实际开放状态更新。

## 域名维护

在正式仓库的 Settings → Pages 管理 `mosuzo.com` 和 HTTPS。网站当前的 DNS 目标是 `mosuzo-studio.github.io`。验证域名或调整 DNS 后，可从 Actions 手动运行 Deploy studio site。
