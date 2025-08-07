# blacksher-commitlint-config

> git提交规范

支持配套的 [commitlint 配置](https://commitlint.js.org/#/concepts-shareable-config)，用于对 `git commit message` 进行校验。

## 安装

使用时，需要安装 [@commitlint/cli](https://www.npmjs.com/package/@commitlint/cli)：

```bash
npm install @commitlint/cli blacksher-commitlint-config -D
```

## 使用

在 `commitlint.config.js` 中集成本包：

```javaScript
module.exports = {
  extends: ['blacksher-commitlint-config'],
}
```

## 设置 git hook

可通过 [husky](https://www.npmjs.com/package/husky) 设置在 `git commit` 时触发 `commitlint`。

首先安装 husky：

```bash
npm install husky -D
```

然后执行添加 `commit-msg`：

```bash
echo "npx --no -- commitlint --edit \$1" > .husky/commit-msg
```

windows用户
```bash
echo "npx --no -- commitlint --edit `$1" > .husky/commit-msg
```

更多信息可参考 [commitlint 文档](https://commitlint.js.org/#/guides-local-setup?id=install-husky)。