// ==UserScript==
// @name         Logger Number 2 (using cookies)
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Logs the username when logging into AWS
// @author       david12457899
// @match        aws.amazon.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==

function findUserType(name) {
  // Retreiving the cookie
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  // parsing the cookie and extracting the username
  if (parts.length === 2) return decodeURI(parts.pop().split(';').shift()).split("%2C")[2].split('"')[3]
}

(function() {
    'use strict';

    console.log("Found User: " + findUserType("aws-userInfo"));
})();