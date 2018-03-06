var Browser = require('zombie'),
	assert = require('chai').assert;

var browser;

suite('Cross-Page Tests', function(){
	setup(function(){
		browser = new Browser();
	});

	test('requesting a group rate from the gongji sahang page' +
			'should populate the referrer field', function(done){
				var referrer = 'http://123.142.172.150:2043/menus/gongji';
				browser.visit(referrer, function(){
					browser.clickLink('.requestGroupRate', function(){
						assert(browser.field('referrer').value === referrer);
						done();
					});
				});
			});

	test('requesting a group rate from the chun-kee page should' +
			'populate the referrer field', function(done){
				var referrer = 'http://123.142.172.150:2043/menus/chun-kee';
				browser.visit(referrer, function(){
					browser.clickLink('.requestGroupRate', function(){
						assert(browser.field('referrer').value === referrer);
						done();
					});
				});
			});

	test('visiting the "request group rate" page directly should result' +
			'in an empty referrer field', function(done){
				browser.visit('http://localhost:3000/menus/request-group-rate', 
				function(){
					assert(browser.field('referrer').value ==='');
					done();
				});
	});
});

