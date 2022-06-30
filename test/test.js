const { request, response } = require("express");

var body = '';
request.on('data', function(data){
    body = body + data;
});
request.on('end', function(){
    var post = qs.parse(body);
    console.log(post);
});
response.writeHead(200);
response.end('success');