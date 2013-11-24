module.exports = function(epsilon){
    return function(a,b) {
	return Math.abs(a - b) > epsilon;
    };
}
