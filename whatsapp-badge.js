// use for patterns:
//   *whatsapp.com*

window.fluid.dockBadge = '';
setTimeout(updateDockBadge, 3000);
setInterval(updateDockBadge, 15000);

function updateDockBadge() {
  window.fluid.dockBadge = '';
  var items = document.getElementsByClassName("P6z4j");
  var itemCount = 0;
  for (var i = 0; i < items.length; i += 1) {
    itemCount += Number(items[i].textContent);
  }
  if (itemCount !== 0) {
    window.fluid.dockBadge = itemCount;
  }
}
