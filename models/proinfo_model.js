var mongoose = require('../db/mongoose');


// 数据结构  可以设计索引
var proinfoSchema = new mongoose.Schema({
  name:String,
  imgList:[String],
  count:Number,
  content:String
});

proinfoSchema.methods.speak = function() {
  var greeting = this.name ? "Meow name is " + this.name : "I don't have a name";
  console.log(greeting);
}

var proinfo = mongoose.model('proinfo', proinfoSchema);

// 保存
var save = function(o, callback) {
    var entity = new proinfo({
      name:'TEST',
      imgList:['../img/girl','../img/girl'],
      count:20,
      content:'商品介绍'
    });

    entity.save();
}

// 查询所有
var queryAll = function(callback) {
    proinfo.find(function(err, proinfos) {
        callback(err, proinfos);
    });
}

// 根据名字查询
var findByName = function(name, callback) {
    proinfo.find({name:/^Silence/}, function(err, proinfos) {
        callback(err, proinfos);
    });
}

module.exports = {
    save:save,
    queryAll:queryAll,
    findByName:findByName
};
