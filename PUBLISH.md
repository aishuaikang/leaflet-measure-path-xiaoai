# 发布到 NPM 的步骤

## 准备工作

1. 确保你已经登录到 npm：

    ```bash
    npm login
    ```

2. 检查包名是否可用：
    ```bash
    npm view @xiaoai/leaflet-measure-path
    ```

## 发布流程

1. 检查文件结构：

    ```bash
    npm pack --dry-run
    ```

2. 运行测试（如果有）：

    ```bash
    npm test
    ```

3. 发布包：
    ```bash
    npm publish
    ```

## 版本管理

更新版本号：

```bash
# 补丁版本 (1.5.0 -> 1.5.1)
npm version patch

# 次要版本 (1.5.0 -> 1.6.0)
npm version minor

# 主要版本 (1.5.0 -> 2.0.0)
npm version major
```

## 验证安装

发布后，在另一个项目中测试：

```bash
npm install @xiaoai/leaflet-measure-path
```

在 TypeScript 项目中：

```typescript
import 'leaflet';
import '@xiaoai/leaflet-measure-path';

// 使用类型安全的 API
const polyline = L.polyline([...])
    .addTo(map)
    .showMeasurements({
        showOnHover: true,
        showTotalDistance: true
    });
```

## 注意事项

-   确保 `leaflet-measure-path.d.ts` 文件包含完整的类型定义
-   验证 `package.json` 中的 `types` 字段指向正确的声明文件
-   检查 `peerDependencies` 设置是否正确
-   测试类型定义是否能正确导入和使用
