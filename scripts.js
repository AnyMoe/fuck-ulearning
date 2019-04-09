'use strict';

try {
    chrome.extension.onMessage.addListener(function (request, _, response) {
        console.log(request);
        switch(request.contextMenuId){
            case "fillBlanks":fillBlanks();break;
            case "showAnswer":showAnswer();break;
            case "addSpeed5x":addSpeed5x();break;
        }
    });
} catch (error) {
    alert("fuck-ulearning 插件加载失败");
    console.log(error);
}