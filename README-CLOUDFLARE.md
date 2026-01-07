# Cloudflare Pages 部署指南

本项目可以轻松部署到 Cloudflare Pages，享受免费的全球 CDN 加速和自动 HTTPS。

## 方式一：通过 Git 连接（推荐）

### 1. 推送代码到 Git 仓库

```bash
# 如果还没有远程仓库，先创建一个（GitHub/GitLab/Bitbucket）
git remote add origin <你的仓库地址>
git push -u origin main
```

### 2. 在 Cloudflare Pages 创建项目

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 选择 **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**
3. 选择你的 Git 仓库
4. 配置构建设置：

   **构建配置：**
   - **项目名称**: `lizi-invitation`（或自定义）
   - **生产分支**: `main`
   - **框架预设**: `Vite`
   - **构建命令**: `npm run build`
   - **构建输出目录**: `dist`
   - **Node.js 版本**: 自动检测（从 `.node-version` 读取）

5. 点击 **Save and Deploy**

### 3. 等待部署完成

首次部署需要 2-5 分钟。完成后会获得一个 `*.pages.dev` 域名。

### 4. 自定义域名（可选）

1. 在项目页面点击 **Custom domains**
2. 添加你的域名（如 `lizi.example.com`）
3. 按照提示配置 DNS 记录

## 方式二：使用 Wrangler CLI

### 1. 安装 Wrangler

```bash
npm install -g wrangler
```

### 2. 登录 Cloudflare

```bash
wrangler login
```

### 3. 构建项目

```bash
npm run build
```

### 4. 部署

```bash
wrangler pages deploy dist --project-name=lizi-invitation
```

## 方式三：拖放部署

1. 本地构建项目：
   ```bash
   npm run build
   ```

2. 访问 [Cloudflare Pages](https://pages.cloudflare.com/)
3. 选择 **Create a project** > **Upload assets**
4. 将 `dist` 文件夹拖放到上传区域
5. 设置项目名称并部署

## 环境变量

如果需要添加环境变量：

1. 进入项目的 **Settings** > **Environment variables**
2. 添加变量（如 `NODE_ENV=production`）
3. 保存后会自动重新部署

## 预览部署

每次推送到非生产分支都会自动创建预览部署，可以在 PR 中预览效果。

## 性能优化

Cloudflare Pages 自动提供：
- ✅ 全球 CDN 加速（300+ 数据中心）
- ✅ 自动 HTTPS
- ✅ 无限带宽
- ✅ DDoS 防护
- ✅ Brotli 和 Gzip 压缩
- ✅ HTTP/2 和 HTTP/3

## 自定义配置

### 添加自定义头部

创建 `public/_headers` 文件：

```
/*
  X-Frame-Options: SAMEORIGIN
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
```

### 添加重定向

创建 `public/_redirects` 文件：

```
# SPA 路由回退
/*  /index.html  200
```

### 自定义 404 页面

在 `public` 目录创建 `404.html` 文件。

## 回滚部署

1. 进入项目的 **Deployments** 页面
2. 找到之前的成功部署
3. 点击 **Rollback to this deployment**

## 监控和分析

Cloudflare Pages 提供：
- 访问分析
- 构建日志
- 部署历史
- 性能指标

访问项目的 **Analytics** 和 **Deployment logs** 查看详情。

## 故障排查

### 构建失败

1. 检查 **Deployment logs** 查看错误信息
2. 确认 Node.js 版本兼容（通过 `.node-version` 指定）
3. 本地测试构建：`npm run build`

### 页面空白

1. 检查控制台是否有错误
2. 确认构建输出目录设置为 `dist`
3. 检查是否正确配置 SPA 路由回退

### 图片加载失败

1. 确认图片文件在 `public` 目录下
2. 检查图片路径是否以 `/` 开头
3. 验证文件大小限制（单个文件 < 25MB）

## 费用

Cloudflare Pages 免费套餐包括：
- ✅ 无限请求
- ✅ 无限带宽
- ✅ 500 次构建/月
- ✅ 1 次并发构建

超出免费额度后才需要付费。

## 有用链接

- [Cloudflare Pages 文档](https://developers.cloudflare.com/pages/)
- [框架指南](https://developers.cloudflare.com/pages/framework-guides/)
- [Vite 部署指南](https://developers.cloudflare.com/pages/framework-guides/deploy-a-vite-project/)
- [社区论坛](https://community.cloudflare.com/)

## 部署 Checklist

- [ ] 代码推送到 Git 仓库
- [ ] 在 Cloudflare Pages 创建项目
- [ ] 配置构建设置（Vite, dist）
- [ ] 等待首次部署完成
- [ ] 测试网站功能
- [ ] （可选）配置自定义域名
- [ ] （可选）添加环境变量
- [ ] （可选）配置自定义头部
