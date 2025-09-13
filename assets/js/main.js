"use strict";
/**
 * @licstart  The following is the entire license notice for the 
 *  JavaScript code in this page.
 *
 * Copyright (C) 2025  The App Fair Project
 *
 *
 * The JavaScript code in this page is free software: you can
 * redistribute it and/or modify it under the terms of the GNU
 * General Public License (GNU GPL) as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option)
 * any later version.  The code is distributed WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.
 *
 * As additional permission under GNU GPL version 3 section 7, you
 * may distribute non-source (e.g., minimized or compacted) forms of
 * that code without the copy of the GNU GPL normally required by
 * section 4, provided you include this license notice and a URL
 * through which recipients can access the Corresponding Source.
 *
 * @licend  The above is the entire license notice
 * for the JavaScript code in this page.
 *
 */

// Floating Header Effect
window.addEventListener("scroll", function(event) {
  if (window.scrollY > 0 && (document.body.clientHeight > window.innerHeight)) {
    document.querySelector("header").classList.add("floating");
  } else {
    document.querySelector("header").classList.remove("floating");
  }
})

// Mobile Navigation Toggle
function toggleNavigation() {
  if (document.body.classList.contains("sidebar-enabled")) {
    document.body.classList.remove("sidebar-enabled");
  } else {
    document.body.classList.add("sidebar-enabled");
  }
}

// Rotating Screenshot
function showScreenshot(name, sender) {
  document.querySelector(".screenshot-block picture.displayed").classList.remove("displayed");
  document.getElementById(name).classList.add("displayed");

  document.querySelector(".screenshot-row .text-block .card.selected").classList.remove("selected");
  sender.classList.add("selected");
}

var theme = 'light';
if (localStorage.getItem('theme')) {
  if (localStorage.getItem('theme') === 'dark') {
    theme = 'dark';
  }
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  theme = 'dark';
}

var theme;

function theme_apply() {
  'use strict';
  if (theme === 'light') {
    document.getElementById('theme_readout').innerHTML = 'Dark';
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  } else {
    document.getElementById('theme_readout').innerHTML = 'Light';
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }
}

if (document.getElementById('theme_readout')) {
    theme_apply();
}  

function theme_switch() {
  'use strict';
  if (theme === 'light') {
    theme = 'dark';
  } else {
    theme = 'light';
  }
  theme_apply();
}

var theme_OS = window.matchMedia('(prefers-color-scheme: light)');
theme_OS.addEventListener('change', function (e) {
  'use strict';
  if (e.matches) {
    theme = 'light';
  } else {
    theme = 'dark';
  }
  theme_apply();
});

