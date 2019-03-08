// use for patterns:
//   *wunderlist.com*

window.fluid.dockBadge = '';
setTimeout(updateDockBadge, 3000);
setInterval(updateDockBadge, 15000);

function updateDockBadge() {
  window.fluid.dockBadge = '';
  var { overdue, total } = getCount("filters-collection", "today");
  var { overdue: overdueall, total: totalall } = getCount("lists-collection");
  if (total || overdue) {
    window.fluid.dockBadge = `${overdue}/${total}/${totalall}`;
  }
}

function getCount(collection, specifics) {
  var filters = document.getElementsByClassName(collection);
  var overdue = 0;
  var total = 0;
  if (filters.length > 0) {
    filters[0].childNodes.forEach(node => {
      if (specifics && node.attributes['rel'].textContent === specifics) {
        overdue = Number(node.getElementsByClassName("overdue-count")[0].textContent);
        total = Number(node.getElementsByClassName("count")[0].textContent);
      } else if (!specifics) {
        overdue += Number(node.getElementsByClassName("overdue-count")[0].textContent);
        total += Number(node.getElementsByClassName("count")[0].textContent); 
      }
    });
  }  
  return { overdue, total };
}
