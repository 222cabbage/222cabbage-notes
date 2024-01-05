# /bin/bash
###
 # @Auther: qinzhenhao
 # @Date: 2024-01-05 09:47:20
 # @LastEditors: qinzhenhao
 # @LastEditTime: 2024-01-05 10:02:27
 # @Description: 
### 

# 确保脚本抛出遇到的错误
set -e

# 打包生成静态文件
yarn docs:build

# 进入待发布的 dist/ 目录
cd public

# 提交打包静态网站到 github-pages 分支
git init
git add .
git commit -m 'deploy'

# 部署到 https://<username>.github.io/<repo>
git push -f git@github.com:222cabbage/222cabbage-notes.git master:github-pages

# 提交所有代码到github
# cd ../
git add .
git commit -m 'update'
git push