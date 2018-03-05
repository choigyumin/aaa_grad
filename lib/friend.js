var friends = [
	"saseyoung",
	"kimyoungjae",
	"choigyumin",
];

exports.getFriend = function() {
	var idx = Math.floor(Math.random() * friends.length);
	return friends[idx];
};
