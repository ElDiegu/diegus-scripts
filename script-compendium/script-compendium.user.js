// ==UserScript==
// @name         Diegu's Script Compendium
// @namespace    github.com/ElDiegu:script_compendium
// @version      alphav1.1
// @description  This script serves as a way to centralize the loading of all my QoL scripts
// @author       Discord: el_diegu
// @match        https://rivalregions.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=rivalregions.com
// @require      https://greasemonkey.github.io/gm4-polyfill/gm4-polyfill.js
// @require      https://raw.githubusercontent.com/ElDiegu/diegus-scripts/main/war-weapons-selector/war-weapons-selector.user.js
// @downloadURL  https://raw.githubusercontent.com/ElDiegu/diegus-scripts/main/script-compendium/script-compendium.user.js
// @updateURL    https://raw.githubusercontent.com/ElDiegu/diegus-scripts/main/script-compendium/script-compendium.user.js
// ==/UserScript==

const metaData = {
    name: "Diegu's Script Compendium",
    version: "alphav1.1"
};

const nameVersion = `${metaData.name} ${metaData.version}`;
console.log("Initializing " + nameVersion);