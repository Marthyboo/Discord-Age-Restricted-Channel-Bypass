// ==UserScript==
// @name         Discord Age Verification Status Modifier
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Modifies the age verification status of the current user in Discord's web client.
// @author       Martmatch
// @match        https://discord.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=discord.com
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';

    function setAgeVerificationStatus() {
        try {
            const modules = Object.values(webpackChunkdiscord_app.push([[Symbol()], {}, r => r.c]));
            const userModule = modules.find(x => x?.exports?.default?.__proto__?.getCurrentUser);

            if (userModule?.exports?.default?.getCurrentUser) {
                // set status to 3
                userModule.exports.default.getCurrentUser().ageVerificationStatus = 3;
            } else {
            }
        } catch (error) {
        }
    }

    // full load
    window.addEventListener('load', () => {
        setTimeout(setAgeVerificationStatus, 5000);
    });
})();
