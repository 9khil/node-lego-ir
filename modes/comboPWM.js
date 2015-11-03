/*
	Combo PWM mode
This mode is able to control: Two outputs with PWM in 7 steps forward and backward.
This is a combo command controlling the state of both output A and B at the same time.
Toggle bit is not verified on receiver.
This mode has timeout for lost IR.

See docs page 10 for more
*/

var mode = {
	code: '0002',
	outputs: ['outputA', 'outputB'],
	moves: {
		float: '0000',
		forward1: '0001', 
		forward2: '0010',
		forward3: '0011',
		forward4: '0100',
		forward5: '0101',
		forward6: '0110',
		forward7: '0111',
		brake: '1000',
		backward7: '1001',
		backward6: '1010',
		backward5: '1011',
		backward4: '1100',
		backward3: '1101',
		backward2: '1110',
		backward1: '1111'

	}
};

module.exports = mode;