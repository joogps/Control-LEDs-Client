const io = require('socket.io-client')('https://control-leds.herokuapp.com/');
const gpio = require('rpi-gpio');

gpio.setMode(gpio.MODE_BCM);
gpio.setup(4, gpio.DIR_OUT);

io.on('action', function(data) {
	gpio.write(data.pin, data.state=='on');
})
