(function () {
  "use strict";

  var topbar = document.querySelector(".topbar");
  var navToggle = document.querySelector(".nav-toggle");

  if (topbar && navToggle) {
    navToggle.addEventListener("click", function () {
      var open = topbar.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    topbar.querySelectorAll(".nav-links a").forEach(function (link) {
      link.addEventListener("click", function () {
        topbar.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Draw the hero plotted course once, on load — the signature interaction.
  var heroChart = document.querySelector(".chart-figure");
  if (heroChart) {
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        heroChart.classList.add("is-drawn");
      });
    });
  }
})();
