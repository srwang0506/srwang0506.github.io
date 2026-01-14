import "./style.css";
import { homepageData } from "./data/homepage.js";
import { newsData } from "./data/news.js";
import { publicationData } from "./data/publications.js";
import { honorsData } from "./data/honors.js";
import { educationData } from "./data/educations.js";
import { experienceData } from "./data/experience.js";
import { miscData } from "./data/misc.js";

var Q = function(s) { return document.querySelector(s); };
var QQ = function(s) { return document.querySelectorAll(s); };

function initTheme() {
  var saved = localStorage.getItem("theme");
  var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  var theme = saved || (prefersDark ? "dark" : "light");
  document.documentElement.setAttribute("data-theme", theme);
  updateThemeIcon(theme);
}

function toggleTheme() {
  var current = document.documentElement.getAttribute("data-theme");
  var next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
  updateThemeIcon(next);
}

function updateThemeIcon(theme) {
  var btn = Q("#themeToggle");
  if (btn) {
    btn.innerHTML = theme === "dark" ? "<i class=\"fas fa-sun\"></i>" : "<i class=\"fas fa-moon\"></i>";
  }
}

function init() {
  Q("#homeName").textContent = homepageData.name;
  Q("#homeTitle").textContent = homepageData.title;
  
  var linksContainer = Q("#homeLinks");
  linksContainer.innerHTML = "";
  
  homepageData.links.forEach(function(link) {
    var a = document.createElement("a");
    a.href = link.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.className = "contact-row"; 
    var icon = document.createElement("div");
    icon.className = "contact-icon";
    icon.innerHTML = "<i class=\"fas " + (link.icon || "fa-link") + "\"></i>";
    var content = document.createElement("span");
    content.className = "contact-text";
    content.textContent = link.text || link.label;
    a.appendChild(icon);
    a.appendChild(content);
    linksContainer.appendChild(a);
  });

  var footer = Q(".theme-toggle-wrapper");
  if (!Q("#themeToggle") && footer) {
    var btn = document.createElement("button");
    btn.id = "themeToggle";
    btn.className = "theme-btn";
    btn.style.cssText = "background:none; border:none; color:var(--text-muted); cursor:pointer; padding:0.75rem; display:flex; align-items:center; gap:0.5rem; font-size:1.25rem;";
    btn.onclick = toggleTheme;
    footer.appendChild(btn);
  }
  
  Q("#homeAbout").innerHTML = homepageData.about.map(function(p) { return "<p>" + p + "</p>"; }).join("");
  Q("#homeInterests").innerHTML = (homepageData.interests || []).map(function(i) { return "<span class=\"interest-tag\">" + i + "</span>"; }).join("");

  Q("#newsList").innerHTML = newsData.map(function(item) {
    return "<div class=\"news-item\"><div class=\"news-date\">" + item.date + "</div><div class=\"news-body\">" + item.body + "</div></div>";
  }).join("");

  renderPubs(publicationData);

  Q("#honorsList").innerHTML = honorsData.map(function(item) {
    return "<div class=\"honor-row\"><span class=\"honor-date\">" + item.date + "</span><span class=\"honor-title\">" + item.title + "</span></div>";
  }).join("");

  var renderTimeline = function(data) {
    return data.map(function(item) {
      var descHtml = item.desc && item.desc.length ? "<div class=\"cv-desc\">" + item.desc.map(function(d) { return "<div>" + d + "</div>"; }).join("") + "</div>" : "";
      return "<div class=\"cv-item\"><div class=\"cv-date\">" + item.date + "</div><div class=\"cv-main\"><h4 class=\"cv-title\">" + item.title + "</h4><div class=\"cv-sub\">" + item.sub + "</div>" + descHtml + "</div></div>";
    }).join("");
  };

  Q("#eduList").innerHTML = renderTimeline(educationData);
  Q("#expList").innerHTML = renderTimeline(experienceData);

  // Render Misc section
  Q("#miscList").innerHTML = miscData.map(function(item) {
    return "<div class=\"misc-item\"><div class=\"misc-category\">" + item.category + "</div><h4 class=\"misc-title\">" + item.title + "</h4><div class=\"misc-desc\">" + item.desc + "</div></div>";
  }).join("");
  
  initTheme();
  initNavigation();
}

function initNavigation() {
  var navLinks = QQ(".nav-link");
  var sections = QQ(".content-section");

  // Scroll spy - update active nav based on scroll position
  function updateActiveNav() {
    var scrollPos = window.scrollY + 150;
    sections.forEach(function(section) {
      var top = section.offsetTop;
      var bottom = top + section.offsetHeight;
      var id = section.getAttribute("id");
      var link = Q("a[href=\"#" + id + "\"]");
      if (link) {
        if (scrollPos >= top && scrollPos < bottom) {
          navLinks.forEach(function(l) { l.classList.remove("active"); });
          link.classList.add("active");
        }
      }
    });
  }

  window.addEventListener("scroll", updateActiveNav);
  updateActiveNav();

  // Smooth scroll on click
  navLinks.forEach(function(link) {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      var targetId = link.getAttribute("href").substring(1);
      var target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

function renderPubs(pubs) {
  Q("#pubList").innerHTML = pubs.map(function(pub) {
    var linksHtml = pub.links
      ? Object.entries(pub.links).map(function(entry) { return "<a href=\"" + entry[1] + "\" class=\"pill-link\" target=\"_blank\">" + entry[0] + "</a>"; }).join("")
      : "";
    
    var imageHtml = pub.image 
      ? "<div class=\"pub-image\"><img src=\"" + pub.image + "\" alt=\"" + pub.title + "\" onerror=\"this.parentElement.innerHTML='<div class=pub-image-placeholder><i class=fas fa-file-alt></i></div>'\" /></div>"
      : "<div class=\"pub-image\"><div class=\"pub-image-placeholder\"><i class=\"fas fa-file-alt\"></i></div></div>";
    
    return "<article class=\"pub-item\">" + imageHtml + "<div class=\"pub-content\"><h3 class=\"pub-title\">" + pub.title + "</h3><div class=\"pub-authors\">" + pub.authors + "</div><div class=\"pub-meta\"><span class=\"venue-badge\">" + pub.venue + "</span></div>" + (linksHtml ? "<div class=\"pub-links\">" + linksHtml + "</div>" : "") + "</div></article>";
  }).join("");
}

init();