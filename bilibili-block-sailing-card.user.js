// ==UserScript==
// @name         Bilibili 评论区航行卡片点击屏蔽
// @namespace    https://bilibili.com/
// @version      1.0.0
// @description  阻止 bilibili 评论区 bili-comment-user-sailing-card 组件被点击时跳转
// @author       -
// @match        https://www.bilibili.com/*
// @match        https://m.bilibili.com/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    var TAG = 'BILI-COMMENT-USER-SAILING-CARD';

    function hit(e) {
        var path = e.composedPath ? e.composedPath() : [];
        for (var i = 0; i < path.length; i++) {
            var n = path[i];
            if (n && n.tagName === TAG) return true;
        }
        return false;
    }

    function block(e) {
        if (hit(e)) {
            e.preventDefault();
            e.stopImmediatePropagation();
            e.stopPropagation();
        }
    }

    window.addEventListener('click', block, true);
    window.addEventListener('auxclick', block, true);
})();