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