# 屏蔽Bilibili评论区收藏集区域点击跳转

一个 Tampermonkey（篡改猴）用户脚本：阻止 B 站评论区的 `bili-comment-user-sailing-card`组件（即收藏集区域）被点击时跳转到目标网页。
安装本脚本后，如果您想要访问原链接，可以右键该区域，并选择“在新标签页中打开链接”或类似选项。

## 原理

- 在 `window` 的**捕获阶段**监听 `click` / `auxclick` 事件，先于页面脚本执行。
- 通过 `event.composedPath()` 判断事件源是否落在 `bili-comment-user-sailing-card` 内，可穿透 Shadow DOM。
- 命中后调用 `preventDefault()` 与 `stopImmediatePropagation()`，直接掐断组件自身的跳转逻辑。

脚本仅注册事件监听，无轮询、无定时器、无网络请求。

## 安装

1. 浏览器安装 [Tampermonkey](https://www.tampermonkey.net/) 扩展。
2. 新建脚本，将 `bilibili-block-sailing-card.user.js` 内容粘贴进去并保存（或通过 `.user.js` 地址安装）。
3. 打开 B 站视频页评论区，点击用户名卡片将不再跳转。

## 生效范围

- `https://www.bilibili.com/*`
- `https://m.bilibili.com/*`
- `https://t.bilibili.com/*`

## 文件说明

| 文件 | 说明 |
| --- | --- |
| `bilibili-block-sailing-card.user.js` | 用户脚本本体 |
| `LICENSE` | GPL-3.0 许可证全文 |

## 许可

本项目基于 [GPL-3.0-or-later](https://www.gnu.org/licenses/gpl-3.0.html) 许可发布，详见 [LICENSE](LICENSE)。