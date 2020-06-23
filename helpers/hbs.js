module.exports = {
  listItem: function (from, to, context, options) {
    var item = "";
    for (var i = from, j = to; i < j; i++) {
      item = item + options.fn(context[i]);
    }
    return item;
  },
};
