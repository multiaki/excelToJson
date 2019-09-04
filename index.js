var http = require('http');
var dt = require('./ConvertExcel');

var schema = "{ [data :{ name : col0, dob : col1, city : col3 } ]}";

console.log(dt.Exceltojson("data2.xlsx", schema))
/*
http.createServer(function (req, res) {
  var schema = "{ [data :{ name : col0, dob : col1, city : col3 } ]}";

  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("json struct - " + dt.Exceltojson("data1.xlsx", schema));
  res.end();
}).listen(8080);
*/
