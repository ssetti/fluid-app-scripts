// use for patterns:
//   *slack.com*

window.fluid.dockBadge = '';
setTimeout(updateDockBadge, 3000);
setInterval(updateDockBadge, 15000);

function updateDockBadge() {
  window.fluid.dockBadge = '';
  var unreadItems = document.getElementsByClassName("p-channel_sidebar__channel--unread").length;
  var mutedItems = document.getElementsByClassName("p-channel_sidebar__channel--muted").length;
  unreadItems = unreadItems - mutedItems;
  if (unreadItems > 0 || mutedItems > 0) {
    window.fluid.dockBadge = unreadItems + '/' + mutedItems;
  }
}
