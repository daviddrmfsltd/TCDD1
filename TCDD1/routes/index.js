
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.gallery = function(req, res){
	res.render('gallery', { title: 'gallery'});
};


exports.video1 = function(req, res){
	res.render('video1', { title: '翻轉開始篇'});
};
exports.video2 = function(req, res){
	res.render('video2', { title: '翻轉篇'});
};
exports.video3 = function(req, res){
	res.render('video3', { title: 'Demo Day Party 篇'});
};
exports.videolive = function(req, res){
	res.render('videolive', { title: 'TC Demo Day#1 現場直播'});
};