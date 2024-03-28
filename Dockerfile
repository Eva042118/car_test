# 使用 Node.js 官方的 Node 镜像作为基础镜像
FROM node:latest

# 设置工作目录
WORKDIR /tests

# 复制 package.json 和 package-lock.json 到工作目录
COPY package*.json ./

# 安装项目依赖
RUN npm install

# 安装 Playwright
RUN npm install playwright

# 安装 Playwright 浏览器
RUN npx playwright install

# 添加下载 Chrome 浏览器的命令
RUN npx playwright install chromium

# 复制测试代码到工作目录
COPY . .

# 执行测试
CMD ["npx", "codeceptjs", "run"]
