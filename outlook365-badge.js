// use for patterns:
// *outlook.office365.com/mail*

window.fluid.dockBadge = '';
setTimeout(updateDockBadge, 3000);
setInterval(updateDockBadge, 15000);

function updateDockBadge() {
  window.fluid.dockBadge = '';
  var unreadNodes = document.getElementsByClassName("_1R8zyedlf574PfvRosuwXp _1_HkktuR4sRdjYB0AoBe8f");
  if (unreadNodes && unreadNodes.length > 0) {
    var count = unreadNodes[0].childNodes[0].textContent;
    console.log(count);
    if (count > 0) {
      window.fluid.dockBadge = count;
    }
  }
}

