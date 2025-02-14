// ==UserScript==
// @name         Test Script
// @namespace    
// @version      0.1
// @description  Test Script
// @author       You
// @match        https://rivalregions.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=rivalregions.com
// @grant        none
// @require      https://greasemonkey.github.io/gm4-polyfill/gm4-polyfill.js
// ==/UserScript==

button = '<div id="button" class="button_green index_auto pointer mslide">Test</div>';

addMenu();

function addButton() {
    document.querySelector("header_menu").insertAdjacentHTML("beforeend", button);
}