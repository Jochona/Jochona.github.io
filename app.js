(function () {
  "use strict";

  document.documentElement.classList.add("js");

  var topbar = document.querySelector(".topbar");
  var navToggle = document.querySelector(".nav-toggle");
  var navLinks = document.querySelectorAll(".nav-links a");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  function closeNavigation() {
    if (!topbar || !navToggle) return;
    topbar.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  }

  if (topbar) {
    function updateTopbar() {
      topbar.classList.toggle("is-scrolled", window.scrollY > 18);
    }

    updateTopbar();
    window.addEventListener("scroll", updateTopbar, { passive: true });
  }

  if (topbar && navToggle) {
    navToggle.addEventListener("click", function () {
      var open = topbar.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    navLinks.forEach(function (link) {
      link.addEventListener("click", closeNavigation);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && topbar.classList.contains("is-open")) {
        closeNavigation();
        navToggle.focus();
      }
    });
  }

  var visual = document.querySelector(".direct-visual");
  var canvas = document.querySelector("[data-signal-field]");
  var beam = document.querySelector(".beam--core");

  if (!visual || !canvas || !beam) return;

  var context = canvas.getContext("2d", { alpha: true });
  if (!context) return;

  var stars = [];
  var particlePhases = [0.02, 0.19, 0.37, 0.54, 0.72, 0.89];
  var width = 0;
  var height = 0;
  var pixelRatio = 1;
  var frame = 0;
  var running = false;
  var visible = true;
  var startTime = performance.now();

  function seededRandom(seed) {
    var value = Math.sin(seed * 999.91) * 43758.5453;
    return value - Math.floor(value);
  }

  for (var index = 0; index < 42; index += 1) {
    stars.push({
      x: seededRandom(index + 1),
      y: seededRandom(index + 43),
      size: 0.45 + seededRandom(index + 89) * 1.15,
      alpha: 0.1 + seededRandom(index + 131) * 0.38,
      phase: seededRandom(index + 173) * Math.PI * 2
    });
  }

  function resizeCanvas() {
    var bounds = visual.getBoundingClientRect();
    var nextWidth = Math.max(1, Math.round(bounds.width));
    var nextHeight = Math.max(1, Math.round(bounds.height));
    var nextRatio = Math.min(window.devicePixelRatio || 1, 2);

    if (nextWidth === width && nextHeight === height && nextRatio === pixelRatio) return;

    width = nextWidth;
    height = nextHeight;
    pixelRatio = nextRatio;
    canvas.width = Math.round(width * pixelRatio);
    canvas.height = Math.round(height * pixelRatio);
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    route = routeCoordinates();
    draw(performance.now());
  }

  var route = null;

  function routeCoordinates() {
    var visualBounds = visual.getBoundingClientRect();
    var beamBounds = beam.getBoundingClientRect();
    return {
      x1: beamBounds.left - visualBounds.left,
      y1: beamBounds.bottom - visualBounds.top,
      x2: beamBounds.right - visualBounds.left,
      y2: beamBounds.top - visualBounds.top
    };
  }

  function draw(now) {
    context.clearRect(0, 0, width, height);

    var elapsed = (now - startTime) / 1000;
    var twinkle = reduceMotion.matches ? 0 : elapsed;

    for (var starIndex = 0; starIndex < stars.length; starIndex += 1) {
      var star = stars[starIndex];
      var starAlpha = star.alpha * (0.72 + Math.sin(twinkle * 0.75 + star.phase) * 0.28);
      context.fillStyle = "rgba(214, 224, 236," + starAlpha.toFixed(3) + ")";
      context.beginPath();
      context.arc(star.x * width, star.y * height, star.size, 0, Math.PI * 2);
      context.fill();
    }

    if (!route) route = routeCoordinates();
    var speed = reduceMotion.matches ? 0 : elapsed * 0.19;

    context.save();
    context.shadowColor = "rgba(84, 234, 208, 0.75)";
    context.shadowBlur = 10;

    for (var particleIndex = 0; particleIndex < particlePhases.length; particleIndex += 1) {
      var progress = (speed + particlePhases[particleIndex]) % 1;
      var fade = Math.sin(progress * Math.PI);
      var x = route.x1 + (route.x2 - route.x1) * progress;
      var y = route.y1 + (route.y2 - route.y1) * progress;
      var radius = 1.3 + fade * 1.15;

      context.fillStyle = "rgba(157, 245, 228," + (0.22 + fade * 0.78).toFixed(3) + ")";
      context.beginPath();
      context.arc(x, y, radius, 0, Math.PI * 2);
      context.fill();
    }

    context.restore();
  }

  function animate(now) {
    if (!running) return;
    draw(now);
    frame = window.requestAnimationFrame(animate);
  }

  function syncAnimation() {
    var shouldRun = visible && !reduceMotion.matches;

    if (shouldRun && !running) {
      running = true;
      frame = window.requestAnimationFrame(animate);
    } else if (!shouldRun && running) {
      running = false;
      window.cancelAnimationFrame(frame);
      draw(performance.now());
    } else if (!shouldRun) {
      draw(performance.now());
    }
  }

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
      visible = entries[0].isIntersecting;
      if (visible) visual.classList.add("is-live");
      syncAnimation();
    }, { rootMargin: "120px" });
    observer.observe(visual);
  } else {
    visual.classList.add("is-live");
  }

  if ("ResizeObserver" in window) {
    new ResizeObserver(resizeCanvas).observe(visual);
  } else {
    window.addEventListener("resize", resizeCanvas, { passive: true });
  }

  if (typeof reduceMotion.addEventListener === "function") {
    reduceMotion.addEventListener("change", syncAnimation);
  }


  resizeCanvas();
  window.requestAnimationFrame(function () {
    visual.classList.add("is-live");
    syncAnimation();
  });
})();
