# Docker 部署指南

## 快速开始

### 使用 Docker Compose（推荐）

```bash
# 构建并启动容器
docker-compose up -d

# 查看日志
docker-compose logs -f

# 停止容器
docker-compose down
```

访问 http://localhost:3000

### 使用 Docker 命令

```bash
# 构建镜像
docker build -t lizi-invitation .

# 运行容器
docker run -d -p 3000:80 --name lizi-invitation lizi-invitation

# 查看日志
docker logs -f lizi-invitation

# 停止并删除容器
docker stop lizi-invitation
docker rm lizi-invitation
```

## 生产部署

### 1. 构建镜像

```bash
docker build -t lizi-invitation:latest .
```

### 2. 推送到镜像仓库（可选）

```bash
# Docker Hub
docker tag lizi-invitation:latest username/lizi-invitation:latest
docker push username/lizi-invitation:latest

# 阿里云容器镜像服务
docker tag lizi-invitation:latest registry.cn-hangzhou.aliyuncs.com/namespace/lizi-invitation:latest
docker push registry.cn-hangzhou.aliyuncs.com/namespace/lizi-invitation:latest
```

### 3. 在服务器上运行

```bash
# 拉取镜像
docker pull username/lizi-invitation:latest

# 运行容器
docker run -d \
  -p 80:80 \
  --name lizi-invitation \
  --restart unless-stopped \
  username/lizi-invitation:latest
```

## 端口配置

默认情况下，应用运行在容器内的 80 端口。你可以通过 `-p` 参数映射到宿主机的任意端口：

```bash
# 映射到 8080 端口
docker run -d -p 8080:80 --name lizi-invitation lizi-invitation

# 映射到 80 端口（需要 root 权限或特殊配置）
docker run -d -p 80:80 --name lizi-invitation lizi-invitation
```

## 更新部署

```bash
# 拉取最新代码
git pull

# 重新构建并重启
docker-compose up -d --build

# 或使用 Docker 命令
docker stop lizi-invitation
docker rm lizi-invitation
docker build -t lizi-invitation .
docker run -d -p 3000:80 --name lizi-invitation lizi-invitation
```

## 故障排查

```bash
# 查看容器状态
docker ps -a

# 查看容器日志
docker logs lizi-invitation

# 进入容器
docker exec -it lizi-invitation sh

# 检查 nginx 配置
docker exec lizi-invitation nginx -t
```

## 镜像优化

当前镜像使用多阶段构建，最终大小约 40-50MB（nginx:alpine 基础镜像）。

构建产物位于：`/usr/share/nginx/html`

## 性能优化

- 启用了 gzip 压缩
- 静态资源设置了 1 年的缓存
- 使用 Alpine Linux 减小镜像体积
- nginx 配置了 SPA 路由支持

## 环境变量

如需添加环境变量，可以在 `docker-compose.yml` 中添加：

```yaml
services:
  web:
    environment:
      - NODE_ENV=production
```

或在 `docker run` 命令中添加：

```bash
docker run -d -p 3000:80 -e NODE_ENV=production lizi-invitation
```
