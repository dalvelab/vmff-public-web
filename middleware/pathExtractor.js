const pathExtractor = function (req) {
  function escapeRegExp(str) {
    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
  }
  function replaceAll(str, find, replace) {
    return str.replace(new RegExp(escapeRegExp(find), "g"), replace);
  }
  return replaceAll(req.get("referer"), req.get("origin"), "");
};

module.exports = pathExtractor;
