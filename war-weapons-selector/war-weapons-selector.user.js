// ==UserScript==
// @name         War Weapons Selector
// @namespace    github.com/ElDiegu:war_weapons_selector
// @version      1.1
// @description  Places full, half or 2/3 of usable weapons in weapons slots of wars.
// @author       Discord: el_diegu
// @match        https://rivalregions.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=rivalregions.com
// @require      https://greasemonkey.github.io/gm4-polyfill/gm4-polyfill.js
// ==/UserScript==

const wws_metaData = {
    name: "War Weapons Selector",
    version: "v1.1"
};

console.log(`Initializing ${wws_metaData.name} ${wws_metaData.version}`);

const level = document.getElementsByClassName("my_expbar_exp")[0].innerText;
const alphaDamage = 125000 + 2500 * (level - 30);

window.addEventListener("popstate", initializeInterface);

/**
 * If refreshing war screen, we wait for the elements to instantiate on the DOM
 */
setTimeout(function() { 
    window.dispatchEvent(new Event("popstate")) }, 
    500
);

/**
 * Instantiate the buttons under the weapons selectors
 */
function initializeInterface() {
    if (!location.href.includes("/#war/details/")) return;
    
    console.log(nameVersion + ": initializing interface");
    
    document.querySelectorAll(".war_w_unit").forEach(unit => {
        var fullButton = '<div id="full_button_' + unit.parentElement.getAttribute("url") + '"class="button_green">Full</div>';
        unit.insertAdjacentHTML("beforeend", fullButton);
        unit.lastElementChild.addEventListener("click", function() {
            onWeaponsButtonClicked.call(this, 0);
        });
    });
}


function onWeaponsButtonClicked(mode) {
    document.querySelectorAll('.war_w_unit_input').forEach(input => input.value = 0);
    
    var parent = this.parentElement;
    var weaponDamage = parent.getAttribute("damage");
    var weaponAmount = Math.floor(alphaDamage / weaponDamage);
    
    switch (mode) {
        case 0:
            parent.querySelector(".war_w_unit_input").value = weaponAmount;
        case 1:
            //TO DO: Send enough weapons to spend only half of energy every attack
        case 2:
            //TO DO: Send enough weapons to spend only one third of energy every attack
    }
}