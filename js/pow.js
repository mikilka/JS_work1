function pow(base, exponent) {
	if (exponent>0) {
		return Math.pow(base,exponent);
	}
	else if (exponent<0) {
		return 1/Math.pow(base,-1*exponent);
	} else {
		return '1';
	}
}

var a = prompt('put base:', '');
var b = prompt('put exponent:', '');

var powResult = pow(a, b);
console.log('pow result =', powResult);
