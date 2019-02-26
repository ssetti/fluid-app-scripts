window.fluid.dockBadge = '';
setTimeout(updateDockBadge, 3000);
setInterval(updateDockBadge, 15000);

function updateDockBadge() {
   var items = document.getElementsByClassName("OUeyt");
   var itemCount = 0;
   for (var i = 0; i < items.length; i += 1) {
       itemCount += Number(items[i].textContent);
   }
   if (itemCount === 0) {
       window.fluid.dockBadge = '';
   } else {
     	window.fluid.dockBadge = itemCount;
   }
}
