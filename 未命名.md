# 东方电气安全管理系统

## 部署步骤

1. **数据库配置**
   - 登录 Supabase，新建项目
   - 进入 SQL Editor，粘贴本文档最上方的 SQL 脚本并执行
   - 进入 Table Editor -> projects 表，手动插入项目数据（如：“东方电气光伏项目部”）
   - 进入 Authentication -> Users，创建用户
   - 回到 Table Editor -> profiles 表，将新建用户的 role 改为 admin，并关联 project_id

2. **代码配置**
   - 下载本仓库所有文件
   - 修改 `config.js` 中的 `url` 和 `anonKey` 为你自己的 Supabase 项目信息

3. **上线部署**
   - 将代码推送到 GitHub
   - 登录 Netlify，Import 该 GitHub 仓库
   - 一键部署

## 系统账号
- 管理员：可看大屏、汇总、所有详情
- 项目经理：可看汇总、本项目数据
- 填报员：仅可填报
