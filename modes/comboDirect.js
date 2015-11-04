/*
Combo direct mode

	nibbles:

start | a 1 C C | B B B B | A A A A | L L L L | stop

a: address
e: escape
c: channel
t: toggle
B: output B
A: output a
start: special sync start bit (see encoding in docs)
stop: same as start
*/

var mode = {
	code: '0001',
	outputs: ['outputA', 'outputB'],
	moves: {
		float: '00',
		forward: '01',
		backward: '10',
		brake: '11'
	}
};

module.exports = mode;
