# GitHub 上传指南

## 📋 准备工作

### 1. 确保已安装 Git
```bash
git --version
```

如果未安装，请访问 [Git 官网](https://git-scm.com/) 下载安装。

### 2. 配置 Git 用户信息（首次使用）
```bash
git config --global user.name "你的用户名"
git config --global user.email "你的邮箱"
```

## 🚀 上传步骤

### 步骤 1: 初始化本地仓库
在项目根目录下执行：
```bash
git init
```

### 步骤 2: 添加所有文件到暂存区
```bash
git add .
```

### 步骤 3: 提交到本地仓库
```bash
git commit -m "Initial commit: Vue mall project"
```

### 步骤 4: 在 GitHub 创建远程仓库
1. 登录 [GitHub](https://github.com)
2. 点击右上角 `+` 号，选择 `New repository`
3. 填写仓库信息：
   - **Repository name**: `vue-mall` 或 `mobile-mall`
   - **Description**: `基于 Vue 2.x 开发的移动端电商项目`
   - **Public/Private**: 选择公开或私有
   - **不要勾选** "Initialize this repository with a README"（因为本地已有）
4. 点击 `Create repository`

### 步骤 5: 关联远程仓库
复制 GitHub 上显示的仓库地址，然后执行：
```bash
git remote add origin https://github.com/你的用户名/仓库名.git
```

或使用 SSH（推荐）：
```bash
git remote add origin git@github.com:你的用户名/仓库名.git
```

### 步骤 6: 推送到 GitHub
```bash
# 推送到主分支
git push -u origin master

# 如果使用 main 分支
git branch -M main
git push -u origin main
```

## 🔄 后续更新

### 提交更改
```bash
# 1. 查看修改的文件
git status

# 2. 添加修改的文件
git add .

# 3. 提交更改
git commit -m "描述你的修改内容"

# 4. 推送到 GitHub
git push
```

## 📝 常用 Git 命令

```bash
# 查看状态
git status

# 查看提交历史
git log

# 查看远程仓库
git remote -v

# 拉取最新代码
git pull

# 创建新分支
git checkout -b 分支名

# 切换分支
git checkout 分支名

# 合并分支
git merge 分支名
```

## ⚠️ 注意事项

1. **确保 node_modules 已被忽略**
   - `.gitignore` 文件中已包含 `node_modules`
   - 不要上传依赖包，其他人可以通过 `npm install` 安装

2. **敏感信息保护**
   - 不要上传包含 API 密钥、密码等敏感信息的文件
   - 使用环境变量文件（`.env`）并添加到 `.gitignore`

3. **提交信息规范**
   - 使用清晰的提交信息描述修改内容
   - 建议格式：`类型: 描述`
     - `feat: 新功能`
     - `fix: 修复 bug`
     - `docs: 文档更新`
     - `style: 代码格式调整`
     - `refactor: 代码重构`

## 🎯 推荐的 README 徽章

可以在 README.md 顶部添加以下徽章：

```markdown
![Vue](https://img.shields.io/badge/Vue-2.6.11-brightgreen)
![Vant](https://img.shields.io/badge/Vant-2.5.3-blue)
![License](https://img.shields.io/badge/License-MIT-yellow)
```

## 🌟 项目展示建议

1. **添加项目截图**
   - 在项目中创建 `screenshots` 文件夹
   - 上传应用截图
   - 在 README.md 中引用

2. **部署在线演示**
   - 使用 GitHub Pages
   - 使用 Vercel 或 Netlify
   - 提供在线预览链接

3. **完善项目文档**
   - API 接口说明
   - 组件使用文档
   - 开发规范

## 📞 遇到问题？

- 查看 [Git 官方文档](https://git-scm.com/doc)
- 查看 [GitHub 帮助文档](https://docs.github.com)
- 搜索相关错误信息

---

祝你上传成功！🎉
