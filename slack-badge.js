window.fluid.dockBadge = '';
setTimeout(updateDockBadge, 3000);
setInterval(updateDockBadge, 15000);

function updateDockBadge() {
  window.fluid.dockBadge = '';
  var unreadItems = document.getElementsByClassName("p-channel_sidebar__channel--unread").length;
  if (unreadItems > 0) {
    window.fluid.dockBadge = unreadItems;
  }
}
