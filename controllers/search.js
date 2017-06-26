exports.index = function (req, res, next) {
  var q = req.query.q;
  q = encodeURIComponent(q);
  res.redirect('https://www.baidu.com/s?ct=2097152&si=www.magicgis.cn&wd=' + q);
};
