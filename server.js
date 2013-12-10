var express = require('express')
, assets = require('connect-assets')
, helpers = require('./app/helpers')
, hbs = require('express-hbs')
, http = require('http')
, gzippo = require('gzippo')
, path = require('path')
, routes = require('./routes');

var app = express();

app.engine('hbs', hbs.express3({
  defaultLayout: __dirname + '/views/layout'
}));

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.set('port', process.env.PORT || 3000);
app.use(express.favicon());

app.use(gzippo.staticGzip(__dirname + '/public'));

app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);

app.use(assets({
    src: __dirname + '/app',
    buildDir: './public'
}));

app.configure('development', function(){
    app.use(express.logger('dev'));
    app.use(express.errorHandler());
});

app.get('/', routes.index);

http.createServer(app).listen(app.get('port'), function(){
    console.log("Express server listening on port " + app.get('port'));
});
