function modifyDate(date) {
  let modifiedDate = date.split(".");
  modifiedDate = modifiedDate.map((date) => {
    if (date.charAt(0) === "0") {
      return date.substr(1, 1);
    } else {
      return date.substr(0, 2);
    }
  });
  return modifiedDate;
}

module.exports = modifyDate;
