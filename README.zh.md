# AI Chat Starter

AI应用启动模板

## 功能

1. 基本对话
2. 起草邮件和文章等内容创作
3. 写代码
4. 生成图片，要配置对应的图片模型

## 启动项目依赖

```bash
docker run  --env=POSTGRES_HOST_AUTH_METHOD=trust -p 5432:5432 -d postgres:15-alpine
docker run  --volume=/data --workdir=/data -p 6379:6379 -d redis:6-alpine
```

## 配置环境变量

```bash
cp .env.example .env
POSTGRES_URL=postgresql://postgres@localhost:5432/postgres
REDIS_URL=redis://localhost:6379
```

## 安装依赖、本地运行

```bash
pnpm install
pnpm dev
```

## 国际化

使用`next-intl`包，开始用`i18next`配置不太友好，更换后方便很多。

但是使用 turbo 启动会报错，暂时还是webpack

## 模型配置

配置模型提供商路径`/lib/ai/model.ts`

配置具体模型路径`/lib/ai/provider.ts`

测试加了下qwen-flash体验了下，效果还不错