// ==UserScript==
// @name         Diegu's Script Compendium
// @version      0.1
// @description  This script serves as a way to centralize the loading of all my QoL scripts
// @author       Discord: el_diegu
// @match        https://rivalregions.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=rivalregions.com
// @require      https://greasemonkey.github.io/gm4-polyfill/gm4-polyfill.js
// ==/UserScript==

const compendium_metaData = {
    name: "Diegu's Script Compendium",
    version: "alphav1.0"
};

const compendium_nameVersion = `${compendium_metaData.name} ${compendium_metaData.version}`;
console.log("Initializing " + compendium_nameVersion);