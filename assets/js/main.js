(function () {
  "use strict";

  var nav = document.querySelector(".nav");
  var toggle = document.querySelector(".nav-toggle");
  var links = document.getElementById("nav-links");

  // Mobile menu
  if (toggle && links) {
    var setOpen = function (open) {
      links.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    };

    toggle.addEventListener("click", function () {
      setOpen(!links.classList.contains("is-open"));
    });

    links.addEventListener("click", function (e) {
      if (e.target.closest("a")) setOpen(false);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setOpen(false);
    });
  }

  // Border under the nav once the page scrolls
  if (nav) {
    var onScroll = function () {
      nav.classList.toggle("is-scrolled", window.scrollY > 4);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // Highlight the nav link for the section in view
  if (links && "IntersectionObserver" in window) {
    var navLinks = links.querySelectorAll('a[href^="#"]');
    var byId = {};
    navLinks.forEach(function (a) {
      byId[a.getAttribute("href").slice(1)] = a;
    });

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          navLinks.forEach(function (a) { a.removeAttribute("aria-current"); });
          var active = byId[entry.target.id];
          if (active) active.setAttribute("aria-current", "true");
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    Object.keys(byId).forEach(function (id) {
      var section = document.getElementById(id);
      if (section) observer.observe(section);
    });
  }

  // Hide the resume buttons until a resume PDF has been added to the repo,
  // so visitors never hit a broken download link.
  var resumeLinks = document.querySelectorAll("[data-resume]");
  if (resumeLinks.length) {
    var hideResume = function () {
      resumeLinks.forEach(function (a) { a.hidden = true; });
    };
    if (location.protocol === "file:" || !window.fetch) {
      // Can't check from a local file; leave the buttons visible.
    } else {
      fetch(resumeLinks[0].getAttribute("href"), { method: "HEAD" })
        .then(function (res) { if (!res.ok) hideResume(); })
        .catch(hideResume);
    }
  }

  // Current year in the footer
  var year = document.querySelector("[data-year]");
  if (year) year.textContent = new Date().getFullYear();
})();
