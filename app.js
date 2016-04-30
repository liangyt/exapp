var log4js = require('log4js'); // 日志
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');

// 替换express生成项目自带的
// var logger = require('morgan');
var log = log4js.getLogger('app');

var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var sui = require('./routes/sui');

var hchart = require('./routes/hchart');

var app = express();
var swig = require('swig'); // html 模板

// view engine setup
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));

// Swig will cache templates for you, but you can disable
// that and use Express's caching instead, if you like:
app.set('view cache', false);
// To disable Swig's cache, do the following:
swig.setDefaults({ cache: false });
// NOTE: You should always cache templates in a production environment.
// Don't leave both of these to `false` in production!


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// 替换express生成项目自带的
// app.use(logger('dev'));
app.use(log4js.connectLogger(log4js.getLogger('http'), {level:'INFO'}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// 静态文件托管  所有通过 express.static 访问的文件都存放在一个“虚拟（virtual）”目录（即目录根本不存在）下面，可以通过为静态资源目录指定一个挂载路径的方式来实现
app.use('/static', express.static(path.join(__dirname, 'public')));



// 路径大类
/*
res.download()  提示下载文件。
res.end() 终结响应处理流程。
res.json()  发送一个 JSON 格式的响应。
res.jsonp() 发送一个支持 JSONP 的 JSON 格式的响应。
res.redirect()  重定向请求。
res.render()  渲染视图模板。
res.send()  发送各种类型的响应。
res.sendFile  以八位字节流的形式发送文件。
res.sendStatus()  设置响应状态代码，并将其以字符串形式作为响应体的一部分发送。
*/
app.use('/', index);
app.use('/sui', sui);
app.use('/hchart', hchart);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {

    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  log.error(err.message);
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
