// Mobile menu toggle
(function () {
  var btn = document.querySelector(".menu-toggle");
  var nav = document.getElementById("site-nav");
  if (!btn || !nav) return;
  btn.addEventListener("click", function () {
    var open = nav.classList.toggle("is-open");
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    btn.textContent = open ? "Close" : "Menu";
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && nav.classList.contains("is-open")) {
      nav.classList.remove("is-open");
      btn.setAttribute("aria-expanded", "false");
      btn.textContent = "Menu";
      btn.focus();
    }
  });
})();

// Pool finder: filter the pools table by lesson type
(function () {
  document.querySelectorAll("[data-finder]").forEach(function (box) {
    var chips = box.querySelectorAll("[data-filter]");
    var rows = box.querySelectorAll("tbody tr");
    var status = box.querySelector(".finder__status");
    var bar = box.querySelector(".chips");
    if (bar) bar.hidden = false;
    chips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        var f = chip.getAttribute("data-filter");
        var shown = 0;
        chips.forEach(function (c) { c.setAttribute("aria-pressed", c === chip ? "true" : "false"); });
        rows.forEach(function (r) {
          var kinds = " " + (r.getAttribute("data-kinds") || "") + " ";
          var ok = f === "all" || kinds.indexOf(" " + f + " ") > -1;
          r.hidden = !ok;
          if (ok) shown++;
        });
        status.textContent = f === "all" ? "" : shown + (shown === 1 ? " pool matches." : " pools match.");
      });
    });
  });
})();
