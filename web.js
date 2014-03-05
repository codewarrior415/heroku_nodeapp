var express = require("express");
var logfmt = require("logfmt");
var app = express();
//var errorLogger = new logfmt;

app.use(logfmt.requestLogger());

app.get('/', function(req, res) {
  res.send('Hello World!');
});

logfmt.log({dir: __dirname});

app.use("/vendor", express.static(__dirname + '/ember-app-kit-master/vendor'));
app.use("/config", express.static(__dirname + '/ember-app-kit-master/config'));
app.use("/assets", express.static(__dirname + '/ember-app-kit-master/dist/assets'));
app.use("/app", express.static(__dirname + '/ember-app-kit-master/tmp/result'));
app.use("/dist", express.static(__dirname + '/ember-app-kit-master/dist'));
var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});

