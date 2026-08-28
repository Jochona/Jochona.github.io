(function () {
  "use strict";

  var targets = ["#what", "#platforms", "#controller", "#local", "#builds", "#roadmap"];

  // Number keys 1-6 jump to screens; Escape returns to top.
  document.addEventListener("keydown", function (event) {
    if (event.altKey || event.ctrlKey || event.metaKey) return;
    var tag = event.target && event.target.tagName;
    if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
    var index = "123456".indexOf(event.key);
    if (index !== -1) {
      var section = document.querySelector(targets[index]);
      if (section) section.scrollIntoView({ block: "start" });
    } else if (event.key === "Escape") {
      window.scrollTo({ top: 0 });
    }
  });

  // Screens flick on (one-beat, no easing) as they enter view.
  var screens = document.querySelectorAll(".screen:not(.screen--hero)");
  if (!("IntersectionObserver" in window)) {
    screens.forEach(function (screen) { screen.classList.add("on"); });
    return;
  }
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("on");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px" }
  );
  screens.forEach(function (screen) { observer.observe(screen); });
})();
