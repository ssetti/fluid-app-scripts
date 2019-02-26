// use for patterns:
//   *mail.google.com*

window.fluid.dockBadge = '';
setTimeout(updateDockBadge, 3000);
setInterval(updateDockBadge, 15000);

function updateDockBadge() {
  window.fluid.dockBadge = '';

  var res = document.title.match(/\s*Inbox\s*\(([0-9,]+)\).*/);

  if (res && res.length > 1) {
    var newBadge = res[1];
    window.fluid.dockBadge = newBadge;
  }
}
