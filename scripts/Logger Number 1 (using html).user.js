// ==UserScript==
// @name         Logger Number 1 (using html)
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Logs the username when logging into AWS
// @author       david12457899
// @match        aws.amazon.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==

function findUserName() {
  return customerLogin; // js variable the stores the username
}

(function() {
    'use strict';

    console.log("Your user: " + findUserName());
})();