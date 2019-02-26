// use for patterns:
//   *mail.google.com*

window.fluid.dockBadge = '';
setTimeout(updateDockBadge, 3000);
setInterval(updateDockBadge, 15000);

function updateDockBadge() {
  var title = document.title;
  var regex = /\s*Inbox\s*\(([0-9,]+)\)[^\d]*/;
  var res = title.match(regex);

  if (res && res.length > 1) {
    var newBadge = res[1];
    window.fluid.dockBadge = newBadge;
  } else {
    regex = /^Inbox$/;
    if(regex.test(inboxLink.title)){
      window.fluid.dockBadge = '';
    }
  }
}
