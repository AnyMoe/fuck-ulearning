'use strict';

var parents = chrome.contextMenus.create({ "title": "fuck-ulearning", "contexts": ["all"] });
chrome.contextMenus.create(
    { "title": chrome.i18n.getMessage("showAnswer"), "parentId": parents, "onclick": genericOnClick, id: 'showAnswer', "contexts": ["all"] });
chrome.contextMenus.create(
    { "title": chrome.i18n.getMessage("fillBlanks"), "parentId": parents, "onclick": genericOnClick, id: 'fillBlanks', "contexts": ["all"] });
chrome.contextMenus.create(
    { "title": chrome.i18n.getMessage("addSpeed5x"), "parentId": parents, "onclick": genericOnClick, id: 'addSpeed5x', "contexts": ["all"] });

function genericOnClick(info, tab) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { 'contextMenuId': info.menuItemId, 'info': info }, function (response) { });
    });
}