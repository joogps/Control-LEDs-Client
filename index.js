const io = require('socket.io-client')('https://control-leds.herokuapp.com/');
const gpio = require('rpi-gpio');

gpio.setMode(gpio.MODE_BCM);

const pins = [4];
for (let pin of pins)
	gpio.setup(pin, gpio.DIR_OUT);

io.on('action', function(data) {
	if (pins.includes(data.pin) && ['on', 'off'].includes(data.state))
		gpio.write(data.pin, data.state=='on');
});
