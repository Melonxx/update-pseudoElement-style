function ruleSelector(selector) {
  function uni(selector) {
    return selector.replace(/::/g, ':')
  }
  // es6
  return Array.from(document.styleSheets).reduce((a,b) => {
    return a.concat(Array.from(b.cssRules))
  }, []).filter(x => {
    return uni(x.selectorText) === uni(selector);
  })
  // es5
  // return Array.prototype.filter.call(Array.prototype.concat.apply([], Array.prototype.map.call(document.styleSheets, function (x) {
  //   return Array.prototype.slice.call(x.cssRules);
  // })), function (x) {
  //   return uni(x.selectorText) === uni(selector);
  // });
}

var toggle = false,
  pseudo = ruleSelector("ref::before").slice(-1);

document.querySelector("article").onclick = function () {
  pseudo.forEach(function (rule) {
    if (toggle = !toggle)
      rule.style.color = "red";
    else
      rule.style.color = "black";
  });
}
