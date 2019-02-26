window.fluid.dockBadge = '';
setTimeout(updateDockBadge, 3000);
setInterval(updateDockBadge, 15000);

function updateDockBadge() {
  var unreadItems = document.getElementsByClassName("p-channel_sidebar__channel--unread").length;
  if (unreadItems > 0) {
    window.fluid.dockBadge = unreadItems;
  } else {
    window.fluid.dockBadge = '';
  }
}
