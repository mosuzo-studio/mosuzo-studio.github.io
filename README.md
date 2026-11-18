# Mosuzo Studio

工作室双语官网。简体中文在根路径，English 在 /en/。产品和中英文文案集中在 src/data.ts 与 src/Site.astro。

Node.js 22.12+。执行 npm ci、npm run check、npm run build。开发时运行 npm run dev。

GitHub Pages 工作流通过 configure-pages 读取当前部署地址。项目预览在 /Mosuzo-site/，绑定 mosuzo.com 后重新运行工作流即可从根路径输出资源。站点的 canonical 始终指向 mosuzo.com。

产品视觉使用各产品官网已有资产。Shotera 使用既有产品演示图，SnipArc 使用中文软件实拍。QQ、微信和小红书仅在核实公开账号后添加链接。购买、激活与客服入口按实际开放状态更新。

## 切换到 mosuzo.com

当前使用 GitHub Pages 默认预览地址。切换时在该仓库的 Settings → Pages 设置自定义域名 `mosuzo.com`，并在域名服务商添加主机记录 `@` 的四条 A 记录：

- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

可为 `www` 添加指向 `mosuzo-studio.github.io` 的 CNAME。域名生效后重新运行 Deploy studio site，证书签发后启用 Enforce HTTPS。
