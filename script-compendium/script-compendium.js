// ==UserScript==
// @name         War Weapons Selector
// @version      0.1
// @description  Places full, half or 2/3 of usable weapons in weapons slots of wars.
// @author       Discord: el_diegu
// @match        https://rivalregions.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=rivalregions.com
// @require      https://greasemonkey.github.io/gm4-polyfill/gm4-polyfill.js
// @require      https://github.com/ElDiegu/diegus-scripts/raw/script/war-weapons-selector/war-weapons-selector/war-weapons-selector.js
// ==/UserScript==

const compendium_metaData = {
    name: "Diegu's Script Compendium",
    version: "alphav1.0"
};

const compendium_nameVersion = `${compendium_metaData.name} ${compendium_metaData.version}`;
console.log("Initializing " + compendium_nameVersion);