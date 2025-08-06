#!/bin/bash

# 发布脚本 - 发布到 npm

echo "开始发布 @xiaoai/leaflet-measure-path 到 npm..."

# 检查是否登录 npm
if ! npm whoami > /dev/null 2>&1; then
    echo "错误: 请先登录 npm (npm login)"
    exit 1
fi

# 检查文件结构
echo "检查包内容..."
npm pack --dry-run

# 确认发布
read -p "确认发布到 npm? (y/N): " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "发布已取消"
    exit 1
fi

# 发布
echo "正在发布..."
npm publish

if [ $? -eq 0 ]; then
    echo "✅ 发布成功!"
    echo "你现在可以通过以下命令安装包:"
    echo "npm install @xiaoai/leaflet-measure-path"
else
    echo "❌ 发布失败"
    exit 1
fi
