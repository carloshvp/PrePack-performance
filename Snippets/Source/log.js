var iterations = 10000000;
console.time('Original');
for(var i = 0; i < iterations; i++ ){
  // CODE UNDER TEST START
  var z,res, y = 3, q = 2;
	y = y * 5;
	q = y - 3;
	if (z<q * y && z>5*16 || z>0 && y<2) {
		res = true;
	}
  // CODE UNDER TEST END
};
console.timeEnd('Original')


console.time('PrePack');
for(var i = 0; i < iterations; i++ ){
  // CODE UNDER TEST START
  var z, res, y, q;
  (function () {
    var _$0 = this;
  
    _$0.y = 3;
    _$0.q = 2;
    _$0.y = 15;
    _$0.q = 12;
  }).call(this);
  // CODE UNDER TEST END
};
console.timeEnd('PrePack')


console.time('SPEjs');
for(var i = 0; i < iterations; i++ ){
  // CODE UNDER TEST START
  var z,
  res,
  y = 3,
  q = 2;
y = 15;
q = 12;  

if (z < 180 && z > 80 || z > 0 && false) {
res = true;
}
  // CODE UNDER TEST END
};
console.timeEnd('SPEjs')