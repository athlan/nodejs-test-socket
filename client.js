var net = require('net');
var client = net.connect({
		port: 3005
	},
	function() { //'connect' listener
		console.log('client connected');
	});

client.on('data', function(data) {
	console.log(data.toString());
	
	setTimeout(function() {
		client.write("ping");
	}, 1000);
	
	//client.end();
});
client.on('end', function() {
	console.log('client disconnected');
});
