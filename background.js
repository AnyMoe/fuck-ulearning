'use strict';

/*
Copyright 2019 AnyMoe

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

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