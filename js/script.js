window.onscroll = function() { scrollFunction() };

var sectionHeaders = new Array();
var activeSectionHeader = null;
var sectionNavItems = new Array();

function checkVisible(elm, threshold, mode) {
  threshold = threshold || 0;
  mode = mode || 'visible';
  var rect = elm.getBoundingClientRect();
  var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
  var above = rect.bottom - threshold < 0;
  var below = rect.top - viewHeight + threshold >= 0;
  return mode === 'above' ? above : (mode === 'below' ? below : !above && !below);
}

function goToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById("go-to-top-btn").style.display = "block";

    document.getElementById("navbar").style.top = 0;
    document.getElementById("navbar").style.borderRadius = "0 0 0.5em 0.5em";
    document.getElementById("navbar").style.padding = "0.2ex 1ex";
    document.getElementById("header-title").style.fontSize = "small";
    document.getElementById("header-menu").style.margin = 0;
  } else {
    document.getElementById("go-to-top-btn").style.display = "none";

    document.getElementById("navbar").style.top = "1em";
    document.getElementById("navbar").style.borderRadius = "0.5em";
    document.getElementById("navbar").style.padding = "1.2em 1em 0.7em 1em";
    if (window.innerWidth > 880) {
      document.getElementById("header-title").style.fontSize = "x-large";
      document.getElementById("header-menu").style.margin = "0.25em 0 0 0";
    }
  }


  for (var i = 0; i < sectionHeaders.length; i++) {
    if (checkVisible(sectionHeaders[i], 0)) {
      if (activeSectionHeader != sectionHeaders[i]) {
        activeSectionHeader = sectionHeaders[i];
        sectionNavItems[i].classList.add("active");
        // sectionNavItems[i].style.border = "1px snow solid";
        // sectionNavItems[i].style.color = "black";
        // sectionNavItems[i].style.backgroundColor = "orange";
        sectionNavItems[i].classList.add("active-section");

        for (var j = 0; j < sectionHeaders.length; j++) {
          if (j != i && sectionNavItems[j] != "undefined") {
            // sectionNavItems[j].style.border = "none";
            // sectionNavItems[j].style.color = "snow";
            // sectionNavItems[j].style.backgroundColor = "sienna";
            sectionNavItems[j].classList.remove("active-section");
          }
        }
      }
      break;
    }
  }

}
