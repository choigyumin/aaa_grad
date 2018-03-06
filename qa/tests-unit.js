var friend = require('../lib/friend.js');
var expect = require('chai').expect;
suite('Friend tests', function(){
	test('getFriend() should return a friend', function(){
		expect(typeof friend.getFriend() === 'string');
	});
});
