const io = require('socket.io-client')('https://control-leds.herokuapp.com/');
const gpio = require('rpi-gpio');

gpio.setMode(gpio.MODE_BCM);

io.on('action', function(data) {
	gpio.setup(data.pin, gpio.DIR_OUT);
	gpio.write(data.pin, data.state='on');
})
