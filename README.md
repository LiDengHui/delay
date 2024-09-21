# delay 函数
## 一、简介
delay 函数是一个用于实现延迟功能的实用工具函数。它接受一个以毫秒为单位的时间参数，并返回一个 Promise，在指定的时间过后成功解决。
## 二、安装
使用以下命令通过 NPM 安装：

```shell
npm install @dhlx/delay
```
## 三、使用示例
```ts
import delay from '@dhlx/delay';  // 请替换为实际的包名

// 延迟 2 秒
delay(2000).then(() => {
  console.log('延迟 2 秒完成');
});

```
## 四、API 说明
```ts
delay(ms: number): Promise<void>
```
ms：延迟的时间，单位为毫秒。

## 五、贡献
如果您发现任何问题或有改进的建议，欢迎提交 issue 或 pull request。

## 六、许可证
本项目遵循 MIT 许可证。