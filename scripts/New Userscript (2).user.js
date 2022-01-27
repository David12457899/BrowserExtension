// ==UserScript==
// @name         logger s3 buckets
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Logger for s3 buckets
// @author       You
// @match        https://s3.console.aws.amazon.com/s3/home*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @run-at document-end
// ==/UserScript==

(function() {
    'use strict';

    window.addEventListener('load', function() {
        let buckets = document.getElementsByClassName("bucket-name"); // Wait for the window to load
        console.log(buckets);
        console.log(buckets.length);
        console.log(buckets);
    }, false);


})();